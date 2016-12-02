//Each item should look like this:
//<li><input type="checkbox" /><span>Write this tutorial</span></li>

function addItem(){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.forms["checkListForm"]["checkListItem"].value);

    node.appendChild(textnode);
    //add checkbox to append statement
    document.getElementById("todoList").appendChild(node);
}

function removeItem(){
  var list = document.getElementById("todoList")
  items = Array.prototype.slice.call(list.childNodes), item;
  while(item = items.pop()){
    if(item.firstChild && item.firstChild.checked){
      list.removeChild(item);
    }
  }
}
