// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
    
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
      
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${'Mashed potatoes are ready!'}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));






// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2);
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3);
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4);
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5);
  })      
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6);
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7);
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>${'Stake is ready!'}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction('steak', 8);
  })
  .catch((error) => console.log(error));
  




// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let step1 = await obtainInstruction('broccoli', 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    console.log(step1);
    let step2 = await obtainInstruction('broccoli', 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    console.log(step2);
    let step3 = await obtainInstruction('broccoli', 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    console.log(step3);
    let step4 = await obtainInstruction('broccoli', 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    console.log(step4);
    let step5 = await obtainInstruction('broccoli', 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    console.log(step5);
    let step6 = await obtainInstruction('broccoli', 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    console.log(step6);
    let step7 = await obtainInstruction('broccoli', 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${'Broccoli is ready!'}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
    console.log(step7);
  } catch(error){
    console.log(error);
  }
}
makeBroccoli();


// Bonus 2 - Promise all
let pr1 = obtainInstruction('brusselsSprouts', 0);
let pr2 = obtainInstruction('brusselsSprouts', 1);
let pr3 = obtainInstruction('brusselsSprouts', 2);
let pr4 = obtainInstruction('brusselsSprouts', 3);
let pr5 = obtainInstruction('brusselsSprouts', 4);
let pr6 = obtainInstruction('brusselsSprouts', 5);
let pr7 = obtainInstruction('brusselsSprouts', 6);
let pr8 = obtainInstruction('brusselsSprouts', 7);
Promise.all( [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8] )
.then( (step0) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`
  return obtainInstruction('brusselsSprouts', 1);
})
.then( (step1) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`
  return obtainInstruction('brusselsSprouts', 2);
})
.then( (step2) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`
  return obtainInstruction('brusselsSprouts', 3);
})
.then( (step3) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`
  return obtainInstruction('brusselsSprouts', 4);
})
.then( (step4) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`
  return obtainInstruction('brusselsSprouts', 5);
})      
.then( (step5) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`
  return obtainInstruction('brusselsSprouts', 6);
})
.then( (step6) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`
  return obtainInstruction('brusselsSprouts', 7);
})
.then( (step7) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${'Brussels sprouts are ready!'}</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  return obtainInstruction('brusselsSprouts', 8);
})
.catch((error) => console.log(error));