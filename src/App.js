import Sample from './modules/Sample/Sample.js';
import Banner from './modules/Banner/Banner.js';

export default function App({ $target }) {
  this.state = {};

  const sample = new Sample({
    $target,
    initialState: {
      //...
    },
  });
  const banner = new Banner({
    $target,
  });
}
