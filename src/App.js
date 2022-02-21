import GNB from './modules/GNB/GNB.js';

export default function App({ $target }) {
  this.state = {};

  const gnb = new GNB({
    $target,
  });
}
