import styles from './Popup.module.css';
import PopupImage from '../../assets/img_popup.jpeg';
import Close from '../../assets/icon_close.png';

export default function Popup({ $target, onClose, visible }) {
  const $popup_wrapper = document.createElement('div');
  $popup_wrapper.className = styles.popup_wrapper;
  $target.appendChild($popup_wrapper);

  if (visible === false) {
    $popup_wrapper.style.display = 'none';
  }

  if ($popup_wrapper.style.display !== 'none') {
    document.querySelector('body').style.overflow = 'hidden';
  }

  this.render = () => {
    $popup_wrapper.innerHTML = `
      <div class=${styles.popup_box}>
        <img class=${styles.popup_content} src=${PopupImage} alt='popup image' />
        <div class=${styles.popup_close}>
          <label class=${styles.label}>
            <input type='checkbox' class=${styles.checkbox} />
            오늘은 더 이상 보지 않기
          </label>
          <button class=${styles.close_button}>
            <img class=${styles.close_image} src=${Close} alt='close button'/>
          </button>
        </div>
      </div>
    `;
  };

  this.render();

  $popup_wrapper.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.tagName === 'BUTTON') {
      onClose('INPUT');
      document.querySelector('body').style.overflow = 'auto';
      $popup_wrapper.style.display = 'none';
    }
  });
}
