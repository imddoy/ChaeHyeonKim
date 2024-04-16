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
    priceP.textContent = item.price;

    // 요소 추가
    article.appendChild(img);
    article.appendChild(likeDiv);
    article.appendChild(nameP);
    article.appendChild(priceP);
    itemsContainer.appendChild(article);
  });
}

//장바구니 목록 추가
var CART_LIST = [];
function addCart(item) {
  alert(`${item.name}을(를) 장바구니에 추가하시겠습니까?`);
  CART_LIST.push(item);
  console.log(CART_LIST);
  var answer = confirm("장바구니로 이동하시겠습니까?");
  if (answer == true) {
    location.href = "cart.html";
  }
}
