// USELESS FILE - Not in the index.html header


pixel_per_cm_detector_html = '<div style="visibility: collapse; width: 10cm; height: 10cm" id="pixel_per_cm_detector"></div>'

function f() {
    var accordion_contents = document.getElementsByClassName('uk-accordion-content');
    var cards = document.getElementsByClassName("card");
    if (window.innerWidth / ppcm_x <= 15) {
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
    console.log(window.innerWidth / ppcm_x, ppcm_x);
}
function get_ppcm() {
    ppcm_detector = document.getElementById("pixel_per_cm_detector");
    ppcm_x = ppcm_detector.getBoundingClientRect().width/10;
    ppcm_detector.style.display = 'none';
}
window.addEventListener('load', function () {
    get_ppcm();
    f();
    window.addEventListener('resize', f);
})
