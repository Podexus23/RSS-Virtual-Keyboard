const backColorizer = (function backy() {
  const backgroundBeauty = document.createElement('div');
  backgroundBeauty.classList.add('background-beauty');

  function createGrid(num) {
    const beautySizes = document.body.getBoundingClientRect();
    const horQuantity = beautySizes.width / num;
    const vertQuantity = beautySizes.height / horQuantity;

    for (let i = 0; i < num; i += 1) {
      for (let y = 0; y < Math.floor(vertQuantity); y += 1) {
        const bBlock = document.createElement('div');
        bBlock.classList.add('b-block');
        bBlock.style.width = `${horQuantity}px`;
        bBlock.style.height = `${horQuantity}px`;
        backgroundBeauty.append(bBlock);
      }
    }
  }
  createGrid(40);

  function colorRandomizer() {
    return Math.ceil(Math.random() * 255 - 1);
  }

  function changeColors(speed) {
    const blocks = backgroundBeauty.querySelectorAll('.b-block');

    setInterval(() => {
      const randomPixel = blocks[Math.ceil(Math.random() * blocks.length - 1)];
      randomPixel.style.background = `rgb(${colorRandomizer()},${colorRandomizer()},${colorRandomizer()})`;
      randomPixel.style.opacity += 0.1;
      if (parseFloat(randomPixel.style.opacity) > 0.6) randomPixel.style.opacity = 0.1;
    }, speed);
  }
  changeColors(100);

  return backgroundBeauty;
});

export default backColorizer;
