document.addEventListener('DOMContentLoaded', function(){
    var heroContent = document.querySelector('.hero-content');
    setTimeout(function(){ heroContent.classList.add('loaded'); }, 200);
});
