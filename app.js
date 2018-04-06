$(document).ready(function(){
    
   $("#collapse-body").hide();  //initially hides the collapse-body

   $("#head").click(function(){  //click to toggle collapse body

   		 $("#collapse-body").slideToggle("slow");
   });
});