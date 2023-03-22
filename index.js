const validate = document.getElementById('validate');
const output = document.getElementById('output');
const clear = document.getElementById('clear');

function validateJSON() {
  try {
    const json = JSON.parse(editor.getValue());
    const formattedJson = JSON.stringify(json, null, 2);
    editor.setValue(formattedJson);
    output.innerText = 'JSON is valid!';
    output.className = 'success';
  } catch (error) {
    output.innerText = error.message;
    output.className = 'error';
    input.className = 'error';
  }
}

validate.addEventListener('click', validateJSON);

function clearInput() {
  editor.setValue('');
  editor.clearHistory();
  output.innerText = '';
}

clear.addEventListener('click', clearInput);

let editor = CodeMirror.fromTextArea(document.getElementById("input"), {
  mode: "json",
  lineNumbers: true,
  theme: "dracula"
});