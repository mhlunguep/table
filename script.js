$(document).ready(function(){
    $('#fixed-headers').scroll(function(ev) {
      /**
       * when the table scrolls, change header and row positions
       */
      $('thead th').css('transform', 'translateY(' + this.scrollTop + 'px)');
      $('tbody th').css('transform', 'translateX(' + this.scrollLeft + 'px)');
    });
  });