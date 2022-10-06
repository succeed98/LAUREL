(function ($) {
  'use strict';
  var form = $("#example-form");
  form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onFinished: function (event, currentIndex) {
        event.preventDefault();
        var csrftoken = $("[name=csrfmiddlewaretoken]").val();
        var queryString = $('#example-form').serialize();
        console.log(csrftoken);

        var fieldValuePairs = $('#example-form').serializeArray();
        $.each(fieldValuePairs, function(index, fieldValuePair) {
            console.log("Item " + index + " is [" + fieldValuePair.name + "," + fieldValuePair.value + "]");
        });


        $.ajax({
            url: "/exam/my-quizzes/submit_quiz/",
            type:'POST',
            headers:{
            "X-CSRFToken": csrftoken
            },
            data: queryString,
            dataType: 'json',
            success: function (data,response) {
                console.log(data);
                console.log(data.msg);
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Quiz has been submitted successfully',
                    showConfirmButton: false,
                    // timer: 1500
                  });
                  setTimeout(function () {

                    window.location.href = `/exam/my-quizzes/${data.quiz_id}/view_scores/`;
                  }, 1000);
    
                
         
                
    
            },
            error: function (data,response) {
                console.log(data);
                console.log(response);
                
    
    
              
                }
        });
    

    
    }
  });
})(jQuery);