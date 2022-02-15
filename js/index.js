function f() {
    var accordion_contents = document.getElementsByClassName('uk-accordion-content');
    var cards = document.getElementsByClassName("card");
    if (window.innerWidth <= 1440) {
        for (i = 0; i < accordion_contents.length; i++) {
            accordion_contents[i].style.flexDirection = 'column';
        }
        for (i = 0; i < cards.length; i++) {
            cards[i].style.width = '90%';
        }
    } else {
        for (i = 0; i < accordion_contents.length; i++) {
            accordion_contents[i].style.flexDirection = 'row';
        }
        for (i = 0; i < cards.length; i++) {
            cards[i].style.width = '25%';
        }
    }
    console.log(window.innerWidth)
}
window.addEventListener('resize', f);
window.addEventListener('load', f)
