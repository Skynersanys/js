var index = 0;
var addButton = document.getElementById("addButtonId");
var input = document.getElementById("inputId");
var todoList = document.getElementById("todoListId");

addButton.onclick = function()
{
var text = input.value;
if(text != "")
  {
    var string = document.createTextNode(text);
    var li = document.createElement("li");
    var removeButton = document.createElement("button");

    removeButton.setAttribute("id", "removeButton");
    li.setAttribute("id", index);
    li.appendChild(string);
    li.appendChild(removeButton);
    todoList.appendChild(li);
    remove(index, removeButton);
    index ++;
    input.value = "";
  }
else
  {
    alert("Введите задание")
  }
}

function remove(index, removeButton)
{
  removeButton.onclick = function()
  {
    var idString = document.getElementById(index);
    todoList.removeChild(idString);
  }
}
