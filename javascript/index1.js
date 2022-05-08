var vida=6;
const td=document.querySelectorAll("td");
const table=document.querySelectorAll(".table");
td.forEach( td_select =>{
    td_select.addEventListener("click",()=>{
        var id=td_select.getAttribute("id");
        var img=document.getElementById("img"+id);
        img.classList.add("select")
        img.style.display="flex";
        valiadarImg();
        mesajeDeGanar();
    });
});
function valiadarImg(){
    const imgs=document.querySelectorAll(".select");
    
    if(imgs.length>=2){
        if(imgs[0].getAttribute("src")==imgs[1].getAttribute("src")){
            imgs[0].classList.remove("select");
            imgs[0].classList.add("second_class");
            imgs[1].classList.remove("select");
            imgs[1].classList.add("second_class");
        }
        else if(vida==0){
            const mesaje_perdio=document.querySelector(".mesaje_perdio");
            mesaje_perdio.style.display="block";
            const td_table=document.querySelectorAll("td");
            td_table.forEach(function(valor) {
                valor.classList.add("td_table")
            });
            
           

        }
        else{
            setTimeout(()=>{
                alert(`No son iguales. Le quedan: ${vida--} vida!!`);
                imgs[0].classList.remove("select");
                imgs[0].style.display="none";
                imgs[1].classList.remove("select");
                imgs[1].style.display="none";},10)            
        }
    }
}
function mesajeDeGanar(){
    const second_class=document.querySelectorAll(".second_class");
    if(second_class.length==12){
        const mesaje_ganado=document.querySelector(".mesaje_ganado");
        mesaje_ganado.style.display="block";
        const td_table=document.querySelectorAll("td");
            td_table.forEach(function(valor) {
                valor.classList.add("td_table")
            });
    }
}

function reiniciar(){
    location.reload();
}