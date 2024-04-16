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
customElements.define("shop-header", HeaderComponent); //html 태그 정의 및 구현

//home 이동
function goHome() {
  https: location.href = "index.html";
}

// index.html
