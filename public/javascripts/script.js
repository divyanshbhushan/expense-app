const colorModeChangerFunc = () => {
  const colorModeChangerBtn = document.querySelector('#colorModeChangerBtn')
  const html = document.querySelector('html')
  colorModeChangerBtn.addEventListener('click', ()=>{
    html.classList.toggle('dark')
  })
}

colorModeChangerFunc()