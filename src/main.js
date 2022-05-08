import './assets/fonts/Comfortaa-VariableFont_wght.ttf';
import './style/main.scss';
import board from './code/board';
import textArea from './code/textarea';
import backColorizer from './code/backgroundColorizer';
import infoBlock from './code/infoBlock';

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.Podexus23RSlang) return;
  localStorage.Podexus23RSlang = 'En';
});

(function renderMainPage() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard-wrapper');

  const { body } = document;
  const { mainArea } = textArea();

  const { mainBlock, changeLanguage } = board(localStorage.Podexus23RSlang);
  const info = infoBlock();

  keyboard.append(mainArea);
  keyboard.append(mainBlock);
  keyboard.append(info);

  body.append(backColorizer());
  body.append(keyboard);

  const langButtons = document.querySelectorAll('.info-button');

  function checkLang() {
    const langFromBoard = document.querySelector('.board').dataset.lang;
    if (langFromBoard === 'En') {
      langButtons[0].classList.add('active-lng');
      langButtons[1].classList.remove('active-lng');
    } else {
      langButtons[1].classList.add('active-lng');
      langButtons[0].classList.remove('active-lng');
    }
  }

  setInterval(checkLang, 10);

  function buttonOnClick(e) {
    if (e.target.classList.contains('active-lng')) return;
    changeLanguage();
    langButtons.forEach((elem) => elem.classList.toggle('active-lng'));
  }
  langButtons.forEach((elem) => elem.addEventListener('click', buttonOnClick));
}());

window.addEventListener('unload', () => {
  const langFromBoard = document.querySelector('.board').dataset.lang;
  localStorage.Podexus23RSlang = langFromBoard;
});
