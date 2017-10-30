/*!
 * Start Bootstrap - Stylish Portfolio (http://startbootstrap.com/)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $("#to-top").show("slow", function() {
          $("#to-top").css({
            position: "fixed",
            display: "block"
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $("#to-top").hide("slow", function() {
          $("#to-top").css({
            display: "none"
          });
        });
      }
    }
  });
})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on("click", onMapClickHandler);
  that.off("mouseleave", onMapMouseleaveHandler);
  that.find("iframe").css("pointer-events", "none");
};
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off("click", onMapClickHandler);
  // Enable scrolling zoom
  that.find("iframe").css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on("mouseleave", onMapMouseleaveHandler);
};
// Enable map zooming with mouse scroll when the user clicks the map
$(".map").on("click", onMapClickHandler);

//fadein/out function
setTimeout(function() {
  $("#content").fadeOut("slow", function() {
   $("#content").fadeOut("slow", function() {
     $("#content").html("<div class='top'>\
<img src='img/sm-logo.png'>\
   </div>\
   <div class='text1'>\
     <p>\
       Welcome to San Michele Collection. Located in the heart of Weston,<br>\
       this inspired neighborhood offers residents a luxury home with the country club-lifestyle to match it.<br>\
       Reimagined residences feature kitchens, bathrooms and rooms elegantly finished with the finest materials.<br>\
       Curated community spaces and amenities, including the Collection Members Club,<br>\
       offer an unparalleled residential experience.\
     </p>\
   </div>\
   <a href='#' class='btn btncontact'>CONTACT US</a>");
     setTimeout(function() {
        $("#content").fadeIn("slow");
      }, 1000);
    });
  });
}, 2000);

setTimeout(function() {
  $("#content").fadeOut("slow", function() {
   $("#content").fadeOut("slow", function() {
     $("#content").html("<div class='contactBox'>\
     <div class='smLogo'>\
       <img src='img/small-logo.png'>\
    </div>\
    <p>CONTACT US</p>\
    <form>\
       <div class='row  form-group'>\
           <div class='checkbox col-lg-6'>\
               <label><input type='checkbox'> I'M A REAL ESTATE AGENT</label>\
           </div>\
         <div class='col-lg-6'>\
           <input type='text' class='form-control text2' placeholder='COMPANY'>\
         </div>\
       </div>\
       <div class='row form-group'>\
           <div class='col-lg-6'>\
             <input type='text' class='form-control text2' placeholder='FIRST NAME*'>\
           </div>\
           <div class='col-lg-6'>\
             <input type='text' class='form-control text2' placeholder='LAST NAME*'>\
           </div>\
         </div>\
         <div class='row form-group'>\
             <div class='col-lg-6'>\
               <input type='text' class='form-control text2' placeholder='EMAIL ADDRESS*'>\
             </div>\
             <div class='col-lg-6'>\
               <input type='text' class='form-control text2' placeholder='PHONE NUMBER*'>\
             </div>\
           </div>\
           <div class='row form-group'>\
               <div class='col-lg-12'>\
               <textarea class='form-control text2' id='Textarea1' rows='5' placeholder='MESSAGE*'></textarea>\
            </div>\
            </div>\
            <div>\
               <a href='#' class='btn btncontact'>CONTACT US</a>\
            </div>\
     </form>\
   </div>");
     setTimeout(function() {
        $("#content").fadeIn("slow");
      }, 1000);
    });
  });
}, 6000);

setTimeout(function() {
  $("#content").fadeOut("slow", function() {
   $("#content").fadeOut("slow", function() {
     $("#content").html(" ");
     setTimeout(function() {
        $("#content").fadeIn("slow");
      }, 1000);
    });
  });
}, 11000);