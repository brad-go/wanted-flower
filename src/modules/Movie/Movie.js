import styles from './Movie.module.css';

export default function Movie({ $target }) {
  const movieId = 'k4lC4xuKv3U';
  const $section = document.createElement('section');
  $section.className = styles.movie;
  $section.insertAdjacentHTML('afterbegin', `
    <iframe src="https://www.youtube.com/embed/${movieId}?&amp;autoplay=1&mute=1&amp;loop=1&controls=0&playlist=${movieId}"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
    `);
  $target.appendChild($section);
}
