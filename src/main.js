import './assets/fonts/Comfortaa-VariableFont_wght.ttf';
import './style/main.scss';
import board from './code/board';
import textArea from './code/textarea';

document.addEventListener('DOMContentLoaded', () => {
  console.log(localStorage);
  if (localStorage.length === 0) localStorage.lang = 'En';
});

const renderPage = (function renderMainPage() {
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
  body.append(mainArea);
  body.append(board(localStorage.lang));

  body.append(howToChange);
  body.append(workingOS);
});

renderPage();

window.addEventListener('unload', () => {
  const langFromBoard = document.querySelector('.board').dataset.lang;
  localStorage.lang = langFromBoard;
});
