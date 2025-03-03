;(function ($) {
  var $window = $(window),
    $body = $('body')

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: [null, '736px'],
  })

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload')
    }, 100)
  })

  // Dropdowns.
  $('#nav > ul').dropotron({
    mode: 'fade',
    noOpenerFade: true,
    alignment: 'center',
    detach: false,
  })

  // Nav.

  // Title Bar.
  $(
    '<div id="titleBar">' +
      '<a href="#navPanel" class="toggle"></a>' +
      '<span class="title">' +
      $('#logo h1').html() +
      '</span>' +
      '</div>',
  ).appendTo($body)

  // Panel.
  $('<div id="navPanel">' + '<nav>' + $('#nav').navList() + '</nav>' + '</div>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'left',
      target: $body,
      visibleClass: 'navPanel-visible',
    })
})(jQuery)

$(document).ready(function () {
  // Smooth scrolling for navigation links
  $('nav a, .scroll-link').on('click', function (event) {
    // Check if the link has a valid hash (e.g., #home, #projects, etc.)
    if (this.hash !== '') {
      event.preventDefault()
      var hash = this.hash

      // Animate scrolling to the section with easing effect
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 50, // Adjust the offset if needed
        },
        800, // Speed in milliseconds (800ms for smooth effect)
        'swing',
      )
    }
  })
})

document.addEventListener('DOMContentLoaded', function () {
  new Typed('#typing-text', {
    strings: ['Engineer', 'Full-Stack Developer', 'Tech Enthusiast'],
    typeSpeed: 50, // Speed of typing
    backSpeed: 50, // Speed of deleting text
    backDelay: 1000, // Pause before deleting
    loop: true, // Infinite loop
    showCursor: true, // Shows blinking cursor
    cursorChar: '|', // Cursor style
  })
})
