const rootNode = document.getElementById('root');

const btn = document.getElementById('addBtn');
const field = document.getElementById('actionField');
let items = 0;
const maxItems = 10;

btn.disabled = true;

field.addEventListener('keyup', e => {
  const value = e.target.value;

  if (!value) {
    btn.disabled = true;
  } else if(btn.disabled) {
    btn.disabled = false;
  }
});

btn.addEventListener('click', () => {
  addItem();
  field.value = '';
  btn.disabled = true;
});

const addItem = () => {
  if (items >= maxItems) {
    return;
  }

  const label = `<label for="checkbox-${items}" id="label-${items}">${field.value}</label>`;

  const row = `
    <fieldset id="fieldset-${items}">
      <input id="checkbox-${items}" type="checkbox"/>
      ${label}
      <button type="button" id="edit-btn-${items}"><i class="material-icons">create</i></button>
    </fieldset>`;

  const todoList = document.getElementById('todoList');
  todoList.insertAdjacentHTML('beforeend', row); // добавляет тег fieldset

  const appendedFieldset = document.getElementById(`fieldset-${items}`);
  const appendedCheckbox = document.getElementById(`checkbox-${items}`);
  const appendedEditBtn = document.getElementById(`edit-btn-${items}`);
  const appendedLabel = document.getElementById(`label-${items}`);

  appendedCheckbox.addEventListener('click', (e) => {
    if (!appendedCheckbox.checked) {
      e.preventDefault();
    }
  });

  appendedEditBtn.addEventListener('click', () => {
    console.log('cloiock')
    console.log(appendedLabel);

      const input = `<input type="text" value="${appendedLabel.text}" />`;
      appendedFieldset.removeChild(appendedLabel);
      appendedFieldset.insertAdjacentHTML('beforeend', input);
  });


  items++;
}
