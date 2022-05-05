const textArea = (function makeTextArea() {
  const mainArea = document.createElement('textarea');

  function addContent(text) {
    mainArea.textContent += text;
  }
  return { mainArea, addContent };
});

export default textArea;
