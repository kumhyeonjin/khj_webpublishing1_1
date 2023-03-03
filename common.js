const $btn_ham = document.querySelector(".btn_ham");
const $Gnb = document.querySelector(".gnb");
$btn_ham.addEventListener("click", function () {
  $Gnb.classList.toggle("on");
});
