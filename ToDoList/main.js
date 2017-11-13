var mas = [];
var addtext = document.getElementById("button");

addtext.onclick = function()
  {
    var valueform = document.getElementById('form');
    var text = document.getElementById('form').value;
    if(text != "")
    {
        mas.push(text);
        newwork();
        valueform.value = "";
    }
    else
    {
      valueform.value = "Введите задание";
    }
  }

function newwork()
{
  var newstring = document.getElementById('newtext');
  var tempstr = "";
  mas.forEach(function(text, i)
  {
    tempstr += "<button class=delete onclick=deletework(" + i + ")><img class=image_delete src="+"images/delete.png"+"></button><span>" + text + "</span><br>";
  });
  newstring.innerHTML = tempstr;
}

function deletework(i)
{
  mas.splice(i, 1);
  newwork();
}
