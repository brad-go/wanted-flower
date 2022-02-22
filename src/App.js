import styles from './global.module.css';
import Movie from './modules/Movie/Movie.js';
import GNB from './modules/GNB/GNB.js';
import FlowerClass from './modules/FlowerClass/FlowerClass.js';

export default function App({ $target }) {
  this.state = {};
  const $main = document.createElement('main');

  const gnb = new GNB({
    $target,
  });
  const movie = new Movie({
    $target: $main,
  });
  const flowerClass = new FlowerClass({
    $target: $main,
  });

  $target.appendChild($main);
}
