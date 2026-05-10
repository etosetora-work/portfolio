// JavaScript Document

//スライダー
	$('.slider').slick({
		fade:true,//切り替えをフェードで行う。初期値はfalse。
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
		speed:1000,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows: true,//左右の矢印あり
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,//下部ドットナビゲーションの表示
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});


//アコーディオン
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