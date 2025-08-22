{/* <li class="list-group-item">
  <btn class="complete"> complete simgesi  </btn>
  <p> todoInput</p>
  <btn class ="remove"> remove simgesi </btn>
</li>
 */}

const addBtn = document.querySelector(".btn");
const todoInput = document.querySelector(".form-control");

const addTask = () => {
  if(todoInput.value.trim() === ""){
    alert("Please enter something!!!");
  }else{
    renderTodoItem(todoInput.value);
  }
}

const toggleComplete = (event) =>{
  let li=event.currentTarget.parentElement;
  let toggledElement = li.querySelector("p");
  toggledElement.style.textDecoration = "line-through";
}

const deleteItem = (event)=>{
  let li=event.currentTarget.parentElement;
  li.parentNode.removeChild(li);
}

const renderTodoItem = (todoText) =>{
  const todoItem = document.createElement("li");
  todoItem.classList.add("list-group-item", "d-flex", "align-items-center", "justify-content-between");

  const completeButton = document.createElement("button");
  completeButton.classList.add("btn", "btn-success");
  completeButton.innerText = "Complete";
  completeButton.addEventListener("click",toggleComplete);
  todoItem.appendChild(completeButton);

  const textElement = document.createElement("p");
  textElement.classList.add("mb-0");
  textElement.innerText = todoText;
  todoItem.appendChild(textElement);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.innerText="Delete";
  deleteButton.addEventListener("click",deleteItem);
  todoItem.appendChild(deleteButton);

  const listGroup=document.querySelector(".list-group");
  listGroup.appendChild(todoItem);
  todoInput.value="";
  todoInput.focus();
}

addBtn.addEventListener("click",addTask)

