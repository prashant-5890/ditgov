// $(document).scroll(function () {
//     if ($(document).scrollTop() > (parseInt($(".top-header-section").height()) + 120)) {                        
//         $(".main-menu").addClass('header-fixed');
//     } else {
//         $(".main-menu").removeClass('header-fixed');
//     }
// });

$(".nav-item")
    .mouseover(function () {
        if ($(this).hasClass('dropdown')) {
            $(this).addClass('open');
        }
    })
    .mouseout(function () {
        $(this).removeClass('open');
    });


setInterval(function(){ 
    Date.prototype.getCurrentTime = function(){
        return ((this.getHours() < 10)?"0":"") + ((this.getHours()>12)?(this.getHours()-12):this.getHours()) +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds() + ((this.getHours()>12)?(' PM'):' AM');
    };

    var today = new Date();
    var current_date = today.getDate();
    var current_month = today.getMonth()+1;
    var current_year = today.getFullYear();
    var current_time = today.getCurrentTime();
    var ist = current_date+"/"+current_month+"/"+current_year+' - '+current_time;
    $('.current-time').html(ist);
    $('.copyright span').html(current_year);
}, 1000);
/* Current Date and Time JS End */


/* Main Banner Slider JS Start */
var owl = $('#home-slider');
owl.owlCarousel({
    loop:true,
    video:true,
    videoWidth: true,
    videoHeight: true,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    autoHeight: true,
    items:1
});
/* Main Banner Slider JS End */

/* Gallery Slider JS Start */
var owl = $('#gallery-slider');
owl.owlCarousel({
    loop:true,
    video:true,
    videoWidth: true,
    videoHeight: true,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    autoHeight: true,
    items:1
});
/* Gallery Slider JS End */

/* Page Count JS Start */
function nameDefined(ckie,nme) {
   var splitValues
   var i
   for (i=0;i<ckie.length;++i) {
      splitValues=ckie[i].split("=")
      if (splitValues[0]==nme) return true
   }
   return false
}
function delBlanks(strng) {
   var result=""
   var i
   var chrn
   for (i=0;i<strng.length;++i) {
      chrn=strng.charAt(i)
      if (chrn!=" ") result += chrn
   }
   return result
}
function getCookieValue(ckie,nme) {
   var splitValues
   var i
   for(i=0;i<ckie.length;++i) {
      splitValues=ckie[i].split("=")
      if(splitValues[0]==nme) return splitValues[1]
   }
   return ""
}
function insertCounter() {
    readCookie()
    displayCounter()
}
function displayCounter() {
    $('#CounterVisitor').html(counter);   
}
function readCookie() {
    var cookie=document.cookie
    counter=0
    var chkdCookie=delBlanks(cookie)  //are on the client computer
    var nvpair=chkdCookie.split(";")
    if(nameDefined(nvpair,"pageCount"))
    counter=parseInt(getCookieValue(nvpair,"pageCount"))
    ++counter
    var futdate = new Date()
    var expdate = futdate.getTime()
    expdate += 3600000 * 24 *30  //expires in 1 hour
    futdate.setTime(expdate)
    var newCookie="pageCount="+counter
    newCookie += "; expires=" + futdate.toGMTString()
    window.document.cookie=newCookie
}
insertCounter();
/* Page Count JS End */


if ($('.inner-dropdown').height >= '400') {
    // $(this).css('margin-top', '-250px');
    $(this).addClass('marg-top-min');
}




$('#increasetext').click(function() {
    deSize = parseInt($('#content').css('font-size'));
    var font;
    if (deSize == 14) {
        font = $('#content').attr('font');
        if (font == undefined){
            font = 140;
        }
    } else {
        font = $('#content').attr('font');
    }
    font = parseInt(font) + 8;
    if (font <= 180) {
        $('#content').attr('font', font);
        var size = font + '%';
        $('#content').css('font-size', size);
        $('h2').css('font-size', size);
        $('p').css('font-size', size);
        $('h2').css('line-height', 'normal');
        $('p').css('line-height', 'normal');
    }
});

$('#resettext').click(function() {
    $('#content').removeAttr('font', '');
    $('#content').removeAttr('style', '');
    $('h2').css('font-size', '');
    $('p').css('font-size', '');
    $('h2').css('line-height', '');
    $('p').css('line-height', '');
});

$('#decreasetext').click(function() {
    deSize = parseInt($('#content').css('font-size'));
    var font;
    if (deSize == 14) {
        font = $('#content').attr('font');
        if (font == undefined){
            font = 140;
        }
    } else {
        font = $('#content').attr('font');
    }
    font = parseInt(font) - 8;
    if (font >= 100) {
        $('#content').attr('font', font);
        var size = font + '%';
        $('#content').css('font-size', size);
        $('h2').css('font-size', size);
        $('p').css('font-size', size);
    }
});


var lastDate = '18th August 2021';
$('.last-update span').html(lastDate);


/* Add arrow to all Slider JS Start */
$( ".owl-prev").html('<div class="arrow-div"><i class="fa fa-arrow-left"></i></div>');
$( ".owl-next").html('<div class="arrow-div"><i class="fa fa-arrow-right"></i></div>');
/* Add arrow to all Slider JS End */

