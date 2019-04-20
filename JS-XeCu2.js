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
  document.images['poster'].src ='Image/XeCu/Poster/img' + current + '.jpg';
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


//XE CŨ XE MỚI
	$(document).ready(function() {
		$("#btnLeftId").click(function(event){
			var slide_sau = $('.active').next(); //Khai báo 1 slide sau để chạy vào thay thế slide đang được hiển thị
			console.log(slide_sau.length); //Đếm số thứ tự từng slide
			if (slide_sau.length != 0 ) //Nếu số 0 là hết slide hiển thị , còn khác 0 là có slide hiển thị
			{
				$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function(event){
					$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
				});
				slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd',function(event){
					$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
				});
			}else{
				$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function(event){
					$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
				});
				$('.Slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd',function(event){
					$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
				});
			}
			});
        //NÚT NEXT 
		$("#btnRightId").click(function(){
			var slide_truoc = $('.active').prev();
			console.log(slide_truoc.length);
			if(slide_truoc.length!=0){
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}else{
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.Slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
		
		});
    });


