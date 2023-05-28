$('#contactForm')
    .validator()
    .on('submit', function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError()
            submitMSG(false, 'Did you fill in the form properly?')
        } else {
            // everything looks good!
            event.preventDefault()
            submitForm()
        }
    })

function submitForm() {
    // Initiate Variables With Form Content
    var name = $('#name').val()
    var email = $('#email').val()
    var msg_subject = $('#msg_subject').val()
    var message = $('#message').val()

    $.ajax({
        type: 'POST',
        url: 'php/form-process.php',
        data:
            'name=' +
            name +
            '&email=' +
            email +
            '&msg_subject=' +
            msg_subject +
            '&message=' +
            message,
        success: function (text) {
            if (text == 'success') {
                formSuccess()
            } else {
                formError()
                submitMSG(false, text)
            }
        },
    })
}

function formSuccess() {
    $('#contactForm')[0].reset()
    submitMSG(true, 'Message Submitted!')
}

function formError() {
    $('#contactForm')
        .removeClass()
        .addClass('shake animated')
        .one(
            'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
            function () {
                $(this).removeClass()
            }
        )
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = 'h3 text-center tada animated text-success'
    } else {
        var msgClasses = 'h3 text-center text-danger'
    }
    $('#msgSubmit').removeClass().addClass(msgClasses).text(msg)
}

// const btnSubmit = document.getElementById("submit-button");

//       btnSubmit.addEventListener("click", (e) => {
//         e.preventDefault();

//         Email.send({
//           Host: "smtp.elasticemail.com",
//           Username: "booking@isunworld.com",
//           Password: "8E9A20939F95B8721EEA09210D970BF5DEC3",
//           To: "gardarevs@gmail.com",
//           From: "dada",
//           Subject: "no-reply@isunworld.com",
//           Body: "Hi, This is John from The Healing Loft <br> Thank You",
//         }).then((message) => alert(message));
//       });
