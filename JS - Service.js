// JavaScript Document
//HIỂN THỊ CONTENT
//poster
window.onload = function(){
  setTimeout("switchImage()", 2000);
}
var current = 1;
var numIMG = 3;
function switchImage(){
  current++;
  // Thay thế hình
  document.images['poster'].src ='Image/Poster-Service/imgs' + current + '.jpg';
  // Gọi lại hàm nếu thõa đk
  if(current == numIMG){current=0;}
   setTimeout("switchImage()", 2000);
}
//On top
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() !=0) {
            $('.on_top').fadeIn();
        } else {
            $('.on_top').fadeOut();
        }
    });
    $('.on_top').click(function(){
        $("html, body").animate({ scrollTop: 0 },600);
        return false;
    });
});

function showContent(){
	var contentShow = document.getElementById("contentLock");
	var timer = setInterval(function(){
		contentShow.style.display ="block";
		},200)
}

