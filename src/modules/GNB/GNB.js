import styles from './GNB.module.css';
import { getScrollHeight } from '../../utils/height';

const USER_ITEMS = ['로그인', '회원가입', '꾸까 고객센터', '기업제휴'];

const MENU_ITEMS = ['동영상', '플라워클래스'];

const ICON_MENU = [
  {
    srText: '마이페이지 보기',
    className: styles.myPage,
  },
  {
    srText: '장바구니 보기, 담긴상품 개수: 0',
    className: styles.cart,
  },
];

export default function GNB({ $target }) {
  const $header = document.createElement('header');
  const $wrapper = document.createElement('div');
  const $background = document.createElement('div');
  $wrapper.className = styles.wrapper;
  $background.className = styles.background;
  $header.appendChild($background);
  $header.appendChild($wrapper);

  const $logo = document.createElement('h1');
  const $logoAnchor = document.createElement('a');
  $logo.className = styles.logo;
  $logoAnchor.href = '/#';
  $logo.appendChild($logoAnchor);
  $wrapper.appendChild($logo);

  const $nav = document.createElement('nav');
  const $iconMenu = document.createElement('nav');
  $iconMenu.className = styles.iconMenu;
  $wrapper.appendChild($nav);
  $wrapper.appendChild($iconMenu);

  ICON_MENU.forEach(({ srText, className }) => {
    const $a = document.createElement('a');
    const $span = document.createElement('span');
    $a.className = className;
    $a.href = '/#';
    $span.className = styles.srOnly;
    $span.innerText = srText;
    $a.appendChild($span);
    $iconMenu.appendChild($a);
  });

  const $user = document.createElement('ul');
  const $menu = document.createElement('ul');
  $user.className = styles.user;
  $menu.className = styles.menu;
  $nav.appendChild($user);
  $nav.appendChild($menu);

  const userItems = USER_ITEMS.map((menu) => {
    const $li = document.createElement('li');
    const $a = document.createElement('a');
    $a.innerText = menu;
    $a.href = '/#';
    if (menu === '회원가입') {
      const $span = document.createElement('span');
      $span.innerText = ' (1000포인트 지급!)';
      $span.className = styles.point;
      $a.appendChild($span);
    }
    $li.appendChild($a);
    return $li;
  });
  toggleUserMenu();

  const menuItems = MENU_ITEMS.map((menu) => {
    const $li = document.createElement('li');
    const $button = document.createElement('button');
    $button.innerText = menu;
    $button.onClick = () => {};
    $li.appendChild($button);
    return $li;
  });
  moveMenu();

  function toggleUserMenu() {
    if (window.innerWidth < 1024) {
      $user.innerHTML = '';
      return;
    }
    userItems.forEach(($one) => $user.appendChild($one));
  }

  function moveMenu() {
    if (window.innerWidth < 1024 && getScrollHeight() >= 40) {
      $menu.innerHTML = '';
      return;
    }
    menuItems.forEach(($one) => $menu.appendChild($one));
  }

  document.addEventListener('scroll', (e) => {
    moveMenu();
    if (getScrollHeight() >= 40) {
      $header.classList.add(styles.scrolled);
      return;
    }
    $header.classList.remove(styles.scrolled);
  });

  window.addEventListener('resize', () => {
    toggleUserMenu();
    moveMenu();
  });

  $target.appendChild($header);
}
