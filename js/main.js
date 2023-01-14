console.log('JavaScript is Running');
/* longer JS block comment 
-conset is a type of variable - abit of memory that can hould a value 
Js uses (can sue ) ANY vaild css selector  to make a connection to ANY
element on the page - it works the same way as CSS selector do , because 
It's USING css selectors to find macthing elements

the document is the DOM - the web page and all of this elements querySelector is the method (funtion) that makes the connection between JS and the DOM (the elements)
*/
// 1. this is for make a connecction with bitmap
const jpgGraphic = document.querySelector('#bitmap'); 
const svgGraohic = document.querySelector('#vector');


function logID () { //logid is a name for yourself
    console.log('clicked on this element',this.id);

}
// 2. decide how you want to the user interact with the object you created in step 1
jpgGraphic.addEventListener('click',logID); 
svgGraohic.addEventListener('click',logID);


