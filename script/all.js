
//navbar
$(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black');
    }
  })
  $('.menu h4').click(function () {
    $('nav ul').toggleClass('active');
  })
})


// banner-text

// var typed = new Typed(".type", {
//   strings: [
//     'Welcome To My Work',
//     // 'Web Design - FrontEnd Development'
//   ],
//   typedSpeed: 10,
//   backSpeed: 100,
//   loop: true,
// });


//section-skill
$(function () {
  $('.chart').easyPieChart({
    //your options goes here
    size: 130,
    barColor: '#17d3e6',
    scaleColor: false,
    lineWidth: 15,
    trackColor: '#373737',
    lineCap: 'circle',
    animate: 5000 //animation duration
  });
});

$(function () {
  AOS.init();
})

// footer-scroll-top
$(function () {
  //show hide button on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollTop').fadeIn();
    }
    else {
      $('.scrollTop').fadeOut();
    }
  })
  //smooth scrolling to top
  $('.scrollTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000)//set animation time
  })
})


// lightbox.option({
//   'resizeDuration': 200,
//   'wrapAround': true,
// })




// header
$(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('.img-blur').css({
      filter: 'blur(' + scroll / 50 + 'px)'
    });
  });
});



// scroll - behavior
// $(function () {
//   var anchor = document.querySelector('a[href="#dest"]')
//   var target = document.getElementById('dest')
//   anchor.addEventListener('click', function (e) {
//     if (window.scrollTo) {
//       e.preventDefault()
//       window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop })
//     }
//   })
// });


