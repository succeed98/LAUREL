(function ($) {
  'use strict';
  var form = $("#example-form");
  form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onFinished: function (event, currentIndex) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Quiz has been submitted successfully',
        showConfirmButton: false,
        // timer: 1500
      });
      setTimeout(function () {
        window.location.href = "quiz_results.html";
      }, 2000);
    }
  });
})(jQuery);