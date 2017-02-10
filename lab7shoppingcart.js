var myGrocery = [{
        item: "Apples",
        price: 4
    },
    {
        item: "Bananas",
        price: 2
    },
    {
        item: "Bread",
        price: 3
    },
    {
        item: "Milk",
        price: 6
    }
];

var total = 0;

var Paper = document.createElement("div");
Paper.id = "receiptContainer";
document.body.appendChild(Paper);
var receiptContent = document.getElementById('receiptContainer');

var shoppingList = document.createElement("ul");
receiptContainer.appendChild(shoppingList);



myGrocery.forEach(function(item) {
    console.log(item.item + ' ' + item.price);
    total += item.price;
    var itemName = document.createElement("h1");
    itemName.textContent = item.item;
    document.body.appendChild(itemName);
    itemName.className = "nameSpan";

    var itemPrice = document.createElement("span");
    itemPrice.textContent = "$" + item.price;
    document.body.appendChild(itemPrice);
    itemPrice.className = "priceSpan";

});

var displayTotal = document.createElement("h2");
displayTotal.textContent = "The final amount is $" + total;
receiptContainer.appendChild(displayTotal);

console.log("The final amount is $" + total);


//trying to add functionality into this. My head is so stuffed up I can't think. will retry again in few hours
//still stuck. trying not to panic. lol. I can funcion.i think. therefore i can do this?
/*    var ADD = document.createElement ("h3");
    document.body.appendChild(Additem);

    var AddPrice = document.createElement;
    displayTotal





console.log("The final amount is $" + total);
