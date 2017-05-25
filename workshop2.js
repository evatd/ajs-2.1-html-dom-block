//Option one: linear
var header = document.getElementById('header'),
    htmlOutput, //This will be a string, added later. But add here too.
    htmlArray = [];

htmlArray.push('<ul>');
htmlArray.push('<li>This is a first item</li>'); //list the items
htmlArray.push('<li>This is a second item</li>');
htmlArray.push('<li>And a third one</li>');
htmlArray.push('</ul>');

//Join the elements as string
htmlOutput = htmlArray.join("");

//Add the new HTML
header.insertAdjacentHTML('afterend', htmlOutput);


//Option two: array
var header = document.getElementById('header'),
    htmlString,
    htmlArray = [],
    items = [
        'This is a first item',
        'This is a second item',
        'And one more'
    ],
    numItems = items.length,
    i;

//Code below is reusable
//All we have to do is change the values stored in the array above
//Create ul first
htmlArray.push('<ul>');

//Create each li element and append it to the ul
for (i = 0; i<numItems, i++){
    htmlArray.push('<li>');
    htmlArray.push(items[i]); //not a string, no need for ''
    htmlArray.push('<li>')
}

htmlArray.push('</ul>');

//Join the element to make a string
htmlString = htmlArray.join("");

//Insert the new HTML
header.insertAdjacentHTML("afterend", htmlString);

