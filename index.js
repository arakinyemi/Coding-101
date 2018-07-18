// console.log(null);
var guessednumber=0;
var tries=0;

var playgame = function(){
tries=tries + 1;
guessednumber= document.getElementById("number").value;
console.log(guessednumber);
var generatednumber=Math.floor(Math.random() * (10 - 1  + 1)) + 1;
console.log(generatednumber);
if(guessednumber == generatednumber){
      document.getElementById("win").textContent='You win, Congratulations';
      document.getElementById("lose").textContent='';
   }
   else{
       
      document.getElementById("win").textContent='';
       document.getElementById("lose").textContent='Sorry,you lost try again'
   }
         document.getElementById("tries").textContent=tries;

}

 