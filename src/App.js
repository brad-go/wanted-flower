import GNB from './modules/GNB/GNB.js';
import FlowerClass from './modules/FlowerClass/FlowerClass.js';

export default function App({ $target }) {
  this.state = {};

  const gnb = new GNB({
    $target,
  });
  const flowerClass = new FlowerClass({
    $target,
  });
}
