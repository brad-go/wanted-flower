import styles from './sample.module.css';

export default function Sample({ $target, initialState }) {
  const $sample = document.createElement('div');
  $sample.className = styles.sample;

  $target.appendChild($sample);

  this.state = initialState;

  this.setState = (nextState) => {
    // ..
  };

  const $title = document.createElement('h1');
  $title.className = styles.title;
  $title.innerHTML = '제목입니다!';
  $sample.appendChild($title);
}
