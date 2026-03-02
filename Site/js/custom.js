
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);


// ...existing code...
(function() {
  const scroller = document.querySelector('.explore-section .overflow-auto');
  if (!scroller) return;

  const cards = scroller.querySelectorAll('.custom-block');
  const THRESHOLD = 60; // px from right edge where collapse triggers

  function updateCollapse() {
    const scrollerRect = scroller.getBoundingClientRect();
    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      // se a borda direita do cartão estiver muito próxima da borda direita do scroller
      if (r.right > scrollerRect.right - THRESHOLD) {
        card.classList.add('collapse-text');
      } else {
        card.classList.remove('collapse-text');
      }
    });
  }

  scroller.addEventListener('scroll', updateCollapse, { passive: true });
  window.addEventListener('resize', updateCollapse);
  window.addEventListener('load', updateCollapse);
  // check inicialmente
  updateCollapse();
})();