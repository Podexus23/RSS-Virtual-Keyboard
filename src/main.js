import './style/main.scss';
import board from './code/board';
import textArea from './code/textarea';

const renderPage = (function renderMainPage() {
  const { body } = document;
  const { mainArea } = textArea();
  body.append(mainArea);
  body.append(board());
});

renderPage();
