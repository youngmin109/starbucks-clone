const searchhEl = document.querySelector('.search');
const searchInputEl = searchhEl.querySelector('input');

searchhEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchhEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchhEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.screenY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수, 시간(ms))


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, // 반복 재생 여부
    // autoplay: {
    //     delay: 500 // 자동 재생 시간
    // },

    pagination: {
        el: 'promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidepromotion = false; // 프로모션 영역 숨김 여부
promotionToggleBtn.addEventListener('click', function () {
    isHidepromotion = !isHidepromotion // 반전
    if (isHidepromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: 20,
        repeat: -1, // 무한 반복
        yoyo: true, // 애니메이션을 되감기
        ease: Power1.easeInOut,
        delay: random(0, delay)
    })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', -5, 15);
floatingObject('.floating3', 1.5, 20);