
import Sample from './modules/Sample/Sample.js';
import styles from './global.module.css';
import GNB from './modules/GNB/GNB.js';
import FlowerClass from './modules/FlowerClass/FlowerClass.js';
import Banner from './modules/Banner/Banner.js';
import Footer from './modules/Footer/Footer.js';

export default function App({ $target }) {
  this.state = {};
  const $main = document.createElement('main');

  const gnb = new GNB({
    $target,
  });
  $target.appendChild($main);

  const flowerClass = new FlowerClass({
    $target: $main,
  });
  const banner = new Banner({
    $target: $main,
  });
  const footer = new Footer({
    $target,
  });
}
