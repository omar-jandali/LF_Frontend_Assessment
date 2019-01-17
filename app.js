console.log('this is a test');
$('#content').html();
var $content = $('#content');

images = [
    {
        id:1,
        image:'http://via.placeholder.com/500x500',
        title:'Vega',
        caption:'Vega is one of the leading global plant-based nutrition companies.'
    },
    {
        id:2,
        image:'http://via.placeholder.com/500x500',
        title:'EightSleep',
        caption:'Eight has developed the world\'s first smart mattress.'
    },
    {
        id:3,
        image:'http://via.placeholder.com/500x500',
        title:'The Hundereds.com',
        caption:'The Hundereds Shopify Plus eCommerse site features a 100% custom and seamless Wordpress integraion.'
    },
    {
        id:4,
        image:'http://via.placeholder.com/500x500',
        title:'PRG Nation',
        caption:'InnerSelf Technologies hopes to create4 a PRG Nation, built around their new bio-stimulant and monitoring system.'
    },
    {
        id:5,
        image:'http://via.placeholder.com/500x500',
        title:'Qualo.com',
        caption:'Immerseive, highly-branded, and customer-focused shopping experience. '
    },
]

var counter = 0;



function renderWindow(){
    $content.append('<div id="item" style="background-image: url(' + images[counter].image + ');"><p id="title"> ' + images[counter].title + ' </p><p id="caption"> ' + images[counter].caption + ' </p></div>');
    $content.append('<div id="item" style="background-image: url(' + images[counter + 1].image + ')"><p id="title"> ' + images[counter + 1].title + ' </p><p id="caption"> ' + images[counter + 1].caption + ' </p></div>');
}

function nextItem(){
    counter ++;
    $content.empty();
    if(counter <= 3){
        $content.append('<div id="item" style="background-image: url(' + images[counter].image + ');"><p id="title"> ' + images[counter].title + ' </p><p id="caption"> ' + images[counter].caption + ' </p></div>');
        $content.append('<div id="item" style="background-image: url(' + images[counter + 1].image + ')"><p id="title"> ' + images[counter + 1].title + ' </p><p id="caption"> ' + images[counter + 1].caption + ' </p></div>');
    }
    if(counter > 3){
        counter = 0;
        $content.append('<div id="item" style="background-image: url(' + images[counter].image + ');"><p id="title"> ' + images[counter].title + ' </p><p id="caption"> ' + images[counter].caption + ' </p></div>');
        $content.append('<div id="item" style="background-image: url(' + images[counter + 1].image + ')"><p id="title"> ' + images[counter + 1].title + ' </p><p id="caption"> ' + images[counter + 1].caption + ' </p></div>');
    }
}

function previousItem(){
    counter --;
    $content.empty();
    if(counter >= 0){
        $content.append('<div id="item" style="background-image: url(' + images[counter].image + ');"><p id="title"> ' + images[counter].title + ' </p><p id="caption"> ' + images[counter].caption + ' </p></div>');
        $content.append('<div id="item" style="background-image: url(' + images[counter + 1].image + ')"><p id="title"> ' + images[counter + 1].title + ' </p><p id="caption"> ' + images[counter + 1].caption + ' </p></div>');
    }
    if(counter < 0){
        counter = 3;
        $content.append('<div id="item" style="background-image: url(' + images[counter].image + ');"><p id="title"> ' + images[counter].title + ' </p><p id="caption"> ' + images[counter].caption + ' </p></div>');
        $content.append('<div id="item" style="background-image: url(' + images[counter + 1].image + ')"><p id="title"> ' + images[counter + 1].title + ' </p><p id="caption"> ' + images[counter + 1].caption + ' </p></div>');
    }
}

renderWindow();