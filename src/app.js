const inputVal = document.getElementsByClassName('inputVal')[0];

const addTaskBtn = document.getElementById('addBtn');

const clearBtn=document.getElementById('clearBtn');
const dateP=document.getElementById('date');

let today = new Date().toISOString().slice(0, 10)


dateP.innerHTML=today;
clearBtn.addEventListener('click',()=>{
    clearTask();
})

addTaskBtn.addEventListener('click', function (){
  
if(inputVal.value.trim()!=0){
       let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = []

    }else{
        taskList = localItems;
    }
    taskList.push(inputVal.value)
    localStorage.setItem('localItem', JSON.stringify(taskList)); 
}

    showItem()
})

function showItem(){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = []

    }else{
        taskList = localItems;
    }


let html = '';
let itemShow = document.querySelector('.todoLists');
taskList.forEach((data, index )=> {
    

    html += `
    <div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">Remove</button>
    </div>
    `
})
itemShow.innerHTML = html;
}
showItem()

function deleteItem(index){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask(){
    
localStorage.clear()
showItem()
}