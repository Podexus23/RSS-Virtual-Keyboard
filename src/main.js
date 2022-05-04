import './style/main.scss';
import board from './code/board';
import textArea from './code/textarea';

const renderPage = (function renderMainPage() {
  const { body } = document;
  body.append(textArea());
  body.append(board());
});

renderPage();
