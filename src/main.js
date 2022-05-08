import './assets/fonts/Comfortaa-VariableFont_wght.ttf';
import './style/main.scss';
import board from './code/board';
import textArea from './code/textarea';
import backColorizer from './code/backgroundColorizer';

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.Podexus23RSlang) return;
  localStorage.Podexus23RSlang = 'En';
});

(function renderMainPage() {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard-wrapper');

  const { body } = document;
  const { mainArea } = textArea();

  function addMessages() {
    const howToChange = document.createElement('p');
    const workingOS = document.createElement('p');
    howToChange.innerHTML = 'To change language press Ctrl Left + Alt Left';
    workingOS.innerHTML = 'Keyboard made for Windows OS';
    return { howToChange, workingOS };
  }
  const { howToChange, workingOS } = addMessages();

  keyboard.append(mainArea);
  keyboard.append(board(localStorage.Podexus23RSlang));
  keyboard.append(howToChange);
  keyboard.append(workingOS);

  body.append(backColorizer());
  body.append(keyboard);
}());

window.addEventListener('unload', () => {
  const langFromBoard = document.querySelector('.board').dataset.lang;
  localStorage.Podexus23RSlang = langFromBoard;
});
