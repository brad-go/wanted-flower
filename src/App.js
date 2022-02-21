import Sample from './modules/sample/sample.js';

export default function App({ $target }) {
  this.state = {};

  const sample = new Sample({
    $target,
    initialState: {
      //...
    },
  });
}
