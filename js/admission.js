let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
   let startValue = 0;
   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
   // console.log(endValue);
   // let duration = Math.floor(interval / endValue);
   let counter = setInterval( ()=> {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
        clearInterval(counter);
   }
   }, 10);
});
// const counters = document.querySelectorAll('.num');

// counters.forEach((num)=> {
//     num.innerText='0';

//     const updateConter = () =>{
//         const target = +num.getAttribute('data-val');
//         const c = +num.innerText;

//         const increment = target / 500;
//         // console.log(increment);
//         // console.log(typeof target, target);
//         if(c < target){
//             num.innerText='${Math.ceil(c + increment)}';
//             setTimeout(updateConter, 1);
//         }
//     };
//     updateConter();
// });