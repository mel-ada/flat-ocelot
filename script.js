//Each item should look like this:
//<li><input type="checkbox" /><span>Write this tutorial</span></li>

function addItem(){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.forms["checkListForm"]["checkListItem"].value);
    node.appendChild(textnode);
    document.getElementById("todoList").appendChild(node);
}
