(function(){
  /* --> 
  Function : fade_animne
  <-- */
  $.fn.fade_anime = function(userOptions){
    // Default options
    var options = {
      interval: 1000,
      trans: 0.5
    }
    $.extend(options, userOptions);
    return $(this).each(function(){
      // alert("Test!");
      var myObj = $(this);
      var fadeIn = true;
      var myInterval = setInterval(function(){
        if (fadeIn){
          myObj.fadeTo("slow", options.trans);
          fadeIn = false;
        } else {
          myObj.fadeTo("slow", 1.0);        
          fadeIn = true;
        }}, options.interval);
    });
  };

  /* -->
  Function: run_x_anime
  --> */
  $.fn.run_x_anime = function(userOptions){
    // Default options
    var options = {
      before: "0px",
      after: "360px",
      color_before: "black",
      color_after: "green",
      interval: 1000,
      duration: 200,
    }
    $.extend(options, userOptions);
    return $(this).each(function(){
      var myObj = $(this);
      var run_to_right = true;
      var myInterval = setInterval(function(){
        if(run_to_right){
          myObj.animate({left: options.after, color: options.color_after},options.duration);
          run_to_right = false;
        }else{
          myObj.animate({left: options.before, color: options.color_before},options.duration);
          run_to_right = true;
      }},options.interval);  
    });
  };
})(jQuery);