import styles from './FlowerClass.module.css';
import {
  listData,
  TRANSITION,
  TRANSITION_RESET,
  BORDER_TOP_COLOR,
} from '../../constants/classData';
import { FLOWER_CLASS_ID } from '../../constants/id';

export default function Image({ $target }) {
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

  const itemList = listData.map((data, idx) => {
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
  $flowerClass.id = FLOWER_CLASS_ID;
  $flowerClass.className = styles.flowerClass;
  $flowerClass.appendChild($header);
  $flowerClass.appendChild($products);

  window.addEventListener('load', () => {
    const items = document.getElementsByClassName('items');
    const thumbnail = document.getElementsByClassName('imgContainer');
    const summaries = document.getElementsByClassName('summaries');

    $prevBtn.addEventListener('click', () => {
      thumbnail[0].style.transform = 'translate(72%, -27.5%) scale(0.45)';
      thumbnail[2].style.transform = 'translate(-175%, -64%) scale(2.3)';
      summaries[2].style.opacity = '0';
      items[1].style.transform = 'translateY(129%)';
      items[1].style.borderTopColor = 'transparent';
      setTimeout(() => {
        thumbnail[0].style.transition = TRANSITION_RESET;
        thumbnail[0].style.transform = TRANSITION_RESET;
        thumbnail[2].style.transition = TRANSITION_RESET;
        thumbnail[2].style.transform = TRANSITION_RESET;
        summaries[0].style.opacity = '1';
        items[1].style.transition = TRANSITION_RESET;
        items[1].style.transform = TRANSITION_RESET;
        items[0].before(items[2]);
      }, 1100);
      thumbnail[0].style.transition = TRANSITION;
      thumbnail[2].style.transition = TRANSITION;
      items[1].style.borderTopColor = BORDER_TOP_COLOR;
      items[1].style.transition = TRANSITION;
    });

    $nextBtn.addEventListener('click', () => {
      thumbnail[0].style.transform = 'translate(71%, 28%) scale(0.45)';
      thumbnail[1].style.transform = 'translate(-175%, 65%) scale(2.3)';
      summaries[0].style.opacity = '1';
      summaries[1].style.opacity = '0';
      items[2].style.transform = 'translateY(-115%)';
      items[2].style.borderTopColor = 'transparent';
      setTimeout(() => {
        thumbnail[0].style.transition = TRANSITION_RESET;
        thumbnail[0].style.transform = TRANSITION_RESET;
        thumbnail[1].style.transition = TRANSITION_RESET;
        thumbnail[1].style.transform = TRANSITION_RESET;
        summaries[1].style.opacity = '1';
        items[2].style.borderTopColor = BORDER_TOP_COLOR;
        items[2].style.transition = TRANSITION_RESET;
        items[2].style.transform = TRANSITION_RESET;
        items[2].after(items[0]);
      }, 1000);
      thumbnail[0].style.transition = TRANSITION;
      thumbnail[1].style.transition = TRANSITION;
      items[2].style.transition = TRANSITION;
    });
  });

  $target.appendChild($flowerClass);
}
