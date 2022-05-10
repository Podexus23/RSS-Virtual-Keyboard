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
        keyEn: 'Tab ⇆',
        code: 'Tab',
        keyRu: 'Tab ⇆',
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
        keyEn: '⇧ Shift',
        code: 'ShiftLeft',
        keyRu: '⇧ Shift',
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
        keyEn: '↑',
        code: 'ArrowUp',
        keyRu: '↑',
      },
      {
        keyEn: '⇧ Shift',
        code: 'ShiftRight',
        keyRu: '⇧ Shift',
      },
    ],
    [
      {
        keyEn: 'Control',
        code: 'ControlLeft',
        keyRu: 'Control',
      },
      {
        keyEn: 'Win',
        code: 'MetaLeft',
        keyRu: 'Win',
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
        keyRu: 'Alt',
      },
      {
        keyEn: '←',
        code: 'ArrowLeft',
        keyRu: '←',
      },
      {
        keyEn: '↓',
        code: 'ArrowDown',
        keyRu: '↓',
      },
      {
        keyEn: '→',
        code: 'ArrowRight',
        keyRu: '→',
      },
      {
        keyEn: 'Control',
        code: 'ControlRight',
        keyRu: 'Control',
      },
    ],
  ];
  let language = lang;

  const mainBlock = document.createElement('div');
  mainBlock.classList.add('board');
  mainBlock.dataset.lang = language;

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
        buttonsRow.append(makeButton(elem[`key${language}`], [rowIndex, i, elem.code], 'spec-button'));
      } else if (elem[`key${language}`] === ' ') {
        buttonsRow.append(makeButton(elem[`key${language}`], [rowIndex, i, elem.code], 'space-button'));
      } else {
        buttonsRow.append(makeButton(elem[`key${language}`], [rowIndex, i, elem.code]));
      }
    });

    return buttonsRow;
  }
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
      const codeKey = allButtons[x][y].code;
      if (direction === 'up') {
        if (codeKey.includes('key')) e.textContent = allButtons[x][y][`shift${language}`];
        if (language === 'Ru'
        && (codeKey.includes('Bracket') || codeKey.includes('Semicolon')
        || codeKey.includes('Quote') || codeKey.includes('Comma')
        || codeKey.includes('Period') || codeKey.includes('Backquote'))) {
          e.textContent = allButtons[x][y][`shift${language}`];
        }
        isCapChars = true;
      }
      if (direction === 'down') {
        if (codeKey.includes('key')) e.textContent = allButtons[x][y][`key${language}`];
        if (language === 'Ru'
          && (codeKey.includes('Bracket') || codeKey.includes('Semicolon')
          || codeKey.includes('Quote') || codeKey.includes('Comma')
          || codeKey.includes('Period') || codeKey.includes('Backquote'))) {
          e.textContent = allButtons[x][y][`key${language}`];
        }
        isCapChars = shifted;
      }
    });
  }

  function isShifted() {
    const mouse = Array.from(document.querySelectorAll('.active'))
      .filter((elem) => elem.dataset.coords.includes('Shift'));
    return mouse.length > 0;
  }
  function isCapsOn() {
    const caps = Array.from(document.querySelectorAll('.caps'))
      .filter((elem) => elem.dataset.coords.includes('CapsLock'));
    return caps.length > 0;
  }
  function addCharOnTextArea(char) {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    textarea.value = `${textarea.value.substring(0, start)}${char}${textarea.value.substring(end)}`;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }
  function tabDown(e) {
    if (e) e.preventDefault();
    addCharOnTextArea('\t');
  }
  function enterDown(e) {
    if (e) e.preventDefault();
    addCharOnTextArea('\n');
  }
  function backspaceDown() {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    textarea.value = `${textarea.value.substring(0, start - 1)}${textarea.value.substring(end)}`;
    textarea.selectionStart = start - 1;
    textarea.selectionEnd = start - 1;
  }
  function deleteDown() {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    textarea.value = `${textarea.value.substring(0, start)}${textarea.value.substring(end + 1)}`;
    textarea.selectionStart = start;
    textarea.selectionEnd = start;
  }

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
  function turnOnShiftCaps() {
    if (!isCapChars) {
      capsReaction('down');
      isCapChars = true;
    } else {
      capsReaction('up');
      isCapChars = false;
    }
  }
  function changeLanguage() {
    language = language === 'En' ? 'Ru' : 'En';
    mainBlock.dataset.lang = language;
    const buttons = document.querySelectorAll('.board-button');
    buttons.forEach((e) => {
      const [x, y] = e.dataset.coords.split(',');
      const theKey = isShifted() ? `shift${language}` : `key${language}`;
      if (allButtons[x][y][theKey]) e.textContent = allButtons[x][y][theKey];
      else e.textContent = allButtons[x][y][`key${language}`];
    });
    if (isCapsOn() && !isShifted()) capsReaction('up');
    if (isCapsOn() && isShifted()) capsReaction('down', true);
  }
  function charKeyDown(e) {
    e.preventDefault();

    const buttons = document.querySelectorAll('.board-button');

    buttons.forEach((elem) => {
      const coord = elem.dataset.coords.split(',');
      if (e.code.toLowerCase() === coord[2].toLowerCase()) {
        addCharOnTextArea(elem.textContent);
      }
    });
  }
  function metaEvent() {}
  function capsLockOnMouse(e) {
    if (e.type === 'mousedown') e.target.classList.toggle('caps');
    else e.target.classList.toggle('caps');

    if (e.shiftKey) turnOnShiftCaps();
    else turnOnCaps();
  }
  function runSpecialButtonByMouse(event) {
    const codeKey = event.target.dataset.coords.split(',')[2];
    if (codeKey === 'Tab') tabDown(event);
    if (codeKey === 'Enter') enterDown(event);
    if (codeKey === 'Backspace') backspaceDown(event);
    if (codeKey === 'Delete') deleteDown(event);
    if (codeKey === 'MetaRight') metaEvent(event);
    if (event.target.dataset.coords.includes('AltLeft') && event.ctrlKey) changeLanguage();
    if (event.target.dataset.coords.includes('ControlLeft') && event.altKey) changeLanguage();
  }
  function clickOnChar(e) {
    addCharOnTextArea(e.target.textContent);
  }
  function mouseClickOnBoard(e) {
    if (!e.target.classList.contains('board-button')) return;
    const textarea = document.querySelector('textarea');
    textarea.focus();

    if (e.target.classList.contains('spec-button')) {
      runSpecialButtonByMouse(e);
    } else {
      clickOnChar(e);
    }
  }
  function mouseDownSpecial(e) {
    if (!e.target.classList.contains('board-button')) return;
    const codeKey = e.target.dataset.coords.split(',')[2];
    if (codeKey === 'CapsLock') capsLockOnMouse(e);
    if (e.target.dataset.coords.includes('ShiftLeft')
    || e.target.dataset.coords.includes('ShiftRight')) {
      e.target.classList.toggle('active');
      if (document.querySelector('.caps')) {
        turnOnShift();
      } else { turnOnShift(); }
    }
  }
  function mouseUpSpecial(e) {
    if (!e.target.classList.contains('board-button')) return;
    if (e.target.dataset.coords.includes('ShiftLeft')
    || e.target.dataset.coords.includes('ShiftRight')) {
      e.target.classList.toggle('active');
      if (document.querySelector('.caps')) {
        turnOffShift();
      } else { turnOffShift(); }
    }
  }
  function keyboardOnDown(e) {
    const special = ['CapsLock', 'ShiftRight', 'ShiftLeft',
      'ControlLeft', 'ControlRight', 'Tab', 'AltLeft', 'AltRight'];
    const textarea = document.querySelector('textarea');

    if (e.repeat && special.includes(e.code)) {
      e.preventDefault();
      textarea.focus();
      return;
    }

    if (e.code === 'Tab') tabDown(e);
    if (e.key.length === 1) charKeyDown(e);
    if (e.key.includes('Arrow')) charKeyDown(e);
    textarea.focus();
    const spec = document.querySelectorAll('.spec-button');
    const buttons = document.querySelectorAll('.board-button');
    const activeShift = Array.from(document.querySelectorAll('.active'))
      .filter((act) => act.dataset.coords.includes('Shift'));
    if (e.key.length > 1) {
      spec.forEach((elem) => {
        const codeKey = elem.dataset.coords.split(',')[2];
        if (codeKey === e.code) elem.classList.add('active');
        if (e.code === codeKey && codeKey === 'CapsLock') elem.classList.toggle('caps');
      });
      if (e.key.includes('Arrow')) {
        buttons.forEach((elem) => {
          if (e.code.toLowerCase() === elem.dataset.coords.split(',')[2].toLowerCase()) {
            elem.classList.add('active');
          }
        });
      }
      if (e.code.toLowerCase().includes('shift')) turnOnShift(e);
      if ((e.code.toLowerCase().includes('caps') && e.shiftKey)
       || (e.code.toLowerCase().includes('caps') && activeShift.length > 0)) {
        turnOnShiftCaps(e);
      } else if (e.code.toLowerCase().includes('caps')) turnOnCaps(e);
    } else {
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
    const spec = document.querySelectorAll('.spec-button');
    const buttons = document.querySelectorAll('.board-button');

    if (e.key.length > 1) {
      spec.forEach((elem) => {
        const codeKey = elem.dataset.coords.split(',')[2];
        if (codeKey === e.code) elem.classList.remove('active');
      });
      if (e.key.includes('Arrow')) {
        buttons.forEach((elem) => {
          if (e.code.toLowerCase() === elem.dataset.coords.split(',')[2].toLowerCase()) {
            elem.classList.remove('active');
          }
        });
      }
      if (e.code.toLowerCase().includes('shift')) turnOffShift(e);
    } else {
      buttons.forEach((elem) => {
        const coords = elem.dataset.coords.split(',');
        if (e.code.toLowerCase() === coords[2].toLowerCase()) elem.classList.remove('active');
      });
    }
  }

  allButtons.forEach((buttonsRow, i) => {
    mainBlock.append(makeRowOfButtons(buttonsRow, i));
  });

  mainBlock.addEventListener('click', mouseClickOnBoard);
  mainBlock.addEventListener('mousedown', mouseDownSpecial);
  mainBlock.addEventListener('mouseup', mouseUpSpecial);
  document.addEventListener('keydown', keyboardOnDown);
  document.addEventListener('keyup', keyboardOnUp);

  return { mainBlock, changeLanguage };
});

export default board;
