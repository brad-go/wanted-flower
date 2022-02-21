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
    branch: branchData,
  },
  {
    title: '오아시스 리그(2/21 ~ 2/27)',
    price: '79,000원',
    image:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg',
    branch: [
      {
        href: '/class/contetns/398',
        name: '광화문점',
        className: 'gwang',
      },
      ...branchData,
    ],
  },
  {
    title: '클래식 핸드타이드(2/28 ~ 3/6)',
    price: '79,000원',
    image:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg',
    branch: branchData,
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
  const $class = listData.map((data, idx) => {
    const $name = document.createElement('a');
    $name.className = styles.name;
    $name.innerText = data.title;
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
    $summary.append($name, $price, $branchContainer);

    const $img = document.createElement('img');
    $img.src = data.image;

    const $link = document.createElement('a');
    $link.className = styles.link;
    $link.appendChild($img);

    const $thumbnail = document.createElement('div');
    $thumbnail.className = styles.thumbnail;
    $thumbnail.appendChild($link);

    const $detail = document.createElement('div');
    $detail.className = styles.detail;
    $detail.append($thumbnail, $summary);

    const $item = document.createElement('li');
    $item.className = styles.item;
    $item.appendChild($detail);
    return $item;
  });

  const $productList = document.createElement('ul');
  $productList.className = styles.productList;
  $productList.append(...$class);

  const $products = document.createElement('div');
  $products.className = styles.products;
  $products.appendChild($productList);

  const $flowerClass = document.createElement('section');
  $flowerClass.className = styles.flowerClass;
  $flowerClass.appendChild($header);
  $flowerClass.appendChild($products);

  $target.appendChild($flowerClass);
}
