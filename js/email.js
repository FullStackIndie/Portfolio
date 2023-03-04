const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const serviceID = 'service_rl2adad';
        const templateID = 'template_yjm3hz9';

   
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                Swal.fire('Message Sent');
            }, (err) => {
                Swal.fire('Message not Sent', '', JSON.stringify(err));
            });
    });
