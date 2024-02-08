const colorModeChangerFunc = () => {
  const colorModeChangerBtn = document.querySelector("#colorModeChangerBtn");
  const htmlElement = document.querySelector("html");
  const colorMode = localStorage.getItem("colorMode");
  if(colorMode){
    htmlElement.classList.add("dark");
  }
  colorModeChangerBtn.addEventListener("click", () => {
    if(htmlElement.classList.contains('dark')){
      htmlElement.classList.remove("dark");
      localStorage.removeItem("colorMode");
    } else{
      htmlElement.classList.add("dark");
      localStorage.setItem("colorMode", "dark");
    }
  });
};
colorModeChangerFunc();

const addNewExpense = () => {
  const addNewExpenseContainer = document.querySelector("#addNewExpenseContainer");
  const addNewExpenseTogglers = document.querySelectorAll(".addNewExpenseToggler");
  addNewExpenseTogglers.forEach((addNewExpenseToggler)=>{
    addNewExpenseToggler.addEventListener("click", () => {
      if(addNewExpenseContainer.style.scale === "1"){
        addNewExpenseContainer.style.scale = 0;
        addNewExpenseTogglers[0].style.display = "block";
      } else{
        addNewExpenseContainer.classList.remove('scale-[0]')
        addNewExpenseContainer.style.scale = 1;
        addNewExpenseTogglers[0].style.display = "none";
      }
    })
  })
};
addNewExpense();