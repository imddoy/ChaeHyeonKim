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
      onclick="goHome()"
    />
    <h1 lang="en">SHOPPING LIST</h1>
    <img src="./images/menu.svg" alt="햄버거" />
  </header>
  
      `;
  }
}
customElements.define("shop-header", HeaderComponent); // html 태그 정의 및 구현

// home 이동
function goHome() {
  location.href = "index.html";
}

/* index */

// 상품 리스트
const SHOPPING_LIST = [
  {
    id: 1,
    category: "stationery",
    image: "./images/note.jpg",
    name: "잔망루피 페이스 스프링 노트",
    price: 4000,
    liked: false,
  },
  {
    id: 2,
    category: "stationery",
    image: "./images/bag.jpg",
    name: "잔망루피 쇼핑백 (2종/택1)",
    price: 1500,
    liked: false,
  },
  {
    id: 3,
    category: "stationery",
    image: "./images/sticker.jpg",
    name: "잔망루피 스티커",
    price: 1500,
    liked: false,
  },
  {
    id: 4,
    category: "fashion",
    image: "./images/doll.jpg",
    name: "잔망루피 파자마 봉제 인형",
    price: 29000,
    liked: false,
  },
  {
    id: 5,
    category: "fashion",
    image: "./images/passport.jpg",
    name: "잔망루피 여권 케이스",
    price: 5900,
    liked: false,
  },
  {
    id: 6,
    category: "fashion",
    image: "./images/flower.jpg",
    name: "잔망루피 꽃다발 봉제 인형",
    price: 34000,
    liked: false,
  },
  {
    id: 7,
    category: "digital",
    image: "./images/mouse.jpg",
    name: "잔망루피 마우스패드",
    price: 4000,
    liked: false,
  },
  {
    id: 8,
    category: "digital",
    image: "./images/usb.jpg",
    name: "로이체 잔망루피 5in1 멀티 USB 허브",
    price: 36900,
    liked: false,
  },
  {
    id: 9,
    category: "digital",
    image: "./images/mic.jpg",
    name: "로이체 잔망루피 블루투스 마이크 스피커",
    price: 39900,
    liked: false,
  },
];

// 상품 리스트 렌더링
function renderItems(filterCategory = "all") {
  const filteredItems = SHOPPING_LIST.filter((item) => {
    return filterCategory === "all" || item.category === filterCategory; // 상품 카테고리 필터링
  });

  const itemsContainer = document.querySelector(".items"); // 상품 리스트를 렌더링할 class 가져오기
  itemsContainer.innerHTML = ""; // 기존 상품 목록 비우기

  // 상품 목록 추가
  filteredItems.forEach((item) => {
    const article = document.createElement("article"); // 각 상품에 대한 article 생성
    article.className = "item";

    // 이미지
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "상품 이미지";
    img.className = "item-image";

    // 좋아요
    const likeDiv = document.createElement("div");
    likeDiv.className = "like";
    likeDiv.onclick = function () {
      addCart(item);
    };

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

//장바구니 목록 추가
function addCart(item) {
  let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
  if (!Array.isArray(cartList)) {
    cartList = []; // cartList가 배열이 아닌 경우, 빈 배열로 초기화
  }
  cartList.push(item); // 새 상품을 추가한다
  localStorage.setItem("cartList", JSON.stringify(cartList)); // 변경된 장바구니 목록을 로컬 스토리지에 저장
  console.log(cartList);
  alert(`${item.name}을(를) 장바구니에 담았습니다.`);
  var answer = confirm("장바구니로 이동하시겠습니까?");
  if (answer == true) {
    location.href = "cart.html";
  }
}

/* cart.html */
// 장바구니 목록 렌더링
function renderCartItems() {
  const cartItemsContainer = document.querySelector(".cartlist"); // 상품 리스트를 렌더링할 class 가져오기
  cartItemsContainer.innerHTML = ""; // 기존 상품 목록 비우기

  let cartList = JSON.parse(localStorage.getItem("cartList") || "[]");
  console.log(cartList);
  console.log(typeof cartList);
  cartList.forEach((item) => {
    const tr = document.createElement("tr");

    // 체크박스
    const checktd = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checktd.appendChild(checkbox);

    // 이미지
    const imgtd = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "상품 이미지";
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
    const deleteDiv = document.createElement("div");
    deleteDiv.className = "delete";
    deleteDiv.textContent = "삭제";
    deleteDiv.onclick = function () {
      removeCartItem(item.id);
    };
    deletetd.appendChild(deleteDiv);

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

// 장바구니 삭제
function removeCartItem(itemId) {
  let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
  cartList = cartList.filter((item) => item.id !== itemId);
  localStorage.setItem("cartList", JSON.stringify(cartList));
  renderCartItems(); // 목록 다시 렌더링
}
