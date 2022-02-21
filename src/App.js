import Movie from './modules/Movie/Movie.js';

export default function App({ $target }) {
  this.state = {};

  const movie = new Movie({
    $target,
  });
}
