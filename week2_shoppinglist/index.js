import { SHOPPING_LIST } from "./item.js";

/* onclick 이벤트 */
export const qs = (selector, scope = document) => {
  return scope.querySelector(selector);
};
document.addEventListener("DOMContentLoaded", () => {
  // cart 이벤트 리스너 추가
  qs(".allBtn") &&
    qs(".allBtn").addEventListener("click", () => selectAll(qs(".allBtn")));
  qs(".openBtn") && qs(".openBtn").addEventListener("click", goOpen);
  qs(".confirmBtn") && qs(".confirmBtn").addEventListener("click", goConfirm);
  qs(".allRender") &&
    qs(".allRender").addEventListener("click", () => renderItems("all"));
  qs(".stationeryRender") &&
    qs(".stationeryRender").addEventListener("click", () =>
      renderItems("stationery")
    );
  qs(".fashionRender") &&
    qs(".fashionRender").addEventListener("click", () =>
      renderItems("fashion")
    );
  qs(".digitalRender") &&
    qs(".digitalRender").addEventListener("click", () =>
      renderItems("digital")
    );
  //버튼 태그도 구현 가능하도록
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("homeBtn")) {
      goHome();
    }
  });
});

/* header */

// 웹 컴포넌트로 header 삽입
class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <img
        src="./images/logo.png"
        alt="쇼핑몰 로고"
        width="36rem"
        class ="homeBtn"
      />
      <h1 lang="en">SHOPPING LIST</h1>
      <img src="./images/menu.svg" alt="햄버거" class="openNavBtn"/>
    </header>
    <nav class="sidebar">
      <div class="menuBtn closeNavBtn">x
      </div>
      <ul>
        <li>관심 상품 목록</li>
        <li>관리자 페이지</li>
        <li><a href="cart.html">장바구니</a></li>
      </ul>
    </nav>
      `;
    this.querySelector(".openNavBtn").addEventListener("click", openNav);
    this.querySelector(".closeNavBtn").addEventListener("click", closeNav);
  }
}
customElements.define("shop-header", HeaderComponent); // html 태그 정의 및 구현

// home 이동
function goHome() {
  location.href = "index.html";
}
const sidebar = document.querySelector(".sidebar");
// 사이드바 오픈
function openNav() {
  sidebar.style.transform = "translateX(0)";
}
// 사이드바 닫기
function closeNav() {
  sidebar.style.transform = "translateX(100%)";
}

/* index */

// 상품 리스트 렌더링
function renderItems(filterCategory = "all") {
  const filteredItems = SHOPPING_LIST.filter((item) => {
    return filterCategory === "all" || item.category === filterCategory; // 상품 카테고리 필터링
  });

  const itemsContainer = document.querySelector(".items"); // 상품 리스트를 렌더링할 class 가져오기
  itemsContainer.innerHTML = ``; // 기존 상품 목록 비우기

  // 상품 목록 추가
  filteredItems.forEach((item) => {
    const article = document.createElement("article"); // 각 상품에 대한 article 생성
    article.className = "item";
    article.onclick = function () {
      addCart(item);
    };

    // 이미지
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "상품 이미지";
    img.className = "item-image";

    // 좋아요
    const likeDiv = document.createElement("div");
    likeDiv.className = "like";

    // 상품명
    const nameP = document.createElement("p");
    nameP.className = "name";
    nameP.textContent = item.name;

    // 가격
    const priceP = document.createElement("p");
    priceP.className = "price";
    priceP.textContent =
      item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
      "원"; // 천단위 표시

    // 요소 추가
    article.appendChild(img);
    article.appendChild(likeDiv);
    article.appendChild(nameP);
    article.appendChild(priceP);
    itemsContainer.appendChild(article);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderItems(); // 문서 로드 완료 후 함수 호출
});

//장바구니 목록 추가
function addCart(item) {
  let cartList = JSON.parse(localStorage.getItem("cartList")) || []; // cartList가 배열이 아닌 경우, 빈 배열로 초기화
  const newCartList = [...cartList, item]; // 새 상품 추가
  localStorage.setItem("cartList", JSON.stringify(newCartList)); // 변경된 장바구니 목록을 로컬 스토리지에 저장
  alert(`${item.name}을(를) 장바구니에 담았습니다.`);
  const answer = confirm("장바구니로 이동하시겠습니까?");
  if (answer == true) {
    location.href = "cart.html";
  }
}

/* cart.html */

// 장바구니 목록 렌더링
function renderCartItems() {
  const cartItemsContainer = document.querySelector(".cartlist"); // 상품 리스트를 렌더링할 class 가져오기
  cartItemsContainer.innerHTML = ``; // 기존 상품 목록 비우기

  let cartList = JSON.parse(localStorage.getItem("cartList") || "[]");
  cartList.forEach((item) => {
    const tr = document.createElement("tr");
    // 데이터셋에 아이템 속성을 개별적으로 추가
    tr.dataset.id = item.id;
    tr.dataset.name = item.name;
    tr.dataset.image = item.image;
    tr.dataset.price = item.price;
    tr.dataset.category = item.category;

    // 체크박스
    const checktd = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "item";
    checkbox.onclick = function (event) {
      onclick = checkSelectAll(event.target);
    };
    checktd.appendChild(checkbox);

    // 이미지
    const imgtd = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "item-image";
    imgtd.appendChild(img);

    // 상품명
    const nametd = document.createElement("td");
    nametd.textContent = item.name;

    // 가격
    const pricetd = document.createElement("td");
    pricetd.textContent =
      item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
      "원"; // 천단위 표시

    // 카테고리
    const categorytd = document.createElement("td");
    switch (item.category) {
      case "stationery":
        categorytd.textContent = "디자인 문구";
        break;
      case "fashion":
        categorytd.textContent = "패션 잡화";
        break;
      case "digital":
        categorytd.textContent = "디지털";
        break;
      default:
        categorytd.textContent = "기타";
        break;
    }

    // 삭제 버튼
    const deletetd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "삭제";
    deleteBtn.onclick = function () {
      removeCartItem(item.id);
    };
    deletetd.appendChild(deleteBtn);

    // 요소 추가
    tr.appendChild(checktd);
    tr.appendChild(imgtd);
    tr.appendChild(nametd);
    tr.appendChild(pricetd);
    tr.appendChild(categorytd);
    tr.appendChild(deletetd);
    cartItemsContainer.appendChild(tr);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderCartItems(); // 문서 로드 완료 후 함수 호출
  qs(".homeBtn").addEventListener("click", () => {
    location.href = "index.html";
  });
});

// 장바구니 삭제
function removeCartItem(itemId) {
  let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
  cartList = cartList.filter((item) => item.id !== itemId);
  localStorage.setItem("cartList", JSON.stringify(cartList));
  renderCartItems(); // 목록 다시 렌더링
}

// 장바구니 체크 구현
const checkboxes = document.getElementsByName("item");

// 전체 선택 상태 업데이트 (아이템 체크 해제하면 전체 선택 취소)
function checkSelectAll(checkbox) {
  const selectall = document.querySelector(".allBtn");

  if (checkbox.checked === false) {
    selectall.checked = false;
  }
}

// 전체 선택 + 해제
function selectAll(allBtn) {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = allBtn.checked;
  });
}

/* modal */

const modal = document.querySelector("dialog");
let buyList = []; // buyList 빈 배열로 초기화

// 모달 열기 버튼
function goOpen() {
  buyList = []; // buyList 빈 배열로 초기화
  const hasCheckedItems = addBuyCart(); // 체크된 아이템 여부 확인
  if (hasCheckedItems) {
    renderBuyItems();
    modal.showModal();
  } else {
    alert("선택된 상품이 없습니다.");
  }
}
// 구매 목록에 아이템 추가
function addBuyCart(item) {
  let hasCheckedItems = false; // 체크된 아이템 여부
  const newBuyList = [...buyList]; // 기존 buyList를 복사하여 새로운 배열 생성

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      hasCheckedItems = true;
      const tr = checkbox.closest("tr"); // 체크된 tr 가져오기
      const item = {
        id: tr.dataset.id,
        name: tr.dataset.name,
        image: tr.dataset.image,
        price: tr.dataset.price,
        category: tr.dataset.category,
      };
      newBuyList.push(item); // 새로운 배열에 아이템 추가
    }
  });

  buyList = newBuyList; // 새로운 배열을 buyList에 할당
  return hasCheckedItems;
}
//구매목록 렌더링
function renderBuyItems() {
  let sumPrice = 0;
  const itemsContainer = document.querySelector(".buylist"); // 상품 리스트를 렌더링할 class 가져오기
  itemsContainer.innerHTML = ``; // 기존 상품 목록 비우기

  // 상품 목록 추가
  buyList.forEach((item) => {
    const article = document.createElement("article"); // 각 상품에 대한 article 생성
    article.className = "item";

    // 이미지
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "item-image";

    // 상품명
    const nameP = document.createElement("p");
    nameP.className = "name";
    nameP.textContent = item.name;

    // 가격
    const priceP = document.createElement("p");
    priceP.className = "price";
    priceP.textContent =
      item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
      "원"; // 천단위 표시
    sumPrice += Number(item.price);

    // 요소 추가
    article.appendChild(img);
    article.appendChild(nameP);
    article.appendChild(priceP);
    itemsContainer.appendChild(article);
  });

  //총 구매 가격
  const sumP = document.querySelector(".buyPrice");
  sumP.textContent =
    "총 구매 금액 : " +
    sumPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") +
    "원";
}
// 모달 닫기 버튼
modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) modal.close();
});
// 구매 확정
function goConfirm() {
  let cartList = JSON.parse(localStorage.getItem("cartList") || "[]");
  const buyIds = buyList.map((buy) => Number(buy.id)); // 구매 목록의 id 배열 생성
  // 새로운 배열을 반환하는 filter를 사용하여 cartList의 불변성을 유지
  const newCartList = cartList.filter((cart) => !buyIds.includes(cart.id)); // 구매 목록에 없는 상품들만 남김
  localStorage.setItem("cartList", JSON.stringify(newCartList)); // 변경된 장바구니 목록을 로컬 스토리지에 저장
  alert("구매가 성공적으로 완료되었습니다.");
  location.reload(); // 페이지 새로고침
}
