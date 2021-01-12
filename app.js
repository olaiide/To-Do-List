const list = document.querySelector('.lists');
const form = document.querySelector('.--form')
const input = document.querySelector('.input')
const deleteLink = document.querySelector('.delete');
let todos = JSON.parse(localStorage.getItem('.lists'))
if(todos){
 todos.forEach(todo => addToDo(todo));
}

form.addEventListener('submit', function(e){
e.preventDefault()
addToDo()
updateLS(todos);
});
//add tasks function
   function addToDo(e){
   const li = document.createElement('li');
   const deleteId  = document.createElement('span');
   deleteId.className = 'delete';
   deleteId.appendChild(document.createTextNode('x'))
   li.className = 'items';
   li.appendChild(document.createTextNode(input.value));
   list.appendChild(li).appendChild(deleteId);
   input.value = " ";
   updateLS()
   
}
//remove items function
function removeItems(e){
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement;
        list.removeChild(li);
    }
}
//remove item
list.addEventListener('click', removeItems);

//to check if a task has been completed
list.addEventListener('click', function(e){
    if(e.target.className === 'items'){
        e.target.classList.toggle('completed');
    }
    updateLS();
  });
//local storage
function updateLS(){
    todosEl = document.querySelectorAll('li');
    const todos = [];
    todosEl.forEach(todoEl =>{
        todos.push({
            text : todoEl.innerText,
            completed : todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('tasks', JSON.stringify(todos));
}

