
function addNewE()
{
    var listTodo = document.createElement("a")
    listTodo.id= 'to-do';
    listTodo.textContent='TODO list';
    document.body.appendChild(listTodo);
}