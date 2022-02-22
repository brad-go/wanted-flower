import styles from './Banner.module.css';

export default function Banner({ $target }) {
  const BRAND_IMG_PC =
    'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/2020/12/25/brand_201225_w.png';
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

  const $brandRealImg = document.createElement('span');
  $brandRealImg.className = styles.bannerRealImg;
  $brandRealImg.classList.add('w-100', 'h-100', 'position-absolute');
  $brandRealImg.style.backgroundImage = `url(${BRAND_IMG_PC})`;

  const $brandImg = document.createElement('img');
  $brandImg.className = styles.bannerImg;
  $brandImg.classList.add('w-100', 'h-100', 'position-absolute');
  $brandImg.src = `${BRAND_IMG_PC}`;

  const $brandLink = document.createElement('a');
  $brandLink.className = styles.bannerLink;
  $brandLink.classList.add('d-block', 'w-100', 'h-100', 'position-relative');
  $brandLink.href = '/brand/story';
  $brandLink.append($brandImg, $brandPhrase, $brandRealImg);

  const $brandItem = document.createElement('div');
  $brandItem.classList.add('w-100', 'h-100', 'd-inline-block');
  $brandItem.appendChild($brandLink);

  const $brand = document.createElement('div');
  $brand.classList.add('col-lg', 'w-50', 'h-auto', 'p-0');
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

  const $showRoomRealImg = document.createElement('span');
  $showRoomRealImg.className = styles.bannerRealImg;
  $showRoomRealImg.classList.add('w-100', 'h-100', 'position-absolute');
  $showRoomRealImg.style.backgroundImage = `url(${SHOWROOM_IMG_PC})`;

  const $showRoomImg = document.createElement('img');
  $showRoomImg.className = styles.bannerImg;
  $showRoomImg.classList.add('w-100', 'h-100', 'position-absolute');
  $showRoomImg.src = `${SHOWROOM_IMG_PC}`;

  const $showRoomLink = document.createElement('a');
  $showRoomLink.className = styles.bannerLink;
  $showRoomLink.classList.add('d-block', 'w-100', 'h-100', 'position-relative');
  $showRoomLink.href = '/showRoom/story';
  $showRoomLink.append($showRoomImg, $showRoomPhrase, $showRoomRealImg);

  const $showRoomItem = document.createElement('div');
  $showRoomItem.classList.add('w-100', 'h-100', 'd-inline-block');
  $showRoomItem.appendChild($showRoomLink);

  const $showRoom = document.createElement('div');
  $showRoom.classList.add('col-lg', 'w-50', 'h-auto', 'p-0');
  $showRoom.appendChild($showRoomItem);

  const $container = document.createElement('div');
  $container.classList.add('container-fluid', 'd-flex', 'p-0');
  $container.append($brand, $showRoom);

  const $banner = document.createElement('section');
  $banner.className = styles.banner;
  $banner.classList.add('container-fluid', 'd-flex', 'p-0');
  $banner.append($container);

  $target.appendChild($banner);
}
