const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const serviceID = 'default_service';
        const templateID = 'template_vjsmbci';

   Swal.fire({
             title: 'Do you want to save the changes?',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: `Send`,
                        denyButtonText: `Don't send`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            Swal.fire('Sent!', '', 'success')
                                 emailjs.sendForm(serviceID, templateID, this)
                                     .then(() => {
                                         btn.value = 'Send Email';

                                     }, (err) => {
                                         btn.value = 'Send Email';
                                         Swal.fire('Message not Sent', '', JSON.stringify(err));
                                     });
                        } else if (result.isDenied) {
                            Swal.fire('Message not Sent', '', 'info')
                        }
                    })
   
    });

                   