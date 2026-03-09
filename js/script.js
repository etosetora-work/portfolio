// font読み込み フェードイン
  // window.onloadより前に動く方が早くなる
  if  (document.fonts) {
      document.fonts.ready.then(function() {
      document.body.classList.add('font-loaded');
      });
    } else {
    // 古いブラウザ対策（フォント読み込みを待たずに表示）
    document.body.classList.add('font-loaded');
    }

// 追従ナビ
$(function() {

  var fixedNav = $('.nav--fixed');
  var heroHeight = $('#hero').outerHeight();

  function checkScroll() {
    if ($(window).scrollTop() > heroHeight) {
      fixedNav.addClass('is-show');
    } else {
      fixedNav.removeClass('is-show');
    }
  }

  checkScroll();
  $(window).on("scroll", checkScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var navHeight = fixedNav.outerHeight();
    var position = $(target).offset().top - navHeight;

    $('html, body').animate({
      scrollTop: position
    }, 600);
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

// タブ切り替え
const items = document.querySelectorAll('.web_design__item');
const title = document.querySelector('.web_design__title');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showItem(index) {
  items[currentIndex].classList.remove('is-active');
  currentIndex = index;
  items[currentIndex].classList.add('is-active');
  // タイトル変更

  const newTitle = items[index].dataset.title;
  title.textContent = newTitle;
}

showItem(currentIndex);

nextBtn.addEventListener('click', () => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= items.length) {
    nextIndex = 0;
  }
  showItem(nextIndex);
});

prevBtn.addEventListener('click', () => {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = items.length - 1;
  }
  showItem(prevIndex);
});

// ページトップへ
$(function() {

  var pagetop = $('.page-top');
  var heroHeight = $('#hero').outerHeight();

  function checkScroll() {
    if ($(window).scrollTop() > heroHeight) {
      pagetop.addClass('is-show');
    } else {
      pagetop.removeClass('is-show');
    }
  }

  checkScroll();
  $(window).on('scroll', checkScroll);

  pagetop.on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 600);
  });

});
