const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_rl2adad";
  const templateID = "template_yjm3hz9";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      Swal.fire("Message Sent");
    },
    (err) => {
            console.log(err);
            console.log(JSON.stringify(err));
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Message was not Sent",
        footer:
          `<button data-error='${JSON.stringify(err)}' onclick="displayError(this)">Display issue</button>`,
      });
    }
  );
});

function displayError(elem){
    let error = elem.getAttribute('data-error');
     Swal.fire(`${error}`);
     console.log(error);
}
