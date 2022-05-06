const board = (function makeKeyboard(lang = 'En') {
  const allButtons = [
    [
      {
        keyEn: '`',
        shiftEn: '~',
        code: 'Backquote',
        keyRu: 'ё',
        shiftRu: 'Ё',
      },
      {
        keyEn: '1',
        shiftEn: '!',
        code: 'Digit1',
        keyRu: '1',
        shiftRu: '!',
      },
      {
        keyEn: '2',
        shiftEn: '@',
        code: 'Digit2',
        keyRu: '2',
        shiftRu: '"',
      },
      {
        keyEn: '3',
        shiftEn: '#',
        code: 'Digit3',
        keyRu: '3',
        shiftRu: '№',
      },
      {
        keyEn: '4',
        shiftEn: '$',
        code: 'Digit4',
        keyRu: '4',
        shiftRu: ';',
      },
      {
        keyEn: '5',
        shiftEn: '%',
        code: 'Digit5',
        keyRu: '5',
        shiftRu: '%',
      },
      {
        keyEn: '6',
        shiftEn: '^',
        code: 'Digit6',
        keyRu: '6',
        shiftRu: ':',
      },
      {
        keyEn: '7',
        shiftEn: '&',
        code: 'Digit7',
        keyRu: '7',
        shiftRu: '?',
      },
      {
        keyEn: '8',
        shiftEn: '*',
        code: 'Digit8',
        keyRu: '8',
        shiftRu: '*',
      },
      {
        keyEn: '9',
        shiftEn: '(',
        code: 'Digit9',
        keyRu: '9',
        shiftRu: '(',
      },
      {
        keyEn: '0',
        shiftEn: ')',
        code: 'Digit0',
        keyRu: '0',
        shiftRu: ')',
      },
      {
        keyEn: '-',
        shiftEn: '_',
        code: 'Minus',
        keyRu: '-',
        shiftRu: '_',
      },
      {
        keyEn: '=',
        shiftEn: '+',
        code: 'Equal',
        keyRu: '=',
        shiftRu: '+',
      },
      {
        keyEn: 'Backspace',
        code: 'Backspace',
        keyRu: 'Backspace',
      },
    ],
    [
      {
        keyEn: 'Tab',
        code: 'Tab',
        keyRu: 'Tab',
      },
      {
        keyEn: 'q',
        shiftEn: 'Q',
        code: 'keyQ',
        keyRu: 'й',
        shiftRu: 'Й',
      },
      {
        keyEn: 'w',
        shiftEn: 'W',
        code: 'keyW',
        keyRu: 'ц',
        shiftRu: 'Ц',
      },
      {
        keyEn: 'e',
        shiftEn: 'E',
        code: 'keyE',
        keyRu: 'у',
        shiftRu: 'У',
      },
      {
        keyEn: 'r',
        shiftEn: 'R',
        code: 'keyR',
        keyRu: 'к',
        shiftRu: 'К',
      },
      {
        keyEn: 't',
        shiftEn: 'T',
        code: 'keyT',
        keyRu: 'е',
        shiftRu: 'Е',
      },
      {
        keyEn: 'y',
        shiftEn: 'Y',
        code: 'keyY',
        keyRu: 'н',
        shiftRu: 'Н',
      },
      {
        keyEn: 'u',
        shiftEn: 'U',
        code: 'keyU',
        keyRu: 'г',
        shiftRu: 'Г',
      },
      {
        keyEn: 'i',
        shiftEn: 'I',
        code: 'keyI',
        keyRu: 'ш',
        shiftRu: 'Ш',
      },
      {
        keyEn: 'o',
        shiftEn: 'O',
        code: 'keyO',
        keyRu: 'щ',
        shiftRu: 'Щ',
      },
      {
        keyEn: 'p',
        shiftEn: 'P',
        code: 'keyP',
        keyRu: 'з',
        shiftRu: 'З',
      },
      {
        keyEn: '[',
        shiftEn: '{',
        code: 'BracketLeft',
        keyRu: 'х',
        shiftRu: 'Х',
      },
      {
        keyEn: ']',
        shiftEn: '}',
        code: 'BracketRight',
        keyRu: 'ъ',
        shiftRu: 'Ъ',
      },
      {
        keyEn: '\\',
        shiftEn: '|',
        code: 'Backslash',
        keyRu: '\\',
        shiftRu: '/',
      },
      {
        keyEn: 'Delete',
        code: 'Delete',
        keyRu: 'Delete',
      },
    ],
    [
      {
        keyEn: 'CapsLock',
        code: 'CapsLock',
        keyRu: 'CapsLock',
      },
      {
        keyEn: 'a',
        shiftEn: 'A',
        code: 'keyA',
        keyRu: 'ф',
        shiftRu: 'Ф',
      },
      {
        keyEn: 's',
        shiftEn: 'S',
        code: 'keyS',
        keyRu: 'ы',
        shiftRu: 'Ы',
      },
      {
        keyEn: 'd',
        shiftEn: 'D',
        code: 'keyD',
        keyRu: 'в',
        shiftRu: 'В',
      },
      {
        keyEn: 'f',
        shiftEn: 'F',
        code: 'keyF',
        keyRu: 'а',
        shiftRu: 'А',
      },
      {
        keyEn: 'g',
        shiftEn: 'G',
        code: 'keyG',
        keyRu: 'п',
        shiftRu: 'П',
      },
      {
        keyEn: 'h',
        shiftEn: 'H',
        code: 'keyH',
        keyRu: 'р',
        shiftRu: 'Р',
      },
      {
        keyEn: 'j',
        shiftEn: 'J',
        code: 'keyJ',
        keyRu: 'о',
        shiftRu: 'О',
      },
      {
        keyEn: 'k',
        shiftEn: 'K',
        code: 'keyK',
        keyRu: 'л',
        shiftRu: 'Л',
      },
      {
        keyEn: 'l',
        shiftEn: 'L',
        code: 'keyL',
        keyRu: 'д',
        shiftRu: 'Д',
      },
      {
        keyEn: ';',
        shiftEn: ':',
        code: 'Semicolon',
        keyRu: 'ж',
        shiftRu: 'Ж',
      },
      {
        keyEn: "'",
        shiftEn: '"',
        code: 'Quote',
        keyRu: 'э',
        shiftRu: 'Э',
      },
      {
        keyEn: 'Enter',
        code: 'Enter',
        keyRu: 'Enter',
      },
    ],
    [
      {
        keyEn: 'Shift',
        code: 'ShiftLeft',
        keyRu: 'Shift',
      },
      {
        keyEn: 'z',
        shiftEn: 'Z',
        code: 'keyZ',
        keyRu: 'я',
        shiftRu: 'Я',
      },
      {
        keyEn: 'x',
        shiftEn: 'X',
        code: 'keyX',
        keyRu: 'ч',
        shiftRu: 'Ч',
      },
      {
        keyEn: 'c',
        shiftEn: 'C',
        code: 'keyC',
        keyRu: 'с',
        shiftRu: 'С',
      },
      {
        keyEn: 'v',
        shiftEn: 'V',
        code: 'keyV',
        keyRu: 'м',
        shiftRu: 'М',
      },
      {
        keyEn: 'b',
        shiftEn: 'B',
        code: 'keyB',
        keyRu: 'и',
        shiftRu: 'И',
      },
      {
        keyEn: 'n',
        shiftEn: 'N',
        code: 'keyN',
        keyRu: 'т',
        shiftRu: 'Т',
      },
      {
        keyEn: 'm',
        shiftEn: 'M',
        code: 'keyM',
        keyRu: 'ь',
        shiftRu: 'Ь',
      },
      {
        keyEn: ',',
        shiftEn: '<',
        code: 'Comma',
        keyRu: 'б',
        shiftRu: 'Б',
      },
      {
        keyEn: '.',
        shiftEn: '>',
        code: 'Period',
        keyRu: 'ю',
        shiftRu: 'Ю',
      },
      {
        keyEn: '/',
        shiftEn: '?',
        code: 'Slash',
        keyRu: '.',
        shiftRu: ',',
      },
      {
        keyEn: 'ArrowUp',
        code: 'ArrowUp',
        keyRu: 'ArrowUp',
      },
      {
        keyEn: 'Shift',
        code: 'ShiftRight',
        keyRu: 'Shift',
      },
    ],
    [
      {
        keyEn: 'Control',
        code: 'ControlLeft',
        keyRu: 'Control',
      },
      {
        keyEn: 'Meta',
        code: 'MetaRight',
        keyRu: 'Meta',
      },
      {
        keyEn: 'Alt',
        code: 'AltLeft',
        keyRu: 'Alt',
      },
      {
        keyEn: ' ',
        code: 'Space',
        keyRu: ' ',
      },
      {
        keyEn: 'Alt',
        code: 'AltRight',
        keyRu: 'AltGraph',
      },
      {
        keyEn: 'ArrowLeft',
        code: 'ArrowLeft',
        keyRu: 'ArrowLeft',
      },
      {
        keyEn: 'ArrowDown',
        code: 'ArrowDown',
        keyRu: 'ArrowDown',
      },
      {
        keyEn: 'ArrowRight',
        code: 'ArrowRight',
        keyRu: 'ArrowRight',
      },
      {
        keyEn: 'Control',
        code: 'ControlRight',
        keyRu: 'Control',
      },
    ],
  ];
  let language = lang;

  // visual render of keyboard
  function makeButton(name, coords, className) {
    const button = document.createElement('div');
    button.classList.add('board-button');
    if (className) button.classList.add(className);
    if (coords) button.dataset.coords = coords;
    button.textContent = name;
    return button;
  }

  function makeRowOfButtons(arrayOfButtons, rowIndex) {
    const buttonsRow = document.createElement('div');
    buttonsRow.classList.add('board-row');
    arrayOfButtons.forEach((elem, i) => {
      if (elem[`key${language}`].length > 1) {
        buttonsRow.append(makeButton(elem.code, [rowIndex, i, elem.code], 'spec-button'));
      } else if (elem[`key${language}`] === ' ') {
        buttonsRow.append(makeButton(elem[`key${language}`], [rowIndex, i, elem.code], 'space-button'));
      } else {
        buttonsRow.append(makeButton(elem[`key${language}`], [rowIndex, i, elem.code]));
      }
    });

    return buttonsRow;
  }
  // visual changes on keyboard
  let isCapChars = false;
  function showShifted() {
    const buttons = document.querySelectorAll('.board-button');
    buttons.forEach((e) => {
      const [x, y] = e.dataset.coords.split(',');
      if (allButtons[x][y][`shift${language}`]) e.textContent = allButtons[x][y][`shift${language}`];
    });
  }
  function hideShifted() {
    const buttons = document.querySelectorAll('.board-button');
    buttons.forEach((e) => {
      const [x, y] = e.dataset.coords.split(',');
      if (allButtons[x][y][`shift${language}`]) e.textContent = allButtons[x][y][`key${language}`];
    });
  }
  function capsReaction(direction, shifted = false) {
    const symbols = document.querySelectorAll('.board-button');
    symbols.forEach((e) => {
      const [x, y] = e.dataset.coords.split(',');
      if (direction === 'up') {
        if (allButtons[x][y].code.includes('key')) {
          e.textContent = allButtons[x][y][`shift${language}`];
          isCapChars = true;
        }
      } else if (allButtons[x][y].code.includes('key')) {
        e.textContent = allButtons[x][y][`key${language}`];
        isCapChars = !!shifted;
      }
    });
  }
  // special buttons keyboard reaction
  function turnOnShift() {
    if (isCapChars) {
      showShifted();
      capsReaction('down', true);
    } else {
      showShifted();
    }
  }
  function turnOffShift() {
    if (isCapChars) {
      hideShifted();
      capsReaction('up');
    } else {
      hideShifted();
    }
  }
  function turnOnCaps() {
    if (isCapChars) {
      capsReaction('down');
    } else {
      capsReaction('up');
    }
  }
  function changeLanguage() {
    language = language === 'En' ? 'Ru' : 'En';
    const buttons = document.querySelectorAll('.board-button');
    buttons.forEach((e) => {
      const [x, y] = e.dataset.coords.split(',');
      if (allButtons[x][y][`key${language}`].length > 1) {
        e.textContent = allButtons[x][y].code;
      } else {
        e.textContent = allButtons[x][y][`key${language}`];
      }
    });
  }
  function tabDown(e) {
    e.preventDefault();
    const textarea = document.querySelector('textarea');
    textarea.value += '\t';
  }
  function charKeyDown(e) {
    e.preventDefault();
    const textarea = document.querySelector('textarea');
    const buttons = document.querySelectorAll('.board-button');

    buttons.forEach((elem) => {
      const coord = elem.dataset.coords.split(',');
      if (e.code.toLowerCase() === coord[2].toLowerCase()) {
        textarea.value += elem.textContent;
      }
    });
  }
  // special buttons mouse reaction
  function runSpecialButtonByMouse(target) {
    console.log(target);
  }

  // regulation of mouse and keyboard control
  function mouseClickOnBoard(e) {
    if (!e.target.classList.contains('board-button')) return;
    if (e.target.classList.contains('spec-button')) {
      runSpecialButtonByMouse(e.target);
    } else {
      const textarea = document.querySelector('textarea');
      const [x, y] = e.target.dataset.coords.split(',');
      if (e.shiftKey) {
        textarea.value += allButtons[x][y][`shift${language}`];
      } else {
        textarea.value += allButtons[x][y][`key${language}`];
      }
    }
  }

  function keyboardOnDown(e) {
    const special = ['CapsLock', 'ShiftRight', 'ShiftLeft', 'ControlLeft', 'ControlRight', 'Tab'];
    const textarea = document.querySelector('textarea');

    if (e.repeat && special.includes(e.code)) {
      e.preventDefault();
      textarea.focus();
      return;
    }

    if (e.code === 'Tab') tabDown(e);
    if (e.key.length === 1) charKeyDown(e);
    textarea.focus();

    console.log(e);

    if (e.key.length > 1) {
      const spec = document.querySelectorAll('.spec-button');
      spec.forEach((elem) => {
        if (elem.textContent === e.code) elem.classList.add('active');
        if (e.code === elem.textContent && elem.textContent === 'CapsLock') elem.classList.toggle('caps');
      });
      if (e.code.toLowerCase().includes('shift')) turnOnShift(e);
      if (e.code.toLowerCase().includes('caps')) turnOnCaps(e);
    } else {
      const buttons = document.querySelectorAll('.board-button');
      buttons.forEach((elem) => {
        if (e.code.toLowerCase() === elem.dataset.coords.split(',')[2].toLowerCase()) {
          elem.classList.add('active');
        }
      });
    }

    if (e.code === 'AltLeft' && e.ctrlKey) changeLanguage();
    if (e.code === 'ControlLeft' && e.altKey) changeLanguage();
  }

  function keyboardOnUp(e) {
    if (e.key.length > 1) {
      const spec = document.querySelectorAll('.spec-button');
      spec.forEach((elem) => {
        if (elem.textContent === e.code) elem.classList.remove('active');
      });
      if (e.code.toLowerCase().includes('shift')) turnOffShift(e);
    } else {
      const buttons = document.querySelectorAll('.board-button');
      buttons.forEach((elem) => {
        if (e.code.toLowerCase() === elem.dataset.coords.split(',')[2].toLowerCase()) {
          elem.classList.remove('active');
        }
      });
    }
  }

  // Board creation and set of events
  function makeVirtualKeyboard() {
    const mainBlock = document.createElement('div');
    mainBlock.classList.add('board');
    allButtons.forEach((buttonsRow, i) => {
      mainBlock.append(makeRowOfButtons(buttonsRow, i));
    });
    mainBlock.addEventListener('click', (e) => {
      mouseClickOnBoard(e);
    });
    // mainBlock.addEventListener('mousedown', (e) => {
    //   if (!e.target.dataset.coords) return;
    //   const [x, y] = e.target.dataset.coords.split(',');
    //   if (allButtons[x][y][`key${language}`] !== 'Shift') return;
    //   showShifted(e);
    // });
    // mainBlock.addEventListener('mouseup', (e) => {
    //   if (!e.target.dataset.coords) return;
    //   const [x, y] = e.target.dataset.coords.split(',');
    //   if (allButtons[x][y][`key${language}`] !== 'Shift') return;
    //   hideShifted(e);
    // });
    document.addEventListener('keydown', keyboardOnDown);
    document.addEventListener('keyup', keyboardOnUp);

    return mainBlock;
  }

  return makeVirtualKeyboard();
});

export default board;
