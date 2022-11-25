const panelss=document.querySelectorAll('.panel')
console.log(panelss)
panelss.forEach((panel)=> {
    panel.addEventListener('click',    ()=>{
        removeActiveClasses();
        panel.classList.add('active')
    })
});
function removeActiveClasses(){
    panelss.forEach(panel=>{
        panel.classList.remove('active')
    })
}