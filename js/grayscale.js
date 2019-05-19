(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        if (this.hash == '#location') {
            var topoffset = 130;
        } else {
            var topoffset = 70;
        }
        console.log(topoffset);
        $('html, body').animate({
          scrollTop: (target.offset().top - topoffset)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });



  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict


// Super quick slideshow
var slideIndex = [1, 1, 1];
var slideId = ["slides-0", "slides-1", "slides-2"];
slideShow(1, 0);
slideShow(1, 1);
slideShow(1, 2);


// no: index of slideshow on page (e.g. if there are 3 slideshows, the first `no` is 0, 2nd is 1, etc)
function slidesMoveIndex(n, no) {
  slideShow(slideIndex[no] += n, no);
}

// n: 1 to move forward 1 slide, -1 to move backward a slide
// no: index of slideshow on page (e.g. if there are 3 slideshows, the first `no` is 0, 2nd is 1, etc)
function slideShow(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
