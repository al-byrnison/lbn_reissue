window.addEventListener('load', function (){
    let i = 0
    const banner = document.getElementById('banner')
    const imagesBanner = [
        './assets/images/banner-1.png',
        './assets/images/banner-2.png',
        './assets/images/banner-3.png',
        './assets/images/banner-4.png',
    ]
    setInterval(function () {
        banner.style.transition = 'background-image 0.8s ease-in-out'
        banner.style.backgroundImage = `url(${imagesBanner[i]})`
        i++
        if (i === imagesBanner.length) {
            i = 0
        }
    }, 8000)
    
});
window.addEventListener('scroll', function () {

	if (window.scrollY >= 500) {
		document.querySelector('nav').classList.add('fixed-header')
	}else if ((window.scrollY >= 500) && (window.innerWidth > 796)){
        document.querySelector('nav').classList.add('fixed-header')
		document.querySelector('nav div').classList.add('visible-home')
            document.querySelector('nav ul li:first-child').style.marginLeft = '3rem';
    } 
    else {
		document.querySelector('nav').classList.remove('fixed-header')
		document.querySelector('nav div').classList.remove('visible-home')
        document.querySelector('nav ul li:first-child').style.marginLeft = '0';
    }
});