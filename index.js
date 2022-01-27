let num = 0;
const numEl = document.querySelector(".num-el");
const saveEl = document.querySelector(".save-el");
const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");
const saveBtn = document.querySelector("#save-btn");
const resetBtn = document.querySelector("#reset-btn");
///  increment button
incrementBtn.addEventListener("click",function(){
    num++
    numEl.innerHTML=num;
})
///  decrement button
decrementBtn.addEventListener("click",function(){
    num--
    numEl.innerHTML=num;
})
///  save button
saveBtn.addEventListener("click",function(){
   numEl.innerHTML = 0;
   saveEl.innerHTML += "-"+ "" + num;
    num =  0;

})
///  reset button
resetBtn.addEventListener("dblclick",function(){
   num = 0;
   numEl.innerHTML = 0;
   saveEl.innerHTML = "Previous entires:"
})