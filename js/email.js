const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const serviceID = 'default_service';
        const templateID = 'template_vjsmbci';

   
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {

            }, (err) => {
                Swal.fire('Message not Sent', '', JSON.stringify(err));
            });
    });

                   