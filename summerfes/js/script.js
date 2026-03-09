$(function() {
  $('.hamburger').click(function() {
    // メニューの開閉状態を切り替える
    $('.menu').toggleClass('open');

    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass('active');
  });
});

// 画面スクロール時にフェードイン
window.addEventListener('scroll', function() {
  const targets = document.querySelectorAll('.fadein'); // 全てのターゲットを取得

  targets.forEach(function(target) {
    const targetTop = target.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 画面内に入ったらクラスを付与
    if (targetTop < windowHeight - 0) { // 発火調整
      target.classList.add('is-animated');
    }
  });
});

// カテゴリーフィルター ＋ ボタンのアクティブ化
const filterButtons = document.querySelectorAll('[data-filter]');
const items = document.querySelectorAll('[data-category]');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // 表示・非表示切り替え
    items.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    // 他のボタンからactiveを外す
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // クリックしたボタンにactiveを付与
    button.classList.add('active');
  });
});

$(document).ready(function() {

  $(document).ready(function() {
    // ページトップへ戻るボタンの取得
    var pagetop = $('.page-top');
  
    // 初期状態で非表示にする
    pagetop.hide(); 
  
    function checkScroll() {
      if ($(window).scrollTop() > 500) {
        pagetop.fadeIn(1000);
      } else {
        pagetop.fadeOut(1000);
      }
    }
  
    checkScroll(); // ページ読み込み時にスクロール量をチェック
  
    $(window).on("scroll", checkScroll);
  
    pagetop.on("click", function() {
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
    });
  });
});
