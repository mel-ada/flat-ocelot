//Each item should look like this:
//<li><input type="checkbox" /><span>Write this tutorial</span></li>

function addItem(){
    var item = document.forms["checkListForm"]["checkListItem"].value;
    var items = ["Grocery", "Laundry", "Call Mom", "Learner's Guild Meeting"];
    items.push(item);
    for(i = 0; i < items.length; i++){
        document.write(items[i] + "<br >");
    }
}
