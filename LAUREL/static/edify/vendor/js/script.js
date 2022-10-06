function sendRecovery(){
    swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
}

// $(function(){
//     $(".login").click (function(){
//         Swal.fire({
//             position: 'center',
//             icon: 'success',
//             title: 'Your work has been saved',
//             showConfirmButton: false,
//             timer: 1500
//           })
//     })
// })

// function sendRecovery(id){
//     const swalWithBootstrapButtons = Swal.mixin({
//         customClass: {
//           confirmButton: 'btn btn-success mx-2',
//           cancelButton: 'btn btn-danger mx-2'
//         },
//         buttonsStyling: false
//       })
      
//       swalWithBootstrapButtons.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!',
//         reverseButtons: true
//       }).then((result) => {
//         if (result.isConfirmed) {
//             window.location.href="delete_buildingsOtherStructure.php?delete_id="+id;
//           swalWithBootstrapButtons.fire(
//             'Deleted!',
//             'Your file has been deleted.',
//             'success'
//           )
//         } else if (
//           /* Read more about handling dismissals below */
//           result.dismiss === Swal.DismissReason.cancel
//         ) {
//           swalWithBootstrapButtons.fire(
//             'Cancelled',
//             'Your imaginary file is safe :)',
//             'error'
//           )
//         }
//       })
// }