import styles from './FlowerClass.module.css';

const branchData = [
  {
    href: '/class/contetns/399',
    name: '잠실점',
    className: 'jam',
  },
  {
    href: '/class/contetns/400',
    name: '월계점',
    className: 'wolgye',
  },
  {
    href: '/class/contetns/401',
    name: '구로점',
    className: 'guro',
  },
  {
    href: '/class/contetns/402',
    name: '송파점',
    className: 'songpa',
  },
  {
    href: '/class/contetns/403',
    name: '부산동래점',
    className: 'dongrae',
  },
];

const listData = [
  {
    title: '취미 클래스(4주 과정)',
    price: '299,000원',
    image:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/3/class_2022_home_mob_okfoQzB.jpeg',
    imagePc:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/3/class_2022_home_web_R0tReO1.jpeg',
    branch: branchData,
    href: '/class/content/381',
  },
  {
    title: '오아시스 리그(2/21 ~ 2/27)',
    price: '79,000원',
    image:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg',
    imagePc:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg',
    branch: [
      {
        href: '/class/contetns/398',
        name: '광화문점',
        className: 'gwang',
      },
      ...branchData,
    ],
    href: '/class/content/401',
  },
  {
    title: '클래식 핸드타이드(2/28 ~ 3/6)',
    price: '79,000원',
    image:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg',
    imagePc:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg',
    branch: branchData,
    href: '/class/content/408',
  },
];

export default function Image({ $target }) {
  // header
  const $span = document.createElement('span');
  $span.innerText = '꽃과 함께하는 일상, ';

  const $b = document.createElement('b');
  $b.innerText = '플라워클래스';

  const $title = document.createElement('h3');
  $title.className = styles.title;
  $title.appendChild($span);
  $title.appendChild($b);

  const $header = document.createElement('div');
  $header.className = styles.header;
  $header.appendChild($title);

  // products
  const itemList = listData.map((data, idx) => {
    // summary
    const $name = document.createElement('a');
    $name.className = styles.name;
    $name.innerText = data.title;
    $name.href = data.href;
    const $price = document.createElement('span');
    $price.className = styles.price;
    $price.innerText = data.price;

    const $branchList = data.branch.map((info) => {
      const $branch = document.createElement('a');
      $branch.setAttribute('href', info.href);
      $branch.classList.add(styles[info.className]);
      $branch.classList.add(styles.branch);
      $branch.innerText = info.name;
      return $branch;
    });
    const $branchContainer = document.createElement('div');
    $branchContainer.className = styles.branchContainer;
    $branchContainer.append(...$branchList);

    const $summary = document.createElement('div');
    $summary.className = styles.summary;
    $summary.classList.add('summaries');
    $summary.append($name, $price, $branchContainer);

    // thumbnail
    const $desc = document.createElement('span');
    $desc.className = styles.desc;
    $desc.innerText = '매주 새로운 커리큘럼으로 배우는';
    const $descName = document.createElement('strong');
    $descName.className = styles.descName;
    $descName.innerText = '플라워 클래스 자세히 보기';

    const $imgMoblie = document.createElement('img');
    $imgMoblie.className = styles.imgMobile;
    $imgMoblie.src = data.image;
    $imgMoblie.alt = 'flowerClass - moblieImg';
    const $imgPc = document.createElement('img');
    $imgPc.className = styles.imgPc;
    $imgPc.classList.add('imgPcs');
    $imgPc.src = data.imagePc;
    $imgMoblie.alt = 'flowerClass - pcImg';
    const $link = document.createElement('a');
    $link.className = styles.link;
    $link.href = data.href;
    $link.append($imgMoblie, $imgPc, $desc, $descName);

    const $thumbnail = document.createElement('div');
    $thumbnail.className = styles.thumbnail;
    $thumbnail.classList.add('imgContainer');
    $thumbnail.append($link);

    // container
    const $detail = document.createElement('div');
    $detail.className = styles.detail;
    $detail.append($thumbnail, $summary);

    const $item = document.createElement('li');
    $item.className = styles.item;
    $item.classList.add('items');
    $item.style.order = idx;
    $item.appendChild($detail);
    return $item;
  });

  const $productList = document.createElement('ul');
  $productList.className = styles.productList;
  $productList.append(...itemList);

  const $moreLink = document.createElement('a');
  $moreLink.className = styles.moreLink;
  $moreLink.href = '/class/';
  $moreLink.innerText = '더보기';

  const $prevBtn = document.createElement('button');
  const $nextBtn = document.createElement('button');
  $prevBtn.className = styles.prevBtn;
  $nextBtn.className = styles.nextBtn;

  const $btnContainer = document.createElement('div');
  $btnContainer.className = styles.btnContainer;
  $btnContainer.append($nextBtn, $prevBtn);

  const $products = document.createElement('div');
  $products.className = styles.products;
  $products.append($productList, $moreLink, $btnContainer);

  const $flowerClass = document.createElement('section');
  $flowerClass.className = styles.flowerClass;
  $flowerClass.appendChild($header);
  $flowerClass.appendChild($products);

  window.addEventListener('load', () => {
    const items = document.getElementsByClassName('items');
    const thumbnail = document.getElementsByClassName('imgContainer');
    const summaries = document.getElementsByClassName('summaries');

    $prevBtn.addEventListener('click', () => {
      thumbnail[0].style.transform = 'translate(72%, -27.5%) scale(0.45)';
      thumbnail[2].style.transform = 'translate(-175%, -70%) scale(2.3)';
      summaries[2].style.opacity = '0';
      items[1].style.transform = 'translateY(140%)';
      items[1].style.borderTopColor = 'transparent';
      setTimeout(() => {
        thumbnail[0].style.transition = 'none';
        thumbnail[2].style.transition = 'none';
        thumbnail[0].style.transform = 'none';
        thumbnail[2].style.transform = 'none';
        summaries[0].style.opacity = '1';
        items[1].style.borderTopColor = '#ececec';
        items[1].style.transition = 'none';
        items[1].style.transform = 'none';
        items[0].before(items[2]);
      }, 1100);
      thumbnail[2].style.transition = 'transform 1s ease-in-out';
      thumbnail[0].style.transition = 'transform 1s ease-in-out';
      items[1].style.transition = 'transform 1s ease-in-out';
    });

    $nextBtn.addEventListener('click', () => {
      thumbnail[1].style.transform = 'translate(-175%, 70%) scale(2.3)';
      thumbnail[0].style.transform = 'translate(70%, 32%) scale(0.4)';
      summaries[0].style.opacity = '1';
      summaries[1].style.opacity = '0';
      items[2].style.transform = 'translateY(-115%)';
      items[2].style.borderTopColor = 'transparent';
      setTimeout(() => {
        thumbnail[0].style.transition = 'none';
        thumbnail[0].style.transform = 'none';
        thumbnail[1].style.transition = 'none';
        thumbnail[1].style.transform = 'none';
        summaries[1].style.opacity = '1';
        items[0].style.borderTopColor = '#ececec';
        items[2].style.transition = 'none';
        items[2].style.transform = 'none';
        items[2].after(items[0]);
      }, 1000);
      thumbnail[1].style.transition = 'transform 1s ease-in-out';
      thumbnail[0].style.transition = 'transform 1s ease-in-out';
      items[2].style.transition = 'transform 1s ease-in-out';
    });
  });

  $target.appendChild($flowerClass);
}
