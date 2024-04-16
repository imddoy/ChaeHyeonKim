// header.html을 불러와서 'header'에 삽입
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

//home 이동
function goHome() {
  https: location.href = "index.html";
}
