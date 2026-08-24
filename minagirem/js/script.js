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

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// 画面スクロール時にフェードイン
window.addEventListener('scroll', function() {
  const targets = document.querySelectorAll('.fadein'); // 全てのターゲットを取得

  targets.forEach(function(target) {
    const targetTop = target.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 画面内に入ったらクラスを付与
    if (targetTop < windowHeight - 100) { // 発火調整
      target.classList.add('is-animated');
    }
  });
});

// 泡
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('body');

  // 泡を生成
  const createBubble = () => {
    const bubbleEl = document.createElement('span');
    bubbleEl.className = 'bubble';
    const minSize = 5;
    const maxSize = 40;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    bubbleEl.style.width = `${size}px`;
    bubbleEl.style.height = `${size}px`;
    bubbleEl.style.left = Math.random() * (innerWidth - size) + 'px';
    section.appendChild(bubbleEl);

    setTimeout(() => {
      bubbleEl.remove();
    }, 8000);
  }

  let activeBubble = null;

  const stopBubble = () => {
    clearInterval(activeBubble);
  };

  const cb = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        activeBubble = setInterval(createBubble, 500);
      } else {
        stopBubble();
      }
    })
  };

  const options = {
    rootMargin: "100px 0px"
  }

  const io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100;
  io.observe(section);
});

// 追従ナビ
$(function() {

  var fixedNav = $('.nav-list');
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

// スクロール位置表示
var sections = $('section');

$(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    sections.each(function(){
        var top = $(this).offset().top - 120;
        var bottom = top + $(this).outerHeight();

        if(scroll >= top && scroll < bottom){
            var id = $(this).attr('id');
            $('.nav-list a').removeClass('current');
            $('.nav-list a[href="#' + id + '"]').addClass('current');
        }
    });
});

// Swiper
const thumbs = new Swiper(".galleryThumb", {
    slidesPerView: 4,
    spaceBetween: 20,
    watchSlidesProgress: true,
    loop: true
});

const gallery = new Swiper(".gallerySwiper", {
    spaceBetween: 30,
    loop: false,
    thumbs: {
        swiper: thumbs,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
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
