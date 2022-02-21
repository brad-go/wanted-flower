import Sample from './modules/Sample/Sample.js';
import FlowerClass from './modules/FlowerClass/FlowerClass';

export default function App({ $target }) {
  this.state = {};

  const sample = new Sample({
    $target,
    initialState: {
      //...
    },
  });
  const flowerClass = new FlowerClass({ $target });
}
