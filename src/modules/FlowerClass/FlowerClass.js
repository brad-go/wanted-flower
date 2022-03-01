import styles from './FlowerClass.module.css';
import {
  listData,
  THUMBNAIL_TEXT,
  TRANSITION,
  TRANSITION_RESET,
  BORDER_TOP_COLOR,
} from '../../constants/classData';
import { FLOWER_CLASS_ID } from '../../constants/id';

export default function FlowerClass({ $target }) {
  const $flowerClass = document.createElement('section');
  $flowerClass.id = FLOWER_CLASS_ID;
  $flowerClass.className = styles.flowerClass;
  $target.appendChild($flowerClass);

  const setProductItem = (list) => {
    return `
      ${list
        .map(
          ({ title, price, image, imagePc, branch, href }, idx) => `
        <li class="${styles.item} items" style="order: ${idx}">
          <div class=${styles.detail}>
            <div class="${styles.thumbnail} imgContainer">
              <a href=${href} class=${styles.link}>
                <img class=${styles.imgMobile} src=${image} alt="classImg-mb"/>
                <img class=${styles.imgPc} src=${imagePc} alt="classImg-pc"/>
                <span class=${styles.desc}>${THUMBNAIL_TEXT[0]}</span>
                <strong class=${styles.descName}>${THUMBNAIL_TEXT[1]}</strong>
              </a>
            </div>
            <div class="${styles.summary} summaries">
              <a href=${href} class=${styles.name}>${title}</a>
              <span class=${styles.price}>${price}</span>
              <div class=${styles.branchContainer}>
                ${branch
                  .map(
                    ({ href, name, className }) =>
                      `<a href=${href} class="${styles[className]} ${styles.branch}">${name}</a>`,
                  )
                  .join('')}
              </div>
            </div>
          </div>
        </li>
      `,
        )
        .join('')}
    `;
  };

  this.render = () => {
    const productItem = setProductItem(listData);

    $flowerClass.innerHTML = `
      <div class=${styles.header}>
        <h3 class=${styles.title}>
          <span>꽃과 함께하는 일상</span>
          <b>플라워 클래스</b>
        </h3>
      </div>
      <div class=${styles.products}>
        <ul class=${styles.productList}>
          ${productItem}
        </ul>
        <a href="/class/" class=${styles.moreLink}>더보기</a>
        <div class=${styles.btnContainer}>
          <button id="prevBtn" class=${styles.prevBtn}></button>
          <button id="nextBtn" class=${styles.nextBtn}></button>
        </div>
      </div>
    `;
  };

  this.render();

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const items = document.getElementsByClassName('items');
  const thumbnail = document.getElementsByClassName('imgContainer');
  const summaries = document.getElementsByClassName('summaries');

  prevBtn.addEventListener('click', () => {
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

  nextBtn.addEventListener('click', () => {
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
}
