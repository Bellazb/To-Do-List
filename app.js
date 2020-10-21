const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

generateTemplate = todo => {

    const html = 
    ` <li class="list-group-item list-hover d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`;
    
    list.innerHTML += html;

}

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  console.log(todo);
  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }
});

//delete todos

list.addEventListener('click', e => {
   console.log(e);
   if(e.target.classList.contains('delete')){
       e.target.parentElement.remove();
   }
});

const filterTodos = (term) => {
  Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term)) //return new array which doesnt include apa yg user search
  .forEach((todo) => todo.classList.add('filtered'));
    // console.log(todo.textContent);
    // return true;
    //return true to keep every item (everything) in the array

  Array.from(list.children)
  .filter((todo) => todo.textContent.toLowerCase().includes(term)) //return new array which doesnt include apa yg user search
  .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup',()=>{
const term = search.value.trim().toLowerCase();
//  console.log(term);
filterTodos(term);
});


