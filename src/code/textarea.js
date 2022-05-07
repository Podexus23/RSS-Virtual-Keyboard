const textArea = (function makeTextArea() {
  const mainArea = document.createElement('textarea');

  mainArea.addEventListener('focusout', () => {
    mainArea.focus();
  });

  return { mainArea };
});

export default textArea;
