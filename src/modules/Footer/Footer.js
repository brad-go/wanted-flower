import styles from './Footer.module.css';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Youtube from '../../assets/images/youtube.png';
import Logo_footer from '../../assets/images/logo_footer.png';

export default function Footer({ $target }) {
  const $footer = document.createElement('footer');
  $footer.className = styles.footer;
  $target.appendChild($footer);

  const $footer_wrap = document.createElement('div');
  $footer_wrap.className = styles.footer_wrap;
  $footer.appendChild($footer_wrap);

  const iconList = [
    {
      title: 'facebook',
      image: Facebook,
      to: 'https://ko-kr.facebook.com/kukka.kr/',
    },
    {
      title: 'instagram',
      image: Instagram,
      to: 'https://www.instagram.com/kukkakorea/',
    },
    {
      title: 'youtube',
      image: Youtube,
      to: 'https://www.youtube.com/channel/UC_zQakXCUPvjcfsU067zyCQ?view_as=subscriber',
    },
  ];

  const aboutBusinessList = [
    {
      title: '상호명',
      detail: '꾸까(kukka)',
    },
    {
      title: '사업자 등록번호',
      detail: '264-81-32594',
    },
    {
      title: '대표자',
      detail: '박춘화',
    },
  ];

  const aboutDetailList = [
    {
      title: '소재지',
      detail: '서울시 서초구 남부순환로333길 10 kukka',
    },
    {
      title: '기업공시',
      detail: 'https://kukka.kr/disclosure/?next=/',
    },
    {
      title: '통신판매신고번호 2018-서울서초-1692',
    },
  ];

  const temsList = [
    {
      title: '이용약관',
      to: 'https://kukka.kr/agreement/?next=/',
    },
    {
      title: '개인정보 처리방침',
      to: 'https://kukka.kr/privacy/?next=/',
    },
    {
      title: '제휴안내',
      to: 'https://partners.kukka.kr/',
    },
  ];

  const setIconList = (list) => {
    return `
      ${list
        .map(
          ({ title, image, to }) => `
        <a href=${to} target=_blank>
          <img src=${image} alt=${title} class=${styles.nav_icon}>
        </a>
      `,
        )
        .join('')}
    `;
  };

  const setAboutList = (list) => {
    return `
      ${list
        .map(({ title, detail }) =>
          detail
            ? detail.substr(0, 4) === 'http'
              ? `
                <a href=${detail} target=_blank>${title}</a>
                <div class=${styles.about_divider}></div>
              `
              : `
                <span>${title}: ${detail}</span>
                <div class=${styles.about_divider}></div>  
              `
            : `
              <span>${title}</span>
              <div class=${styles.about_divider}></div>  
            `,
        )
        .join('')}
    `;
  };

  const setTemsList = (list) => {
    return `
      ${list
        .map(
          ({ title, to }) => `
        <a href=${to} target=_blank class=${styles.tems_item}>
          ${title}
        </a>
      `,
        )
        .join('')}
    `;
  };

  this.render = () => {
    const iconStatus = setIconList(iconList);
    const aboutBusinessInfo = setAboutList(aboutBusinessList);
    const aboutDetailListInfo = setAboutList(aboutDetailList);
    const temsInfo = setTemsList(temsList);

    $footer_wrap.innerHTML = `
      <div class=${styles.footer_inner}>
        <nav class=${styles.sect_sns}>
          ${iconStatus}
        </nav>
        <div class=${styles.footer_upper}>
          <div class=${styles.contact}>
            <h3 class=${styles.contact_title}>꾸까 고객센터</h3>
            <span class=${styles.contact_phone}>1661-1031</span>
            <span class=${styles.contact_due}>(평일 10:00 - 13:00, 14:00 - 18:00 / 주말 & 공휴일 제외)</span>
            <br />
            <span class=${styles.contact_partnership}>기업제휴 문의 : 070-4238-8251</span>
          </div>
          <div class=${styles.faq}>
            <a href='https://kukka.kr/faq/' target=_blank>꾸까 고객센터 ></a>
          </div>
          <div class=${styles.logo}>
            <img src=${Logo_footer} alt='logo' class=${styles.logo_img} />
          </div>
        </div>
        <div class=${styles.hr}></div>
        <div class=${styles.footer_under}> 
          <div class=${styles.sect_about}>
            ${aboutBusinessInfo}
          </div>
          <div class=${styles.sect_about}>
            ${aboutDetailListInfo}
          </div>
          <span>© 2014-2021 kukka, Inc. All rights reserved.</span>
          <nav class=${styles.tems}>
            ${temsInfo}
          </nav>
        </div>
      </div>
    `;
  };

  this.render();
}
