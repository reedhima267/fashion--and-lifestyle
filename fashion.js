$(window).scroll(function(){
    var positiontop=$(document).scrollTop();
    console.log(positiontop);
})

$(window).on("scroll", function(){
    if($(window).scrollTop()>0){
      $(".img-1").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-1").removeClass("animate__animated animate__fadeInRight");
    }
})


$(window).on("scroll", function(){
    if($(window).scrollTop()>190){
      $(".para-1").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-1").removeClass("animate__animated animate__fadeInLeft");
    }
})

$(window).on("scroll", function(){
    if($(window).scrollTop()>760){
      $(".img-2").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-2").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>1200){
      $(".para-2").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-2").removeClass("animate__animated animate__fadeInLeft");
    }
  })

  $(window).on("scroll", function(){
    if($(window).scrollTop()>1560){
      $(".img-3").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-3").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>1960){
      $(".para-3").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-3").removeClass("animate__animated animate__fadeInLeft");
    }
  })

  $(window).on("scroll", function(){
    if($(window).scrollTop()>2358){
      $(".img-4").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-4").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>2798){
      $(".para-4").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-4").removeClass("animate__animated animate__fadeInLeft");
    }
  })

  $(window).on("scroll", function(){
    if($(window).scrollTop()>3158){
      $(".img-5").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-5").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>3558){
      $(".para-5").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-5").removeClass("animate__animated animate__fadeInLeft");
    }
  })

  $(window).on("scroll", function(){
    if($(window).scrollTop()>3958){
      $(".img-6").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-6").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>4358){
      $(".para-6").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-6").removeClass("animate__animated animate__fadeInLeft");
    }
  })