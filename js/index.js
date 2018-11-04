$(function () {

    $('a[href*=#]').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            && location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {
                var targetOffset = $target.offset().top;

                $('html,body').animate({ scrollTop: targetOffset }, 1000);

                return false;
            }
        }
    });

});

var $bugermenu = document.getElementById("burger-buttom");
var $menu = document.getElementById("menu");

var consulta = window.matchMedia('(max-width:640px)');
consulta.addListener(mediaQuery);

function mediaQuery() {
    if (consulta.matches) {
        console.log("se cumplio");

        $bugermenu.addEventListener('click', togleMenu);
    }
    else{
        $bugermenu.removeEventListener('click', togleMenu);
        console.log("no se cumplio");
    }
}

mediaQuery();

function togleMenu() {
    $menu.classList.toggle('active')   
}
// function showMenu() {
//         $menu.classList.add('active')
// }
// function hideMenu() {
//     $menu.classList.remove('active')
// }