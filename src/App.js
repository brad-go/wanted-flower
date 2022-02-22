import styles from './global.module.css';
import GNB from './modules/GNB/GNB.js';
import FlowerClass from './modules/FlowerClass/FlowerClass.js';
import Footer from './modules/Footer/Footer.js';

export default function App({ $target }) {
  this.state = {};
  const $main = document.createElement('main');

  const gnb = new GNB({
    $target,
  });
  const flowerClass = new FlowerClass({
    $target: $main,
  });
  const footer = new Footer({
    $target,
  });

  $target.appendChild($main);
}
