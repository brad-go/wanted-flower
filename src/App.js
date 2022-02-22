
import Sample from './modules/Sample/Sample.js';
import styles from './global.module.css';
import GNB from './modules/GNB/GNB.js';
import FlowerClass from './modules/FlowerClass/FlowerClass.js';
import Banner from './modules/Banner/Banner.js';

export default function App({ $target }) {
  this.state = {};
  const $main = document.createElement('main');


  // const sample = new Sample({
  //   $target,
  //   initialState: {
  //     //...
  //   },
  // });

  const gnb = new GNB({
    $target,
  });
  const flowerClass = new FlowerClass({
    $target: $main,
  });
  const banner = new Banner({ $target });
  $target.appendChild($main);
}
