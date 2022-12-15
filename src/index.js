document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addToDo();

});
function addToDo() {
  let inputName = document.getElementById('user');
  const inputToDo = document.getElementById('new-task-description');
   let inputDate = document.getElementById('dueDate');
  const form = document.getElementById('create-task-form');
  const submit = form.lastElementChild;
  const ul = document.getElementById('tasks');
  submit.addEventListener('click', function (event) {
    event.preventDefault(); 
    // input name
    let inputNameValue = inputName.value;
  if (inputNameValue === '') {
  inputName.classList = 'inputSomething';
    console.log(inputName.classList);
  }
  else {
  let nameHolder = document.querySelector('#list h2 span');
    nameHolder.textContent = inputNameValue;
    inputName.parentElement.remove();
}
    // input to do list
    let inputValue =inputToDo.value;
    console.log(inputValue);
    if (inputValue === "") {
      inputToDo.classList = 'inputSomething';
      console.log(inputToDo.classList)
      form.reset();
    } else {
      let li = document.createElement('li');
      li.style.listStyle = "none";
      li.textContent = `${inputValue} `;
      ul.append(li);
      let btnX = document.createElement('button');
      btnX.textContent = "x";
      li.appendChild(btnX);
      inputToDo.classList.remove('inputSomething');
      form.reset();

      btnX.addEventListener('click', (event) => {
        event.preventDefault();
        btnX.parentElement.remove();
      });
    }

    });

}

