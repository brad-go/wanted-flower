import styles from './global.module.css';
import Movie from './modules/Movie/Movie.js';
import GNB from './modules/GNB/GNB.js';
import FlowerClass from './modules/FlowerClass/FlowerClass.js';
import Footer from './modules/Footer/Footer.js';
import Popup from './modules/Popup/Popup.js';

export default function App({ $target }) {
  const $main = document.createElement('main');
  $target.appendChild($main);

  const getCookie = () => {
    const cookie = document.cookie;

    if (document.cookie != '') {
      const cookie_array = cookie.split('; ');
      for (var index in cookie_array) {
        const cookie_name = cookie_array[index].split('=');
        if (cookie_name[0] == 'popupVisible') {
          return cookie_name[1];
        }
      }
    }
    return;
  };

  const popupVisible = getCookie();

  const setCookie = (name, value, expiredays) => {
    const date = new Date();
    date.setDate(date.getDate() + expiredays);
    const cookieValue =
      name + '=' + value + '; expires=' + date.toUTCString() + ';';
    document.cookie = cookieValue + 'SameSite=None; Secure';
  };

  const handleOnClose = (target) => {
    const targetInput = document.getElementsByTagName(target);
    const isChecked = targetInput.item(0).checked;

    if (isChecked) {
      setCookie('popupVisible', 'false', 1);
    }

    window.scrollTo(0, 0);
  };

  const gnb = new GNB({
    $target,
  });
  const movie = new Movie({
    $target: $main,
  });
  const flowerClass = new FlowerClass({
    $target: $main,
  });
  const footer = new Footer({
    $target,
  });
  const popup = new Popup({
    $target,
    onClose: handleOnClose,
    visible: popupVisible === 'false' ? false : true,
  });
}
