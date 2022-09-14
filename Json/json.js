let currentColorIndex = 0;
document.body.style.backgrounColor = colorArray[currentColorIndex];

function changeColor() {
    //                      0       1     2       3         4         5
    const colorArray = ['white', 'blue', 'red', 'green', 'yellow', 'orange'];
    if (currentColorIndex === 5) {
      currentColorIndex = 0; // goes from index 5 to index 0, ie orange to white
    } else {
      currentColorIndex++
    }
    document.body.style.backgroundColor = colorArray[currentColorIndex];
}

/* multi color transitions....

function divChange()
{

    let divtag = document.getElementById("div1");
}
https://www.youtube.com/watch?v=KlYoXyRy8Rw&ab_channel=HarithaComputers%26Technology
*/

/*
const box1Element = document.getElementById('box1');
const box2Element = document.getElementById('box2');

box1Element.addEventListener('mouseover', () => {
    box2Element.style.backgroundColor = 'green';
});

box2Element.addEventListener('mouseover',) () => {
    box1Element.style.backgroundColor = 'red';
}
*/

fetch('example.json')  
.then((result) => result.json())  
.then((jsonResult) => console.log(jsonResult));