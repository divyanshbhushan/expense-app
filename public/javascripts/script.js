

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