//console.log('Hello World from an external javacscript file');
//console.log('i am Teraivao')

/*console.log("i like to code");
console.log("i like to cook");*/

//const username = "teraivao"
//onsole.log("user:" + username);

/*const userName = "Sebin Benjamin";
console.log("The value in the variable userName is ");
console.log(userName);*/ 

/*const favColor = "Blue";
console.log(favColor);
favColor = "Green";
*/
/*
function myFirstFunction() {
    console.log('first function');
}
        myFirstfunction();
*/
/*
document.body.innerHTML='<h1> "Hello </h1>';
document.body.style.backgroundColor ='blue';
*/

/*function to be called on button being clicked */
/*
function changeColor() {  
    if (document.body.style.backgroundColor === 'blue') 
    {    document.body.style.backgroundColor = 'white';  
} 
    else {    document.body.style.backgroundColor = 'blue';  
}
}
*/


/*let currentColorIndex = 0;
document.body.style.backgrounColor = colorArray[currentColorIndex];

// Function to be called on button being clicked
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
*/

// Stores the element found by getElementById in a variable
//const helloWorldHeaderElement = document.getElementById('helloWorldHeader');
/*const helloWorldHeaderElement = document.querySelector('#helloWorldHeader');

helloWorldHeaderElement.style.fontSize = '50px';
helloWorldHeaderElement.style.fontFamily = 'Arial';
helloWorldHeaderElement.textContent = 'New Text set from JavaScript';
    */
   
let count = 0;

function addCount() {  
    count++;  
    const counterElement = document.querySelector('h1');  
    counterElement.innerText = 'Counter : ' + count;
}
