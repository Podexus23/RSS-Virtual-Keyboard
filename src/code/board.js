const board = (function makeKeyboard(textField) {
  /* const enAllButtons = [
    [
      {
        keyEn: '`',
        shiftEn: '~',
        code: 'Backquote',
      },
      {
        keyEn: '1',
        shiftEn: '!',
        code: 'Digit1',
      },
      {
        keyEn: '2',
        shiftEn: '@',
        code: 'Digit2',
      },
      {
        keyEn: '3',
        shiftEn: '#',
        code: 'Digit3',
      },
      {
        keyEn: '4',
        shiftEn: '$',
        code: 'Digit4',
      },
      {
        keyEn: '5',
        shiftEn: '%',
        code: 'Digit5',
      },
      {
        keyEn: '6',
        shiftEn: '^',
        code: 'Digit6',
      },
      {
        keyEn: '7',
        shiftEn: '&',
        code: 'Digit7',
      },
      {
        keyEn: '8',
        shiftEn: '*',
        code: 'Digit8',
      },
      {
        keyEn: '9',
        shiftEn: '(',
        code: 'Digit9',
      },
      {
        keyEn: '0',
        shiftEn: ')',
        code: 'Digit0',
      },
      {
        keyEn: '-',
        shiftEn: '_',
        code: 'Minus',
      },
      {
        keyEn: '=',
        shiftEn: '+',
        code: 'Equal',
      },
      {
        keyEn: 'Backspace',
        code: 'Backspace',
      },
    ], [
      {
        keyEn: 'Tab',
        code: 'Tab',
      },
      {
        keyEn: 'q',
        shiftEn: 'Q',
        code: 'keyEnQ',
      },
      {
        keyEn: 'w',
        shiftEn: 'W',
        code: 'keyEnW',
      },
      {
        keyEn: 'e',
        shiftEn: 'E',
        code: 'keyEnE',
      },
      {
        keyEn: 'r',
        shiftEn: 'R',
        code: 'keyEnR',
      },
      {
        keyEn: 't',
        shiftEn: 'T',
        code: 'keyEnT',
      },
      {
        keyEn: 'y',
        shiftEn: 'Y',
        code: 'keyEnY',
      },
      {
        keyEn: 'u',
        shiftEn: 'U',
        code: 'keyEnU',
      },
      {
        keyEn: 'i',
        shiftEn: 'I',
        code: 'keyEnI',
      },
      {
        keyEn: 'o',
        shiftEn: 'O',
        code: 'keyEnO',
      },
      {
        keyEn: 'p',
        shiftEn: 'P',
        code: 'keyEnP',
      },
      {
        keyEn: '[',
        shiftEn: '{',
        code: 'BracketLeft',
      },
      {
        keyEn: ']',
        shiftEn: '}',
        code: 'BracketRight',
      },
      {
        keyEn: '\\',
        shiftEn: '|',
        code: 'Backslash',
      },
      {
        keyEn: 'Delete',
        code: 'Delete',
      },
    ], [
      {
        keyEn: 'CapsLock',
        code: 'CapsLock',
      },
      {
        keyEn: 'a',
        shiftEn: 'A',
        code: 'keyEnA',
      },
      {
        keyEn: 's',
        shiftEn: 'S',
        code: 'keyEnS',
      },
      {
        keyEn: 'd',
        shiftEn: 'D',
        code: 'keyEnD',
      },
      {
        keyEn: 'f',
        shiftEn: 'F',
        code: 'keyEnF',
      },
      {
        keyEn: 'g',
        shiftEn: 'G',
        code: 'keyEnG',
      },
      {
        keyEn: 'h',
        shiftEn: 'H',
        code: 'keyEnH',
      },
      {
        keyEn: 'j',
        shiftEn: 'J',
        code: 'keyEnJ',
      },
      {
        keyEn: 'k',
        shiftEn: 'K',
        code: 'keyEnK',
      },
      {
        keyEn: 'l',
        shiftEn: 'L',
        code: 'keyEnL',
      },
      {
        keyEn: ';',
        shiftEn: ':',
        code: 'Semicolon',
      },
      {
        keyEn: "'",
        shiftEn: '"',
        code: 'Quote',
      },
      {
        keyEn: 'Enter',
        code: 'Enter',
      },
    ], [
      {
        keyEn: 'Shift',
        code: 'ShiftLeft',
      },
      {
        keyEn: 'z',
        shiftEn: 'Z',
        code: 'keyEnZ',
      },
      {
        keyEn: 'x',
        shiftEn: 'X',
        code: 'keyEnX',
      },
      {
        keyEn: 'c',
        shiftEn: 'C',
        code: 'keyEnC',
      },
      {
        keyEn: 'v',
        shiftEn: 'V',
        code: 'keyEnV',
      },
      {
        keyEn: 'b',
        shiftEn: 'B',
        code: 'keyEnB',
      },
      {
        keyEn: 'n',
        shiftEn: 'N',
        code: 'keyEnN',
      },
      {
        keyEn: 'm',
        shiftEn: 'M',
        code: 'keyEnM',
      },
      {
        keyEn: ',',
        shiftEn: '<',
        code: 'Comma',
      },
      {
        keyEn: '.',
        shiftEn: '>',
        code: 'Period',
      },
      {
        keyEn: '/',
        shiftEn: '?',
        code: 'Slash',
      },
      {
        keyEn: 'ArrowUp',
        code: 'ArrowUp',
      },
      {
        keyEn: 'Shift',
        code: 'ShiftRight',
      },
    ], [
      {
        keyEn: 'Control',
        code: 'ControlLeft',
      },
      {
        keyEn: 'Meta',
        // change to MetaLeft
        code: 'MetaRight',
      },
      {
        keyEn: 'Alt',
        code: 'AltLeft',
      },
      {
        keyEn: ' ',
        code: 'Space',
      },
      {
        keyEn: 'Alt',
        code: 'AltRight',
      },
      {
        keyEn: 'ArrowLeft',
        code: 'ArrowLeft',
      },
      {
        keyEn: 'ArrowDown',
        code: 'ArrowDown',
      },
      {
        keyEn: 'ArrowRight',
        code: 'ArrowRight',
      },
      {
        keyEn: 'Control',
        code: 'ControlRight',
      },
    ]];
  const ruAllButtons = [
    [
      {
        keyRu: 'ё',
        shiftRu: 'Ё',
        code: 'Backquote',
      },
      {
        keyRu: '1',
        shiftRu: '!',
        code: 'Digit1',
      },
      {
        keyRu: '2',
        shiftRu: '"',
        code: 'Digit2',
      },
      {
        keyRu: '3',
        shiftRu: '№',
        code: 'Digit3',
      },
      {
        keyRu: '4',
        shiftRu: ';',
        code: 'Digit4',
      },
      {
        keyRu: '5',
        shiftRu: '%',
        code: 'Digit5',
      },
      {
        keyRu: '6',
        shiftRu: ':',
        code: 'Digit6',
      },
      {
        keyRu: '7',
        shiftRu: '?',
        code: 'Digit7',
      },
      {
        keyRu: '8',
        shiftRu: '*',
        code: 'Digit8',
      },
      {
        keyRu: '9',
        shiftRu: '(',
        code: 'Digit9',
      },
      {
        keyRu: '0',
        shiftRu: ')',
        code: 'Digit0',
      },
      {
        keyRu: '-',
        shiftRu: '_',
        code: 'Minus',
      },
      {
        keyRu: '=',
        shiftRu: '+',
        code: 'Equal',
      },
      {
        keyRu: 'Backspace',
        code: 'Backspace',
      },
    ], [
      {
        keyRu: 'Tab',
        code: 'Tab',
      },
      {
        keyRu: 'й',
        shiftRu: 'Й',
        code: 'keyRuQ',
      },
      {
        keyRu: 'ц',
        shiftRu: 'Ц',
        code: 'keyRuW',
      },
      {
        keyRu: 'у',
        shiftRu: 'У',
        code: 'keyRuE',
      },
      {
        keyRu: 'к',
        shiftRu: 'К',
        code: 'keyRuR',
      },
      {
        keyRu: 'е',
        shiftRu: 'Е',
        code: 'keyRuT',
      },
      {
        keyRu: 'н',
        shiftRu: 'Н',
        code: 'keyRuY',
      },
      {
        keyRu: 'г',
        shiftRu: 'Г',
        code: 'keyRuU',
      },
      {
        keyRu: 'ш',
        shiftRu: 'Ш',
        code: 'keyRuI',
      },
      {
        keyRu: 'щ',
        shiftRu: 'Щ',
        code: 'keyRuO',
      },
      {
        keyRu: 'з',
        shiftRu: 'З',
        code: 'keyRuP',
      },
      {
        keyRu: 'х',
        shiftRu: 'Х',
        code: 'BracketLeft',
      },
      {
        keyRu: 'ъ',
        shiftRu: 'Ъ',
        code: 'BracketRight',
      },
      {
        keyRu: '\\',
        shiftRu: '/',
        code: 'Backslash',
      },
      {
        keyRu: 'Delete',
        code: 'Delete',
      },
    ], [
      {
        keyRu: 'CapsLock',
        code: 'CapsLock',
      },
      {
        keyRu: 'ф',
        shiftRu: 'Ф',
        code: 'keyRuA',
      },
      {
        keyRu: 'ы',
        shiftRu: 'Ы',
        code: 'keyRuS',
      },
      {
        keyRu: 'в',
        shiftRu: 'В',
        code: 'keyRuD',
      },
      {
        keyRu: 'а',
        shiftRu: 'А',
        code: 'keyRuF',
      },
      {
        keyRu: 'п',
        shiftRu: 'П',
        code: 'keyRuG',
      },
      {
        keyRu: 'р',
        shiftRu: 'Р',
        code: 'keyRuH',
      },
      {
        keyRu: 'о',
        shiftRu: 'О',
        code: 'keyRuJ',
      },
      {
        keyRu: 'л',
        shiftRu: 'Л',
        code: 'keyRuK',
      },
      {
        keyRu: 'д',
        shiftRu: 'Д',
        code: 'keyRuL',
      },
      {
        keyRu: 'ж',
        shiftRu: 'Ж',
        code: 'Semicolon',
      },
      {
        keyRu: 'э',
        shiftRu: 'Э',
        code: 'Quote',
      },
      {
        keyRu: 'Enter',
        code: 'Enter',
      },
    ], [
      {
        keyRu: 'Shift',
        code: 'ShiftLeft',
      },
      {
        keyRu: 'я',
        shiftRu: 'Я',
        code: 'keyRuZ',
      },
      {
        keyRu: 'ч',
        shiftRu: 'Ч',
        code: 'keyRuX',
      },
      {
        keyRu: 'с',
        shiftRu: 'С',
        code: 'keyRuC',
      },
      {
        keyRu: 'м',
        shiftRu: 'М',
        code: 'keyRuV',
      },
      {
        keyRu: 'и',
        shiftRu: 'И',
        code: 'keyRuB',
      },
      {
        keyRu: 'т',
        shiftRu: 'Т',
        code: 'keyRuN',
      },
      {
        keyRu: 'ь',
        shiftRu: 'Ь',
        code: 'keyRuM',
      },
      {
        keyRu: 'б',
        shiftRu: 'Б',
        code: 'Comma',
      },
      {
        keyRu: 'ю',
        shiftRu: 'Ю',
        code: 'Period',
      },
      {
        keyRu: '.',
        shiftRu: ',',
        code: 'Slash',
      },
      {
        keyRu: 'ArrowUp',
        code: 'ArrowUp',
      },
      {
        keyRu: 'Shift',
        code: 'ShiftRight',
      },
    ], [
      {
        keyRu: 'Control',
        code: 'ControlLeft',
      },
      {
        keyRu: 'Meta',
        code: 'MetaRight',
      },
      {
        keyRu: 'Alt',
        code: 'AltLeft',
      },
      {
        keyRu: ' ',
        code: 'Space',
      },
      {
        keyRu: 'AltGraph',
        code: 'AltRight',
      },
      {
        keyRu: 'ArrowLeft',
        code: 'ArrowLeft',
      },
      {
        keyRu: 'ArrowDown',
        code: 'ArrowDown',
      },
      {
        keyRu: 'ArrowRight',
        code: 'ArrowRight',
      },
      {
        keyRu: 'Control',
        code: 'ControlRight',
      },
    ]];

  function makeWholeObject() {
    const mainArray = [];
    enAllButtons.forEach((row, i) => {
      const rowArray = [];
      row.forEach((elem, x) => {
        rowArray.push({ ...elem, ...ruAllButtons[i][x] });
      });
      mainArray.push(rowArray);
    });
    return mainArray;
  } */

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
        code: 'keyRuQ',
        keyRu: 'й',
        shiftRu: 'Й',
      },
      {
        keyEn: 'w',
        shiftEn: 'W',
        code: 'keyRuW',
        keyRu: 'ц',
        shiftRu: 'Ц',
      },
      {
        keyEn: 'e',
        shiftEn: 'E',
        code: 'keyRuE',
        keyRu: 'у',
        shiftRu: 'У',
      },
      {
        keyEn: 'r',
        shiftEn: 'R',
        code: 'keyRuR',
        keyRu: 'к',
        shiftRu: 'К',
      },
      {
        keyEn: 't',
        shiftEn: 'T',
        code: 'keyRuT',
        keyRu: 'е',
        shiftRu: 'Е',
      },
      {
        keyEn: 'y',
        shiftEn: 'Y',
        code: 'keyRuY',
        keyRu: 'н',
        shiftRu: 'Н',
      },
      {
        keyEn: 'u',
        shiftEn: 'U',
        code: 'keyRuU',
        keyRu: 'г',
        shiftRu: 'Г',
      },
      {
        keyEn: 'i',
        shiftEn: 'I',
        code: 'keyRuI',
        keyRu: 'ш',
        shiftRu: 'Ш',
      },
      {
        keyEn: 'o',
        shiftEn: 'O',
        code: 'keyRuO',
        keyRu: 'щ',
        shiftRu: 'Щ',
      },
      {
        keyEn: 'p',
        shiftEn: 'P',
        code: 'keyRuP',
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
        code: 'keyRuA',
        keyRu: 'ф',
        shiftRu: 'Ф',
      },
      {
        keyEn: 's',
        shiftEn: 'S',
        code: 'keyRuS',
        keyRu: 'ы',
        shiftRu: 'Ы',
      },
      {
        keyEn: 'd',
        shiftEn: 'D',
        code: 'keyRuD',
        keyRu: 'в',
        shiftRu: 'В',
      },
      {
        keyEn: 'f',
        shiftEn: 'F',
        code: 'keyRuF',
        keyRu: 'а',
        shiftRu: 'А',
      },
      {
        keyEn: 'g',
        shiftEn: 'G',
        code: 'keyRuG',
        keyRu: 'п',
        shiftRu: 'П',
      },
      {
        keyEn: 'h',
        shiftEn: 'H',
        code: 'keyRuH',
        keyRu: 'р',
        shiftRu: 'Р',
      },
      {
        keyEn: 'j',
        shiftEn: 'J',
        code: 'keyRuJ',
        keyRu: 'о',
        shiftRu: 'О',
      },
      {
        keyEn: 'k',
        shiftEn: 'K',
        code: 'keyRuK',
        keyRu: 'л',
        shiftRu: 'Л',
      },
      {
        keyEn: 'l',
        shiftEn: 'L',
        code: 'keyRuL',
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
        code: 'keyRuZ',
        keyRu: 'я',
        shiftRu: 'Я',
      },
      {
        keyEn: 'x',
        shiftEn: 'X',
        code: 'keyRuX',
        keyRu: 'ч',
        shiftRu: 'Ч',
      },
      {
        keyEn: 'c',
        shiftEn: 'C',
        code: 'keyRuC',
        keyRu: 'с',
        shiftRu: 'С',
      },
      {
        keyEn: 'v',
        shiftEn: 'V',
        code: 'keyRuV',
        keyRu: 'м',
        shiftRu: 'М',
      },
      {
        keyEn: 'b',
        shiftEn: 'B',
        code: 'keyRuB',
        keyRu: 'и',
        shiftRu: 'И',
      },
      {
        keyEn: 'n',
        shiftEn: 'N',
        code: 'keyRuN',
        keyRu: 'т',
        shiftRu: 'Т',
      },
      {
        keyEn: 'm',
        shiftEn: 'M',
        code: 'keyRuM',
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
  console.log(textField);

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
    arrayOfButtons.forEach((elem, i) => buttonsRow.append(makeButton(elem.keyEn, [rowIndex, i])));

    return buttonsRow;
  }

  function mouseClickOnBoard(e) {
    if (!e.target.classList.contains('board-button')) return;
    const textarea = document.querySelector('textarea');
    // textField(e.target.textContent);
    textarea.textContent += e.target.textContent;
  }

  function keyboardOnDown(e) {
    const buttons = document.querySelectorAll('.board-button');
    buttons.forEach((elem) => {
      if (elem.textContent === e.key) elem.classList.add('active');
    });
    console.log(e.key);
  }

  function keyboardOnUp(e) {
    const buttons = document.querySelectorAll('.board-button');
    buttons.forEach((elem) => {
      if (elem.textContent === e.key) elem.classList.remove('active');
    });
    console.log(e.key);
  }

  function makeVirtualKeyboard() {
    const mainBlock = document.createElement('div');
    mainBlock.classList.add('board');
    allButtons.forEach((buttonsRow, i) => {
      mainBlock.append(makeRowOfButtons(buttonsRow, i));
    });
    mainBlock.addEventListener('click', mouseClickOnBoard);
    document.addEventListener('keydown', keyboardOnDown);
    document.addEventListener('keyup', keyboardOnUp);

    return mainBlock;
  }

  return makeVirtualKeyboard();
});

export default board;
