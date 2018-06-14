setTimeout(function() {
  
   $("#content").fadeOut("slow", function() {
     $("#content").html("<div class='top'>\
<img src='img/SM-LOGO.png'>\
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
  }, 2000);

setTimeout(function() {
   $("#content").fadeOut("slow", function() {
     $("#content").html("<div class='contactBox'>\
     <div class='smLogo'>\
       <img src='img/SMALL-LOGO.png'>\
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
  }, 6000);

setTimeout(function() {
   $("#content").fadeOut("slow", function() {
     $("#content").html(" ");
     setTimeout(function() {
        $("#content").fadeIn("slow");
      }, 1000);
    });
  }, 11000);