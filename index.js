const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".main-nav");
const body = document.querySelector("main");

// hamburger.addEventListener("click", () => {
//     alert('hell0')
//     alert(sidebar.classList)
//   sidebar.classList.toggle("opennow");
//   alert(sidebar.classList)

//   document.body.addEventListener("click", (event) => {
//   if (
//     sidebar.classList.contains("opennow") &&
//     event.target !== sidebar &&
//     event.target !== hamburger
//   ) {
//     sidebar.classList.remove("opennow");
//   }
// });

// });

// hamburger.addEventListener("click", ()=>{
//     sidebar.classList.toggle('opennow')
// })

document.body.addEventListener("click", (event) => {
  if (hamburger.contains(event.target)) {
    sidebar.classList.toggle("opennow");
  } else if (!sidebar.contains(event.target)) {
    sidebar.classList.remove("opennow");
  }
});
