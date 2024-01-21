window.addEventListener('scroll', function() {
    const header = document.querySelector('header');

    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


//Loader 

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity='0'
        setTimeout(()=>{
            loader.style.display = 'none';
      },500)
    }, 1000); 
    const video = document.querySelector('video');

    video.loop = true;

  }
  );
  