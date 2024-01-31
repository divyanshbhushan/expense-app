
const inputAnimation = ()=>{const inputAnimArr = document.querySelectorAll('.input-anim')
inputAnimArr.forEach((e)=>{
    const inputBar = document.querySelectorAll('input')
    const toStyle = `font-size: 0.75rem; top: -.5rem; line-height: 1rem;`
    const fromStyle = `top: .5rem; font-size: 1rem; line-height: 1.5rem;`
    inputBar.forEach((f)=>{
        if(f.value === ""){
            e.style = fromStyle
            setInterval(() => {
                if(f.value !== ""){
                    e.style = toStyle
                }
                else{
                    e.style = fromStyle
                }
            }, 1);
        }
    })
})}
inputAnimation()