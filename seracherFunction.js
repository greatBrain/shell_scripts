
//Funcion realizar busquedas dentro de la pagina:
document.addEventListener("keyup", e=>{

    if (e.target.matches("#searcher")) //Barra de busqueda
    {
        if (e.key==="Escape")e.target.value = ""
        document.querySelectorAll(".glide__slide").forEach(video =>{
            video.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?video.classList.remove("video_filter")
            :video.classList.add("video_filter")
        })
    }
})