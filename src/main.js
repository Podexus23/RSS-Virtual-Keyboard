import './style/main.scss';
import board from './code/board';
import textArea from './code/textarea';

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
  body.append(board());

  body.append(howToChange);
  body.append(workingOS);
});

renderPage();
