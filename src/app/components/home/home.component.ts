import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isToggle:boolean=false;

  options:AnimationOptions={
    path:'assets/images/1.json'
  }
  options2:AnimationOptions={
    path:'assets/images/3.json'
  }
  contact:AnimationOptions={
    path:'assets/images/7.json'
  }

  constructor() { }

  darkMode(){
    $(".navbar").css("backgroundColor" , "#093B5C");
    $(".theme-container").css("backgroundColor" , "#066EAF");
    

    $(".navbar-nav a").css("color" , "#FFF");
    $("#home").css("backgroundColor" , "#031D2E");
    $("#home h1").css("color" , "#FFF");

    $("#services").css("backgroundColor" , "#072A41");
    $(".Bg_Main").css("backgroundColor" , "#031D2E");
    $(".theme-container").css("backgroundColor" , "#066EAF");
    $("#services h2").css("color" , "#FFF");
    $(".font_h1").css("color" , "#FFF");
    $(".font_h2").css("color" , "#FFF");

    $("#principles").css("backgroundColor" , "#031D2E");
    $("h5").css("color" , "#FFF");

    $("footer").css("backgroundColor" , "#072A41");

    $("#contact").css("backgroundColor" , "#031D2E");
    $(".cus_label").css("color" , "#FFF");


    $(".SocendBg").css("backgroundColor" , "#072A41");
    

  $(".navbar-nav a").hover(function (e:any) {
      // over
  $(e.target).css("color" , "#FF68B4");
  }, function () {
      // out
  $(".navbar-nav a").css("color" , "#fff");
  }
  );

  }

  lightMode(){
    $(".navbar").css("backgroundColor" , "#FFF");
    $(".theme-container").css("backgroundColor" , "#F6F7FA");


    $(".navbar-nav a").css("color" , "#000");
    $("#home").css("backgroundColor" , "#FFF");
    $("#home h1").css("color" , "#333333");


    $("#services").css("backgroundColor" , "#F6F7FA");
    $(".Bg_Main").css("backgroundColor" , "#FFF");
    $("#services h2").css("color" , "#333333");
    $(".font_h1").css("color" , "#333333");
    $(".font_h2").css("color" , "#333333");

    $("#principles").css("backgroundColor" , "#FFF");
    $("h5").css("color" , "#333333");


    $("footer").css("backgroundColor" , "#FFF");

    $("#contact").css("backgroundColor" , "#FFF");
    $(".cus_label").css("color" , "#333333");

    $(".SocendBg").css("backgroundColor" , "#F6F7FA");


    $(".navbar-nav a").hover(function (e:any) {
      // over
  $(e.target).css("color" , "#FF68B4");
  }, function () {
      // out
  $(".navbar-nav a").css("color" , "#000");
  }
  );

  }



  toggleMode(){
    if(this.isToggle==false){
      this.isToggle=true;
    }else{
      this.isToggle=false;
    }
  }




  inputt(){
    $("#contact input").css("border-color" , "none")
    $("#contact input").css("backgroundColor" , "none")

  }






  ngOnInit(): void {
    $(".navbar-nav a").click((e:any)=>{
      let aHref = $(e.target).attr("href"); //about 
      let secOffset = $(aHref).offset().top;
      $("html , body").animate({scrollTop:secOffset} , 1000)
    });

    $("#home a").click(()=>{
      let aHref = $("#home a").attr("href"); //about 
      let secOffset = $(aHref).offset().top;
      $("html , body").animate({scrollTop:secOffset} , 1000)
    });


    $(window).scroll( ()=>{

      let aboutOffset = $("#services").offset().top;
      let windowScroll = $(window).scrollTop();
  
      if(windowScroll >aboutOffset){
          $("#btnUp").fadeIn(500);
  
      }else{
          $("#btnUp").fadeOut(500)
      }
  })

    $("#btnUp").click( ()=>{
      $("html , body").animate({scrollTop:0} ,1000)
  });

  $(document).ready( function() {
    $(".spinner").fadeOut(2000, function(){
        $("#loading").slideUp(1500, function(){
            $("body").css("overflow" , "auto");
            $("#loading").remove();
        })
    })

});

  }

  

}
