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
    if($(window).scrollTop()>720){
      $(".img-2").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-2").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>1120){
      $(".para-2").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-2").removeClass("animate__animated animate__fadeInLeft");
    }
  })

  $(window).on("scroll", function(){
    if($(window).scrollTop()>1441){
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
    if($(window).scrollTop()>2201){
      $(".img-4").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-4").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>2641){
      $(".para-4").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-4").removeClass("animate__animated animate__fadeInLeft");
    }
  })

  $(window).on("scroll", function(){
    if($(window).scrollTop()>3121){
      $(".img-5").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-5").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>3401){
      $(".para-5").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-5").removeClass("animate__animated animate__fadeInLeft");
    }
  })

  $(window).on("scroll", function(){
    if($(window).scrollTop()>3761){
      $(".img-6").addClass("animate__animated animate__fadeInRight");
    }else{
      $(".img-6").removeClass("animate__animated animate__fadeInRight");
    }
})

  $(window).on("scroll", function(){
    if($(window).scrollTop()>4200){
      $(".para-6").addClass("animate__animated animate__fadeInLeft");
    }else{
      $(".para-6").removeClass("animate__animated animate__fadeInLeft");
    }
  })