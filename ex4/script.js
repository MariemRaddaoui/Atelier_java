const myItems = document.getElementsByTagName('li');


const test = (a) => {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log("item number " + a + " color: " + randomColor);
    myItems[a - 1].style.color = randomColor;

}