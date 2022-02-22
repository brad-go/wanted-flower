import styles from './Banner.module.css';

export default function Banner({ $target }) {
  const BRAND_IMG_MOBILE =
    'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/brand_201225.png';
  const BRAND_IMG_PC =
    'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/brand_201225_w.png';
  const SHOWROOM_IMG_MOBILE =
    'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/offline_201225.png';
  const SHOWROOM_IMG_PC =
    'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/offline_201225_w.png';

  const $brandTitle = document.createElement('strong');
  $brandTitle.className = styles.bannerTitle;
  $brandTitle.innerText = '꾸까 브랜드 이야기';

  const $brandText = document.createElement('p');
  $brandText.className = styles.bannerText;
  $brandText.innerHTML =
    '꽃으로 라이프스타일을 만들어가는' + '<br />' + 'kukka의 문화를 소개해요.';

  const $brandButton = document.createElement('button');
  $brandButton.className = styles.bannerButton;
  $brandButton.classList.add('btn', 'btn-outline-dark');
  $brandButton.innerText = 'BRAND STORY';

  const $brandPhrase = document.createElement('div');
  $brandPhrase.className = styles.bannerPhrase;
  $brandPhrase.classList.add(
    'd-flex',
    'w-100',
    'h-100',
    'justify-content-center',
    'align-items-center',
  );
  $brandPhrase.append($brandTitle, $brandText, $brandButton);

  const $brandRealImgMobile = document.createElement('span');
  $brandRealImgMobile.className = styles.bannerRealImgMobile;
  $brandRealImgMobile.classList.add('w-100', 'h-100', 'position-absolute');
  $brandRealImgMobile.style.backgroundImage = `url(${BRAND_IMG_MOBILE})`;

  const $brandRealImgPC = document.createElement('span');
  $brandRealImgPC.className = styles.bannerRealImgPC;
  $brandRealImgPC.classList.add('w-100', 'h-100', 'position-absolute');
  $brandRealImgPC.style.backgroundImage = `url(${BRAND_IMG_PC})`;

  const $brandImg = document.createElement('img');
  $brandImg.className = styles.bannerImg;
  $brandImg.classList.add('w-100', 'h-100', 'position-absolute');
  $brandImg.src = `${BRAND_IMG_PC}`;

  const $brandLink = document.createElement('a');
  $brandLink.className = styles.bannerLink;
  $brandLink.classList.add('d-block', 'w-100', 'h-100', 'position-relative');
  $brandLink.href = '/brand/story';
  $brandLink.append(
    $brandImg,
    $brandPhrase,
    $brandRealImgPC,
    $brandRealImgMobile,
  );

  const $brandItem = document.createElement('div');
  $brandItem.classList.add('w-100', 'h-100', 'd-inline-block');
  $brandItem.appendChild($brandLink);

  const $brand = document.createElement('div');
  $brand.className = styles.bannerItem;
  $brand.appendChild($brandItem);

  const $showRoomTitle = document.createElement('strong');
  $showRoomTitle.className = styles.bannerTitle;
  $showRoomTitle.innerText = '꾸까 오프라인 쇼륨';

  const $showRoomText = document.createElement('p');
  $showRoomText.className = styles.bannerText;
  $showRoomText.innerHTML =
    '꽃을 가까이서 만져보고 향기도 맡아보고,' +
    '<br />' +
    '꽃 속에서 작은 휴식을 누릴 수 있는 kukka의 오프라인 쇼룸';

  const $showRoomButton = document.createElement('button');
  $showRoomButton.className = styles.bannerButton;
  $showRoomButton.classList.add('btn', 'btn-outline-dark');
  $showRoomButton.innerText = '꾸까 쇼륨 안내';

  const $showRoomPhrase = document.createElement('div');
  $showRoomPhrase.className = styles.bannerPhrase;
  $showRoomPhrase.classList.add(
    'd-flex',
    'w-100',
    'h-100',
    'justify-content-center',
    'align-items-center',
  );
  $showRoomPhrase.append($showRoomTitle, $showRoomText, $showRoomButton);

  const $showRoomRealImgMobile = document.createElement('span');
  $showRoomRealImgMobile.className = styles.bannerRealImgMobile;
  $showRoomRealImgMobile.classList.add('w-100', 'h-100', 'position-absolute');
  $showRoomRealImgMobile.style.backgroundImage = `url(${SHOWROOM_IMG_MOBILE})`;

  const $showRoomRealImgPC = document.createElement('span');
  $showRoomRealImgPC.className = styles.bannerRealImgPC;
  $showRoomRealImgPC.classList.add('w-100', 'h-100', 'position-absolute');
  $showRoomRealImgPC.style.backgroundImage = `url(${SHOWROOM_IMG_PC})`;

  const $showRoomImg = document.createElement('img');
  $showRoomImg.className = styles.bannerImg;
  $showRoomImg.classList.add('w-100', 'h-100', 'position-absolute');
  $showRoomImg.src = `${SHOWROOM_IMG_PC}`;

  const $showRoomLink = document.createElement('a');
  $showRoomLink.className = styles.bannerLink;
  $showRoomLink.classList.add('d-block', 'w-100', 'h-100', 'position-relative');
  $showRoomLink.href = '/showRoom/story';
  $showRoomLink.append(
    $showRoomImg,
    $showRoomPhrase,
    $showRoomRealImgPC,
    $showRoomRealImgMobile,
  );

  const $showRoomItem = document.createElement('div');
  $showRoomItem.classList.add('w-100', 'h-100', 'd-inline-block');
  $showRoomItem.appendChild($showRoomLink);

  const $showRoom = document.createElement('div');
  $showRoom.className = styles.bannerItem;
  $showRoom.appendChild($showRoomItem);

  const $brandPrev = $brand.cloneNode(true);
  const $brandNext = $brand.cloneNode(true);
  const $showRoomPrev = $showRoom.cloneNode(true);
  const $showRoomNext = $showRoom.cloneNode(true);

  const $track = document.createElement('div');
  $track.className = styles.track;
  $track.id = 'track';

  const $slider = document.createElement('div');
  $slider.className = styles.slider;
  $slider.classList.add('w-100', 'h-100', 'm-0');
  $slider.appendChild($track);

  const $moreLink = document.createElement('a');
  $moreLink.className = styles.moreLink;
  $moreLink.innerText = '더보기';

  const $prevDot = document.createElement('span');
  const $nextDot = document.createElement('span');
  $prevDot.classList.add('dot');
  $nextDot.classList.add('dot');
  const $prevDots = document.createElement('button');
  const $nextDots = document.createElement('button');
  $prevDots.appendChild($prevDot);
  $nextDots.appendChild($nextDot);

  const $dots = document.createElement('div');
  $dots.className = styles.dots;
  $dots.append($prevDots, $nextDots);

  const $carousel = document.createElement('div');
  $carousel.className = styles.carousel;
  $carousel.classList.add('w-100', 'm-0', 'd-block', 'position-relative');
  $carousel.id = 'carousel';
  $carousel.append($slider, $moreLink, $dots);

  const $title = document.createElement('h3');
  $title.className = styles.title;
  $title.classList.add('m-0', 'p-0');
  $title.innerText = '꾸까 브랜드 스토리';

  const $header = document.createElement('div');
  $header.className = styles.header;
  $header.classList.add('w-100');
  $header.appendChild($title);

  const $container = document.createElement('div');
  $container.className = styles.container;
  $container.classList.add('w-100', 'm-0');
  $container.append($header, $carousel);

  const $banner = document.createElement('section');
  $banner.className = styles.banner;
  $banner.classList.add(
    'container-fluid',
    'p-0',
    'justify-content-center',
    'align-items-center',
  );
  $banner.append($container);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      const carousel = document.getElementById('carousel');
      const track = document.getElementById('track');

      const slideItems = track.children;
      const slideWidth = carousel.offsetWidth - 40;
      const trackLength = track.childNodes.length;

      for (let i = 0; i < trackLength; i++) {
        slideItems[i].style.width = `${slideWidth}px`;
      }
      track.style.width = `${slideWidth * trackLength}px`;
    } else {
      if ($brandPrev) {
        $brandPrev.remove();
        $brandNext.remove();
        $showRoomPrev.remove();
        $showRoomNext.remove();
      }
    }
  };

  let currentIdx = 0;
  let currentSlide = $track.childNodes;

  $nextDots.addEventListener('click', () => {
    const carousel = document.getElementById('carousel');
    const track = document.getElementById('track');
    const trackLength = track.childNodes.length;
    const slideItems = track.children;
    const slideWidth = carousel.offsetWidth - 40;

    if (currentIdx <= trackLength - 1) {
      track.style.transition = 300 + 'ms';
      track.style.transform =
        'translate3d(-' + slideWidth * (currentIdx + 1) + 'px, 0px, 0px)';
    }
    if (currentIdx === trackLength - 1) {
      setTimeout(() => {
        track.style.transition = '0ms';
        track.style.transform = 'translate3d(0px, 0px, 0px)';
        currentIdx = -1;
      }, 300);
      currentIdx = -1;
    }
    currentSlide.classList.remove('slideActive');
    currentSlide = slideItems[++currentIdx];
    currentSlide.classList.add('slideActive');
  });

  $prevDots.addEventListener('click', () => {
    const carousel = document.getElementById('carousel');
    const track = document.getElementById('track');
    const trackLength = track.childNodes.length;
    const slideWidth = carousel.offsetWidth - 40;
    if (currentIdx >= 0) {
      track.style.transition = 300 + 'ms';
      track.style.transform =
        'translate3d(-' + slideWidth * currentIdx - 1 + 'px, 0px, 0px)';
    }
    if (currentIdx === 0) {
      setTimeout(() => {
        track.style.transition = '0ms';
        track.style.transform =
          'translate3d(-' + slideWidth * trackLength + 'px, 0px, 0px)';
      }, 300);
      currentIdx = trackLength;
    }
    curSlide.classList.remove('slide_active');
    curSlide = slideContents[--currentIdx];
    curSlide.classList.add('slide_active');
  });

  window.addEventListener('load', () => {
    if (window.innerWidth > 1023) {
      $track.append($brand, $showRoom);
    } else {
      $track.append(
        $brandPrev,
        $showRoomPrev,
        $brand,
        $showRoom,
        $brandNext,
        $showRoomNext,
      );
    }
    handleResize();
  });

  window.addEventListener('resize', handleResize);

  $target.appendChild($banner);
}
