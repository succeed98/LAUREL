$(function () {
    // Initializing the iziModal plugin
    $("#modal").iziModal();
    $("#modalsAnswers").iziModal();
    $("#modalAddLessons").iziModal();

    $('select').awselect();



    // Pop-up for adding question
    $('.addQuizButtonn').click(function () {
        $('#modal').iziModal('open');
        $('#modal').iziModal('setTop', 100);
        $('#modal').iziModal('setBottom', 140);
        $('#modal').iziModal('setHeaderColor', '#5567FF');
        $('#modal').iziModal('setBackground', '#eeeeee');

    });

    // Pop-up for adding Answer
    $('.answerButton').click(function () {
        $('#modalsAnswers').iziModal('open');
        $('#modalsAnswers').iziModal('setTop', 100);
        $('#modalsAnswers').iziModal('setBottom', 140);
        $('#modalsAnswers').iziModal('setHeaderColor', '#4E6C8F');
        $('#modalsAnswers').iziModal('setBackground', '#eeeeee');

    });

      // Pop-up for adding Lesson
      $('.addLessonButton').click(function () {
        $('#modalAddLessons').iziModal('open');
        $('#modalAddLessons').iziModal('setTop', 100);
        $('#modalAddLessons').iziModal('setBottom', 140);
        $('#modalAddLessons').iziModal('setHeaderColor', '#4E6C8F');
        $('#modalAddLessons').iziModal('setBackground', '#eeeeee');

    });

    // $('#selectGrade').awselect({
    //     background: "#0f37a9", //the dark blue background
    //     active_background: "rgb(149, 211, 255)", // the light blue background
    //     placeholder_color: "#97bce0", // the light blue placeholder color
    //     placeholder_active_color: "#0f37a9", // the dark blue placeholder color
    //     option_color: "#405463", // the option colors
    //     vertical_padding: "15px", //top and bottom padding
    //     horizontal_padding: "20px", // left and right padding,
    //     immersive: false // immersive option, demonstrated at the next example
    // });

})


// Add Question button is clicked then do this:
function addQuestion() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
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
        title: 'Questions has been added successfully'
    });
    setTimeout(function () {
        window.location.href = "add_questions.html";
    }, 3000);
}

// Add Answer button is clicked then do this:
function addNewAnswer() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
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
        title: 'Your answer has been added successfully!'
    });
    setTimeout(function () {
        window.location.href = "detailed_answer_page.html";
    }, 3000);
}

// Add Lesson button is clicked then do this:
function addLessons() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
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
        title: 'Your answer has been added successfully!'
    });
    setTimeout(function () {
        window.location.href = "add_lessons_page.html";
    }, 3000);
}

// When the user clicks on the delete button, it should do this function
function deleteQuestion() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-danger ml-3',
            cancelButton: 'btn btn-success'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Deleted!',
                'You have deleted question successfully!.',
                'success'
            );
            setTimeout(function () {
                window.location.href = "add_questions.html";
            }, 3000);
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'You cancelled the request to delete the question',
                'error'
            );
            setTimeout(function () {
                window.location.href = "add_questions.html";
            }, 3000);
        }
    })
}


// When the user clicks on the delete button, it should do this function
function deleteQuestion_Answer() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-danger ml-3',
            cancelButton: 'btn btn-success'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Deleted!',
                'You have deleted Answer successfully!.',
                'success'
            );
            setTimeout(function () {
                window.location.href = "add_questions.html";
            }, 3000);
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'You cancelled the request to delete the Answer',
                'error'
            );
            setTimeout(function () {
                window.location.href = "detailed_answer_page.html";
            }, 3000);
        }
    })
}


// Audio Upload
const audioEl = document.getElementById('audio');

// file upload
document.getElementById('upload').addEventListener( 'change', e => {
	const fileBlob = e.target.files[0];

	if ( fileBlob ) {
		audioEl.src = URL.createObjectURL( fileBlob );
		audioEl.play();
	}
});

//Video Upload
document.getElementsByTagName('input')[0].addEventListener('change', function (event) {
    var file = event.target.files[0];
    var fileReader = new FileReader();
    if (file.type.match('image')) {
        fileReader.onload = function () {
            var img = document.createElement('img');
            img.src = fileReader.result;
            document.getElementById('videos')[0].appendChild(img);
        };
        fileReader.readAsDataURL(file);
    } else {
        fileReader.onload = function () {
            var blob = new Blob([fileReader.result], { type: file.type });
            var url = URL.createObjectURL(blob);
            var video = document.createElement('video');
            var timeupdate = function () {
                if (snapImage()) {
                    video.removeEventListener('timeupdate', timeupdate);
                    video.pause();
                }
            };
            video.addEventListener('loadeddata', function () {
                if (snapImage()) {
                    video.removeEventListener('timeupdate', timeupdate);
                }
            });
            var snapImage = function () {
                var canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                var image = canvas.toDataURL();
                var success = image.length > 100000;
                if (success) {
                    var img = document.createElement('img');
                    img.src = image;
                    document.getElementById('videos')[0].appendChild(img);
                    URL.revokeObjectURL(url);
                }
                return success;
            };
            video.addEventListener('timeupdate', timeupdate);
            video.preload = 'metadata';
            video.src = url;
            // Load video in Safari / IE11
            video.muted = true;
            video.playsInline = true;
            video.play();
        };
        fileReader.readAsArrayBuffer(file);
    }
});