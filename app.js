const animacion = document.querySelectorAll('.animacion');
const mostrarScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < animacion.length; i++) {
        let alturaAnimacion = animacion[i].offsetTop;
        // console.log(window.innerHeight);
        console.log(alturaAnimacion);
        if (alturaAnimacion - (window.innerHeight - 150) < scrollTop && animacion[i].style.opacity == 0) {
            animacion[i].style.opacity = 1; //hace aparecer el elemento
            animacion[i].classList.add('mostrarLeft'); //aparece desde x e y


        }
    }
}
window.addEventListener('scroll', mostrarScroll)