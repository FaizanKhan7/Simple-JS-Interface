// simple interface

// DOM Manipulation

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);


// Delete event
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);


function addItem(e) {
    e.preventDefault();

    //Get input value 
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class name
    li.className = 'list-group-item';
    // console.log(li);
    // Add textNode with input value
    li.appendChild(document.createTextNode(newItem));

    // Create trash element
    var trash = document.createElement('button');

    // Add classes to trash
    trash.className = 'delete btn-danger';

    // add another element in trash
    var bin = document.createElement('i');

    // add classes to i
    bin.className = 'fas fa-trash-alt';


    //Append i to trash
    trash.appendChild(bin);

    // Append trash to list
    li.appendChild(trash);

    // append li to list
    itemList.appendChild(li);
}


// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
        // console.log(1);
    }
    // console.log(1);
}


// Filter Items

function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    var items = itemList.getElementsByTagName('li');
    // console.log(items); 
    // we need to convert the html collection to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })

}