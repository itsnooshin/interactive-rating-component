'use strict';

const btnLabel = document.querySelector('.btn-sub');
const numSpan = document.querySelector('.num');
const rating = document.querySelectorAll('.but-main');
const leadRrate =document.querySelector('.lead-rate')
const title = document.querySelector('.title-content');
const mainContainer = document.querySelector('.container');
const thankContainer = document.querySelector('.rate-container');
const rateText = document.querySelector('.rate-text');
const Text = document.querySelector('.lead');
const rateAgain = document.getElementById('rate-again');






//function
for (let i = 0; i < rating.length;  i++) {
  rating[i].addEventListener('click',function(){
 
      const numbers = rating[i].textContent;

      // when we select one elemnt but not selected prev element
      for(let i =0; i < rating.length; i++){
        rating[i].classList.contains('selected')
        rating[i].classList.remove('selected');
      }
      rating[i].classList.add('selected');

      // change the text of span
        rateText.textContent = `You selected ${numbers} out of 5`;
         btnLabel.addEventListener('click' , function(){
           mainContainer.classList.add('hidden');
           thankContainer.classList.remove('hidden');
         });  
   })
  
}

//rateAgain button

rateAgain.addEventListener('click', function(){
  thankContainer.classList.add('hidden');
  mainContainer.classList.remove('hidden');
   
  for(let i =0; i < rating.length; i++){
    rating[i].classList.contains('selected')
    rating[i].classList.remove('selected');
  }
  rating[i].classList.add('selected');
})
