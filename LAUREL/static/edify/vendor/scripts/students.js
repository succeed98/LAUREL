$(function() {
  $(".sidebar-menu a").on("click", function() {
    $(".sidebar-menu").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });
})




// When the user clicks on the close button, it should do this function

function closeLessons(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-danger ml-3',
          cancelButton: 'btn btn-success'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You want to close the Lesson!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Close it!',
        cancelButtonText: 'No, cancel it!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Success!',
            'The Lesson has been closed.',
            'success'
          );
          setTimeout(function(){
            window.location.href = "lessons.html";
        }, 3000);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'You cancelled to close the Lesson. Enjoy reading!',
            'error'
          );
          setTimeout(function(){
            window.location.href = "lessons_plateform.html";
        }, 3000);
        }
      })
}

//this function is used to complete the lesson
function completeLessons(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success ml-3',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You are through with the entire lessons and wishes to complete it!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, complete lessons!',
        cancelButtonText: 'No, cancel it!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Success!',
            'The Lesson has been completed.',
            'success'
          );
          setTimeout(function(){
            window.location.href = "lessons.html";
        }, 3000);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'You cancelled to complete the Lesson. Enjoy reading!',
            'error'
          );
          setTimeout(function(){
            window.location.href = "lessons_plateform.html";
        }, 3000);
        }
      })
}

//this function is used to start quiz
function startQuiz(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success ml-3',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You want to start the quiz!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, start quiz!',
        cancelButtonText: 'No, cancel it!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Success!',
            'The quiz begins in 3 seconds.',
            'success'
          );
          setTimeout(function(){
            window.location.href = "student_take_quiz.html";
        }, 3000);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'You cancelled to start the quiz. Try again later when you are ready!',
            'error'
          );
          setTimeout(function(){
            window.location.href = "quizzes_asssignment_plateform.html";
        }, 3000);
        }
      })
}

// Publish create events button is clicked then do this:
function closeQuiz() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-left',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'error',
        title: 'You closed the quiz!'
    });
    setTimeout(function(){
        window.location.href = "quizzes_asssignment.html";
    }, 3000);
    
}

//this function is used to start quiz
function enrollCourseNow(){

  document.getElementById("div1").style.display="none";
  document.getElementById("div2").style.display="block";

  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ml-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You want to Enroll in this course!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Enroll Now!',
      cancelButtonText: 'No, cancel it!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Success!',
          'You have successfully enrolled in this course.',
          'success'
        );
        setTimeout(function(){
          window.location.href = "enrolled_courses.html";
      }, 3000);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'You cancelled to start the quiz. Try again later when you are ready!',
          'error'
        );
        setTimeout(function(){
          window.location.href = "myCourses.html";
      }, 3000);
      }
    })
}


function replace() {
  document.getElementById("div1").style.display="none";
  document.getElementById("div2").style.display="block";
}


function closeCourse(){
  const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-right',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
  })

  Toast.fire({
      icon: 'error',
      title: 'You closed the course!'
  });
  setTimeout(function(){
      window.location.href = "myCourses.html";
  }, 3000);
  
}

//this function is used to submit the quiz
function submit(){
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ml-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You want to start the quiz!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, start quiz!',
      cancelButtonText: 'No, cancel it!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Success!',
          'The quiz begins in 3 seconds.',
          'success'
        );
        setTimeout(function(){
          window.location.href = "quizzes_asssignment_plateform.html";
      }, 3000);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'You cancelled to start the quiz. Try again later when you are ready!',
          'error'
        );
        setTimeout(function(){
          window.location.href = "quizzes_asssignment_plateform.html";
      }, 3000);
      }
    })
}

function postQuestion(){
  const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
  })

  Toast.fire({
      icon: 'success',
      title: 'You have posted your question successfully!'
  });
  setTimeout(function(){
      window.location.href = "myCourses.html";
  }, 3000);
  
}
