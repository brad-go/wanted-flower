import Sample from './modules/Sample/Sample.js';

export default function App({ $target }) {
  this.state = {};

  const sample = new Sample({
    $target,
    initialState: {
      //...
    },
  });
}
