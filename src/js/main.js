(function ($) {

  /* FUNCTIONS
   ----------------------------- */
  function setupSlider(el, type) {
    var $el = $(el)
    var opts = {
      default: {
        autoplay: false,
        dots: false,
        arrows: true,
        infinite: true,
        fade: false,
      },
    }

    $el.slick(opts[type])
  }

  function headerScroll() {
    var header = $('.header--main')
    $(this).scrollTop() > $(window).height() ? header.addClass('scrolled') : header.removeClass('scrolled')
  }

  /* INVOCATION
   ----------------------------- */
  $(document).ready(function () {
    console.log($.fn.jquery)
  })

  $(window).scroll(function () {
    headerScroll()
  })
})(jQuery)