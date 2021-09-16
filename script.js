let resumo = document.getElementsByClassName('resumo')[0]
let previa = document.getElementsByClassName('resumo-texto-previa')[0]
let texto = document.getElementsByClassName('resumo-texto')[0]

previa.style.transition = '1s ease-in'
texto.style.transition = '1s ease-out'

let textod = texto.style.display
let previad = previa.style.display

previad = 'block'
textod = 'none'

resumo.onclick = () => {
	if (previa.style.display == 'block') {
		previa.style.display = 'none'
		texto.style.display = 'block'
		texto.style.opacity = '50%'
		texto.style.opacity = '100%'
	}else{
		texto.style.display = 'none'
		previa.style.display = 'block'
	}
}