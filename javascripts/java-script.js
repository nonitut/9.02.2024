$(document).ready(function() {
	$('#button').click( function () {
    let re = $('<div class="popup"> thanks </div>');
    $('#divmain').append(re);
    setTimeout( function() { re.remove(); }, 500);
    });

    $(document).mousemove(function(e) {
        let body_size_x = $( window ).width();
        let body_size_y = $( window ).height();
        let half_body_size_x = parseInt(body_size_x / 2);
        let half_body_size_y = parseInt(body_size_y / 2);
        let left_dir = e.pageX;
        let top_dir = e.pageY;
        let eq1 = left_dir < half_body_size_x;
        let eq2 = left_dir > half_body_size_x;
        let eq3 = top_dir < half_body_size_y;
        let eq4 = top_dir > half_body_size_y;
    
        $('#divbody').html(half_body_size_x + ' + ' + half_body_size_y);
        $('#divtop').html(top_dir);
        $('#divleft').html(left_dir);
         if (eq1 && eq3) {
           $('#divbox').css('background', 'pink');
         } else if (eq1 && eq4) {
           $('#divbox').css('background', 'orangered');
         } else if (eq2 && eq3) {
           $('#divbox').css('background', 'yellow');
         } else if (eq2 && eq4) {
           $('#divbox').css('background', 'lightblue');
         }
    
      });// движение мышки
    
    
    
});



document.addEventListener("DOMContentLoaded", function() {
    let followCursor = () => {
    let el = document.getElementById("follow-cursor")

    window.addEventListener("mousemove", e =>{
        let target = e.target;
        if(!target) return;

        el.style.left = e.pageX + "px"
        el.style.top = e.pageY + "px"
    })
   }

   let mousein = document.getElementById("divbox");
   let el = document.getElementById("follow-cursor");
   
    mousein.addEventListener("mouseenter", () => {
        el.classList.add("large") ;
    });

    mousein.addEventListener("mouseleave",() => {
        el.classList.remove("large");
    });



   followCursor()
});
