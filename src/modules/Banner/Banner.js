import styles from './Banner.module.css';

export default function Banner({ $target }) {
  const $banner = document.createElement('section');
  $banner.className = styles.banner;

  $target.appendChild($banner);
}
