const colorModeChangerFunc = () => {
  const colorModeChangerBtn = document.querySelector('#colorModeChangerBtn')
  const html = document.querySelector('html')
  colorModeChangerBtn.addEventListener('click', ()=>{
    html.classList.toggle('dark')
  })
};
colorModeChangerFunc();

const addNewExpense = () => {
  const addNewExpenseContainer = document.querySelector('#addNewExpenseContainer');
  const addNewExpenseToggler = document.querySelector('#addNewExpenseToggler');
  addNewExpenseToggler.addEventListener('click', ()=>{
    addNewExpenseContainer.style.top = '8rem'
  });
};
addNewExpense();