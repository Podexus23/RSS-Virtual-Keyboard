const infoBlock = (function create() {
  const block = document.createElement('div');
  block.classList.add('info');

  function createLangButtons() {
    const langs = `
    <div class="eng-button info-button">Eng</div>
    <div class="rus-button info-button">Rus</div>
  `;
    return langs;
  }

  function addSides() {
    const sides = ['left', 'mid', 'right'];
    const howToChange = document.createElement('p');
    const workingOS = document.createElement('p');
    const madeBy = document.createElement('p');
    howToChange.innerHTML = 'To change language press Ctrl Left + Alt Left';
    workingOS.innerHTML = 'Keyboard made for Windows OS';
    madeBy.innerHTML = 'Made by <a class="link" href=\'https://github.com/Podexus23?tab=repositories\' target="_blank">Podexus23</a>';

    sides.forEach((side) => {
      const sideBlock = document.createElement('div');
      sideBlock.classList.add(`info-${side}`);
      block.append(sideBlock);
    });

    block.querySelector('.info-mid').append(madeBy);
    block.querySelector('.info-right').append(howToChange);
    block.querySelector('.info-right').append(workingOS);
  }
  addSides();

  block.append();
  block.querySelector('.info-left').innerHTML = createLangButtons();

  return block;
});

export default infoBlock;
