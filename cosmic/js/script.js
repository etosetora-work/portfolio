// 星空背景
window.addEventListener("DOMContentLoaded", () => {
  // 星を表示するための親要素を取得
  const stars = document.querySelector(".stars");

  // 星を生成する関数
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1; // 星の最小サイズを指定
    const maxSize = 2; // 星の最大サイズを指定
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  // for文で星を生成する関数を指定した回数呼び出す
  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

// 流れ星
const container = document.querySelector('.shooting-stars-container');

function createShootingStar() {
  const star = document.createElement('div');
  star.classList.add('shooting-star');

  // ランダムな位置
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';

  container.appendChild(star);

  // 2秒後に消す
  setTimeout(() => {
    star.remove();
  }, 2000);
}

// 一定間隔でランダム発生
setInterval(createShootingStar, 3000); // 3秒ごとに流星

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

// ケバブメニュー
  const menuButton = document.querySelector('.menu-button');
  const dots = document.querySelectorAll('.menu-button .dot');
  const menu = document.querySelector('.menu');

// メニューをクリックしたときの動き
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');

    if (menuButton.classList.contains('active')) {
      // 集合させる（3つを同じ座標に）
      dots.forEach(dot => {
        dot.style.transform = 'translateY(0) scale(1.8)';
      });
    } else {
      // 元の位置に戻す
      dots[0].style.transform = 'translateY(-15px) scale(1)';
      dots[1].style.transform = 'translateY(0) scale(1)';
      dots[2].style.transform = 'translateY(15px) scale(1)';
    }
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

$(document).ready(function() {
  // 画像スライドショー (Slick)
  if ($('.photo-slider').length) { // スライダーがあるページのみ実行
    try {
      $('.photo-slider').slick({
        arrows: false,
        dots: true,          // ドット
        dotsClass: 'slider-dots',
        infinite: true,      // 無限ループ
        speed: 1000,         // 切り替えのスピード
        fade: true,          // フェード切り替え
        cssEase: 'linear',   // イージング
        autoplay: true,      // 自動再生ON
        autoplaySpeed: 1000, // 自動再生の間隔
      });
      console.log("Slickが正常に動作しました");
    } catch (e) {
      console.log("Slickのエラー: ", e);
    }
  }

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


// メールフォームのポップアップ
// ボタンとモーダル取得
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    console.log("indexページなのでモーダルを有効化します");

    const openBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('popupModal');
    const closeBtn = document.getElementById('closeModalBtn');

    if (openBtn && modal && closeBtn) {  // 要素が存在するかチェック
      openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
      });

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    } else {
      console.log("モーダルの要素が見つかりません");
    }
  } else {
    console.log("indexページではないのでモーダルを無効化します");
  }
});

const openBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('popupModal');
const closeBtn = document.getElementById('closeModalBtn');

// 送信ボタンクリックで表示
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// 閉じるボタンクリックで非表示
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// モーダルの外側をクリックしたら閉じる
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
