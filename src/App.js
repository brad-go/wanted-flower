import FlowerClass from './modules/FlowerClass/FlowerClass.js';

export default function App({ $target }) {
  this.state = {};

  const flowerClass = new FlowerClass({
    $target,
    initialState: {
      //...
    },
  });
}
