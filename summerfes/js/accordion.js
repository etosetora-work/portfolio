window.onload = init();

function init() {
  const accordion_items = document.querySelectorAll(".accordion_title");
  for (var i = 0; i < accordion_items.length; i++) {
    accordion_items[i].addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("show");
      this.classList.toggle("active");
      if (this.classList.contains("active")) {
        this.nextElementSibling.style.height =
          // 40は余白分
          this.nextElementSibling.children[0].clientHeight + 20 + "px";
      } else {
        this.nextElementSibling.style.height = 0;
      }
    });
  }
}