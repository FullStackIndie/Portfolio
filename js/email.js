const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_vjsmbci';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                 Swal.fire({
             title: 'Do you want to save the changes?',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: `Save`,
                        denyButtonText: `Don't save`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            Swal.fire('Saved!', '', 'success')
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                    })
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

                   