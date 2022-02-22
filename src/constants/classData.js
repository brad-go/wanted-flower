import homeclass from '../assets/img_homeclass.jpeg';
import oasis from '../assets/img_oasis.jpg';
import handitied from '../assets/img_handtied.jpg';

export const branchData = [
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

export const listData = [
  {
    title: '취미 클래스(4주 과정)',
    price: '299,000원',
    image:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/3/class_2022_home_mob_okfoQzB.jpeg',
    imagePc: homeclass,
    branch: branchData,
    href: '/class/content/381',
  },
  {
    title: '오아시스 리그(2/21 ~ 2/27)',
    price: '79,000원',
    image:
      'https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg',
    imagePc: oasis,
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
    imagePc: handitied,
    branch: branchData,
    href: '/class/content/408',
  },
];

export const TRANSITION = 'transform 1s ease-in-out';
export const TRANSITION_RESET = 'none';
export const BORDER_TOP_COLOR = '#ececec';
