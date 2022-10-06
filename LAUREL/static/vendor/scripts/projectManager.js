$(function () {
    // Initializing the iziModal plugin
    $("#modal").iziModal();
    $("#modals").iziModal();
    $("#modalss").iziModal();
    $("#modalsss").iziModal();
    $("#modalChooseGrade").iziModal();
    $("#modalAnnouncement").iziModal();
    $("#modalTotalTopics").iziModal();
    $("#modalEditStudents").iziModal();
    $("#modalUploadStudents").iziModal();
    $("#modalEvents").iziModal();
    $("#modalChooseClasses").iziModal();

    $('select').awselect();

    // Pop-up for adding classes
    $('.classes').click(function () {
        $('#modal').iziModal('open');
        $('#modal').iziModal('setTop', 100);
        $('#modal').iziModal('setBottom', 140);
        $('#modal').iziModal('setHeaderColor', '#5567FF');
        $('#modal').iziModal('setBackground', '#eeeeee');

    });

    // Pop-up for adding subjects
    $('.subjects').click(function () {
        $('#modals').iziModal('open');
        $('#modals').iziModal('setTop', 100);
        $('#modals').iziModal('setBottom', 160);
        $('#modals').iziModal('setHeaderColor', '#A200FF');
        $('#modals').iziModal('setBackground', '#eeeeee');

    });

    //Pop-up for adding Teachers
    $('.teachers').click(function () {
        $('#modalss').iziModal('open');
        $('#modalss').iziModal('setTop', 100);
        $('#modalss').iziModal('setBottom', 100);
        $('#modalss').iziModal('setHeaderColor', '#04AF04');
        $('#modalss').iziModal('setBackground', '#eeeeee');

    });

    //Pop-up for adding Students
    $('.students').click(function () {
        $('#modalsss').iziModal('open');
        $('#modalsss').iziModal('setTop', 100);
        $('#modalsss').iziModal('setBottom', 100);
        $('#modalsss').iziModal('setHeaderColor', '#E4A93C');
        $('#modalsss').iziModal('setBackground', '#eeeeee');

    });

    //Project Manager Student section
    //Pop-up for choosing grade
    $('.choosesgrades').click(function () {
        $('#modalChooseGrade').iziModal('open');
        $('#modalChooseGrade').iziModal('setTop', 100);
        $('#modalChooseGrade').iziModal('setBottom', 100);
        $('#modalChooseGrade').iziModal('setHeaderColor', '#4E6C8F');
        $('#modalChooseGrade').iziModal('setBackground', '#eeeeee');

    });

    //Project Manager Total Topic
    //Pop-up for Seletion
    $('.subject2Total').click(function () {
        $('#modalTotalTopics').iziModal('open');
        $('#modalTotalTopics').iziModal('setTop', 100);
        $('#modalTotalTopics').iziModal('setBottom', 100);
        $('#modalTotalTopics').iziModal('setHeaderColor', 'blue');
        $('#modalTotalTopics').iziModal('setBackground', '#eeeeee');

    });

    //Project Manager Announcement section
    //Pop-up for adding announcement
    $('.addAnnouncements').click(function () {
        $('#modalAnnouncement').iziModal('open');
        $('#modalAnnouncement').iziModal('setTop', 100);
        $('#modalAnnouncement').iziModal('setBottom', 100);
        $('#modalAnnouncement').iziModal('setHeaderColor', '#4E6C8F');
        $('#modalAnnouncement').iziModal('setBackground', '#eeeeee');

    });

    //Pop-up for editting Students
    $('.student').click(function () {
        $('#modalEditStudents').iziModal('open');
        $('#modalEditStudents').iziModal('setTop', 100);
        $('#modalEditStudents').iziModal('setBottom', 100);
        $('#modalEditStudents').iziModal('setHeaderColor', '#128EC0');
        $('#modalEditStudents').iziModal('setBackground', '#eeeeee');

    });

    //Pop-up for editting Students
    $('.addStudentButton').click(function () {
        $('#modalEditStudents').iziModal('open');
        $('#modalEditStudents').iziModal('setTop', 100);
        $('#modalEditStudents').iziModal('setBottom', 100);
        $('#modalEditStudents').iziModal('setHeaderColor', '#128EC0');
        $('#modalEditStudents').iziModal('setBackground', '#eeeeee');

    });

    //Pop-up for editting Students
    $('.addstudentButton').click(function () {
        $('#modalsss').iziModal('open');
        $('#modalsss').iziModal('setTop', 100);
        $('#modalsss').iziModal('setBottom', 100);
        $('#modalsss').iziModal('setHeaderColor', '#128EC0');
        $('#modalsss').iziModal('setBackground', '#eeeeee');

    });

    //Pop-up for Upload Students
    $('.uploadStudentButton').click(function () {
        $('#modalUploadStudents').iziModal('open');
        $('#modalUploadStudents').iziModal('setTop', 100);
        $('#modalUploadStudents').iziModal('setBottom', 100);
        $('#modalUploadStudents').iziModal('setHeaderColor', '#128EC0');
        $('#modalUploadStudents').iziModal('setBackground', '#eeeeee');

    });

    //Pop-up for creating new events
    $('.createEvents').click(function () {
        $('#modalEvents').iziModal('open');
        $('#modalEvents').iziModal('setTop', 100);
        $('#modalEvents').iziModal('setBottom', 100);
        $('#modalEvents').iziModal('setHeaderColor', '#128EC0');
        $('#modalEvents').iziModal('setBackground', '#eeeeee');

    });

    //Pop-up for creating new events
    $('.showChooseClassesi').click(function () {
        $('#modalChooseClasses').iziModal('open');
        $('#modalChooseClasses').iziModal('setTop', 100);
        $('#modalChooseClasses').iziModal('setBottom', 100);
        $('#modalChooseClasses').iziModal('setHeaderColor', '#128EC0');
        $('#modalChooseClasses').iziModal('setBackground', '#eeeeee');

    });


    $(function () {
        $('#example').DataTable();
    });

    $(function () {
        $('#expired_list').DataTable();
    });

});



$(function () {
    $('#selectGrade').awselect({
        background: "#0f37a9", //the dark blue background
        active_background: "rgb(149, 211, 255)", // the light blue background
        placeholder_color: "#97bce0", // the light blue placeholder color
        placeholder_active_color: "#0f37a9", // the dark blue placeholder color
        option_color: "#405463", // the option colors
        vertical_padding: "15px", //top and bottom padding
        horizontal_padding: "20px", // left and right padding,
        immersive: false // immersive option, demonstrated at the next example
    });
});


//On click of the add class button
function addClasses() {
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
        title: 'Class Added Successfully'
    })
}

//On click of the add subject button
function addSubject() {
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
        title: 'Subjects Added Successfully'
    })
}

//On click of the add teacher button
function addTeachers() {
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
        title: 'Teacher Added Successfully'
    })
}

//On click of the add student button
function addStudent() {
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
        title: 'Student Added Successfully'
    })
}

// Promote Student button when onClick
function promoteStudents() {
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
        title: 'Promoted Successfully'
    })
}

// Publish Announcement button is clicked then do this:
function addAnnouncement() {
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
        icon: 'success',
        title: 'Announcement Published Successfully'
    })
}

// Publish upload button is clicked then do this:
function uploadStudentExcel() {
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
        title: 'Student excel uploaded Successfully'
    });
    setTimeout(function () {
        window.location.href = "students.html";
    }, 3000);

}

// Publish upload Excel button is clicked then do this:
function cancelUploadExcel() {
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
        title: 'Student excel uploaded Successfully'
    });
    setTimeout(function () {
        window.location.href = "students.html";
    }, 3000);

}


// Publish create events button is clicked then do this:
function creAteEvents() {
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
        icon: 'success',
        title: 'Event created successfully'
    });
    setTimeout(function () {
        window.location.href = "events.html";
    }, 3000);

}



// When the user clicks on the delete button, it should do this function

function deleteForever() {
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
                'Your file has been deleted.',
                'success'
            );
            setTimeout(function () {
                window.location.href = "students.html";
            }, 1000);
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your file is safe :)',
                'error'
            );
            setTimeout(function () {
                window.location.href = "students.html";
            }, 1000);
        }
    })
}

// When the user clicks on the update button, it should do this function

function updateStudent() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success ml-3',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, Update it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'List Updated!',
                'Student record has been updated successfully.',
                'success'
            );
            setTimeout(function () {
                window.location.href = "students.html";
            }, 1000);
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'You have cancelled to update student records :)',
                'error'
            );
            setTimeout(function () {
                window.location.href = "students.html";
            }, 1000);
        }
    })
}


//Function for selecting the subject
let expanded = false;
function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

//Image fille upload js here
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */











let input = document.getElementById('upload');
let infoArea = document.getElementById('upload-label');

input.addEventListener('change', showFileName);
function showFileName(event) {
    let input = event.srcElement;
    let fileName = input.files[0].name;
    infoArea.textContent = 'File name: ' + fileName;
}



// Show if the class teacher checkbox is checked YES
function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    } else {
        document.getElementById('ifYes').style.visibility = 'hidden';
    }
}


// document.querySelector('.select-field').addEventListener('click', () => {
//     document.querySelector('.list').classList.toggle('show');
//     document.querySelector('.down-arrow').classList.toggle('rotate180');

// });

