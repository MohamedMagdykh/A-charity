$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$(document).scroll(function(){
         
     
    if(window.pageYOffset>= 300 ){
        $("#navbarcolor").css({
            "background":"rgb(61, 124, 242)",
            "top":"0"
        })
      }
      if(window.pageYOffset<= 299  )
      {
        $("#navbarcolor").css({
            "background":"none",
            
        })  
    
    }
      



  })