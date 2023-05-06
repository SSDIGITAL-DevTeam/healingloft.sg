const btnSubmit = document.getElementById("submit-button");
const formAppointment = document.getElementById("form-appointment");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  //   let dataAppointment = {};

  const nameValue = formAppointment.elements["name"].value;
  const phoneValue = formAppointment.elements["phone"].value;
  const emailValue = formAppointment.elements["email"].value;
  const dateValue = formAppointment.elements["date"].value;
  const timeValue = formAppointment.elements["time"].value;
  const messageValue = formAppointment.elements["message"].value;

  //   dataAppointment = {
  //     nameValue,
  //     phoneValue,
  //     emailValue,
  //     dateValue,
  //     timeValue,
  //     messageValue,
  //   };

  //   console.log(dataAppointment);

  const fromEmail = "gardaatwork@gmail.com";
  const fromName = "The Healing Loft";
  const formattedFrom = `${fromName} <${fromEmail}>`;

  if (
    nameValue === "" ||
    phoneValue === "" ||
    emailValue === "" ||
    dateValue === "" ||
    timeValue === "" ||
    messageValue === ""
  ) {
    alert("Fill the form please");
  } else {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "gardaatwork@gmail.com",
      Password: "E23AF35E6F82E23B9B0D5B65A5565DB5777C",
      To: "gardarevs@gmail.com",
      From: formattedFrom,
      Subject: "New From Appointment - The Healing Loft",
      Body: `
        Hi, New appointment is here.<br><br>
        Name: ${nameValue} <br>
        Phone Number: ${phoneValue} <br>
        Email Address: ${emailValue} <br>
        Date: ${dateValue} <br>
        Time: ${timeValue} <br>
        Message: ${messageValue} <br><br>
        Thank You
        `,
    }).then((message) => alert(message + ", Appointment Sent Successfully"));
  }
});
