import './style/main.scss';
import Board from './code/board';

console.log('hi');

const textarea = document.createElement('textarea');
const { body } = document;
body.append(textarea);

const amigo = new Board();
amigo.who();
