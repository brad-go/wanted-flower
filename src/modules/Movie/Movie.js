import styles from './Movie.module.css';

export default function Movie({ $target }) {
  const $section = document.createElement('section');
  $section.insertAdjacentHTML('afterbegin', `
    <iframe src="https://www.youtube.com/embed/k4lC4xuKv3U?&amp;autoplay=1&mute=1&amp;loop=1&controls=0&playlist=k4lC4xuKv3U"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
    `);
  $target.appendChild($section);
}
