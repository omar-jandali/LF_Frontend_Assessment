console.log('this is a test');
$('.slides').html();
var slider = $('#slider');
var $slides = $('.slides');
var $slide = $('.slide');

var counter = 1;

function nextItem(){
    $slides.animate({"margin-left":"-=512px"}, 1000, () => {
        counter++;
        if(counter === $slide.length){
            counter = 1;
            $slides.css({"margin-left":"0"});
        }
    });    
}

function previousItem(){
    $slides.animate({"margin-left":"+=512px"}, 1000, () => {
        counter--;
        if(counter < 1){
            counter = 5;
            $slides.css({"margin-left":"-2048px"});
        }
    })
}

function animate(){

    setInterval(() => {
        nextItem()
    }, 5000);

}

animate();
// renderWindow();