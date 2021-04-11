let toDolists = [];
let userData;
const inputBox = document.querySelector(".inputField input");
const addButton = document.querySelector(".inputField button");
const htmlToDoList = document.querySelector(".todoList");
const totalTasks = document.querySelector(".footer .totalRecords");

checkExsiting();

inputBox.onkeyup = () => {
    userData = inputBox.value.trim();
}

function addDataToList() {
    if (userData.length != 0) {
        toDolists.push(userData);
        console.log(toDolists);
        inputBox.value = "";
        setItem();
    }
    showList();
}

function showList() {
    htmlToDoList.innerHTML = "";
    toDoLists = getItem();
    toDolists.forEach((value, index) => {
        htmlToDoList.innerHTML += `<li>${value}<span><i onclick="removeItem(${index})" class="fas fa-trash"></i></span></li>`
    });
    totalTasks.textContent = toDolists.length; 
}
function checkExsiting() {
    let oldRecord = getItem();
    if(oldRecord.length > 0) {
        toDolists = oldRecord;
        showList();
    }
 }
 function removeItem(index) {
     toDolists.splice(index, 1);
     setItem();
     showList();
 }

 function setItem() {
    localStorage.setItem("allList", JSON.stringify(toDolists));
 }

 function getItem() {
    return JSON.parse(localStorage.getItem("allList"));
 }

 function removeAllItem() {
     toDolists = [];
     setItem();
     showList();
 }