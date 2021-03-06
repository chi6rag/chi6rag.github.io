$(document).ready(function(){
  
  // row one

    // android-calculator
    $(".android-calculator").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>AndroidCalculator<hr />     \
        <p class='on-hover-paragraph'>AndroidCalculator is an awesome Calculator with a niche design and a sleek UI</p></h4>  \
        ");
    });
    $(".android-calculator").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // flames game
    $(".flames").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Flames Game<br /><hr />     \
        <p class='on-hover-paragraph'>I made a game for people to find the scope of their relationship</p></h4>  \
        ");
    });
    $(".flames").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // rideshare
    $(".rideshare").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>ShareCab<br /><hr />     \
        <p class='on-hover-paragraph'>I developed ShareCab, for people who like to travel in budget</p></h4>  \
        ");
    });
    $(".rideshare").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // gitatranslation
    $(".gitatranslation").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Git A Translation<br /><hr />     \
        <p class='on-hover-paragraph'>A HackPSU product for making open source projects on Github more accessible across the world</p></h4>  \
        ");
    });
    $(".gitatranslation").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // rails
    $(".rails").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Rails Contributions<br /><hr />     \
        <p class='on-hover-paragraph'>Though I don't contribute into Rails, I aspire to be an active contributor</p></h4>  \
        ");
    });
    $(".rails").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

  // end one

    // swachbharat
    $(".swachbharat").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>SwachBharat<br /><hr />     \
        <p class='on-hover-paragraph'>Take a pledge to clean your locality with FiveStar's Swachbharat</p></h4>  \
        ");
    });
    $(".swachbharat").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // rakshak
    $(".rakshak").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Rakshak<br /><hr />     \
        <p class='on-hover-paragraph'>Rakshak is an application which lets women travel safely at night </p></h4>  \
        ");
    });
    $(".rakshak").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // learnlist
    $(".learnlist").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Learnlist<br /><hr />     \
        <p class='on-hover-paragraph'>Learnlist gives you a step by step way to master a skill</p></h4>  \
        ");
    });
    $(".learnlist").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    // worder
    $(".worder").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Worder<br /><hr />     \
        <p class='on-hover-paragraph'>Sharpen your vocabulary using Worder on your FirefoxOS device</p></h4>  \
        ");
    });
    $(".worder").on('mouseleave', function(){
      $(this).find("h4").remove();
    });
});