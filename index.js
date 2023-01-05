'use strict';
// btn
const btnLabel = document.querySelector('.btn-sub');
const numSpan = document.querySelector('.num');

const leadRrate =document.querySelector('.lead-rate')

//conatiner
const mainContainer = document.querySelector('.container');
const rateContainer = document.querySelector('.rate-container');
const element = document.getElementsByClassName('but-main');
const el = document.querySelectorAll('.but-main');
const rateText = document.querySelector('.rate-text');

//el


let prevDiv = null
for (let i = 0; i < element.length;  i++) {
   element[i].addEventListener('click',function(e){
     var target = e.currentTarget;
      const numbers = element[i].textContent;
       if(numbers){
        element[i].style.color ='#fff';
    
        rateText.textContent = `You selected ${numbers} out of 5`;
         btnLabel.addEventListener('click' , function(){
           mainContainer.classList.add('hidden');
           rateContainer.classList.remove('hidden');
         });
       }
     
      
       if(prevDiv){
         prevDiv.style.backgroundColor = "#2C353F";
         prevDiv.style.color = "hsl(217 , 12% , 63%)";
         target.style.backgroundColor = "hsl(25, 97%, 53%)";
        
         prevDiv = target;
       } else{
        {
          target.style.backgroundColor = "hsl(25, 97%, 53%)";
          prevDiv = target;
         
        }
       }
      
   })
  
}



