/*
	AUTHOR: SYLVESTER KLIROWSKI
*/


/* MESSAGE SUBMIT */
var contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contactForm.reset();

    // Thank you toast
    M.toast({ html: "<span>Thank you for your message. A confirmation has been sent to your email address. (Check the spam folder if you don't see it in your inbox)<span><button class=\"btn-flat toast-action\">Close</button>", displayLength: 6000 });

    // Close toast if 'close' clicked
    var toastInstance = M.Toast.getInstance(document.querySelector('.toast'));
    var toastCloseBtn = document.querySelector('.toast button');
    toastCloseBtn.addEventListener('click', ()=>{toastInstance.dismiss();})
})



/* SUBMIT FORM TO SERVER */

function submitForm() {
    // Initiate Variables With Form Content
    var message = $("#message").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    console.log(message + " " + name + " " + email + " " + phone);

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone
    });

    $.ajax({
        type: "POST",
        url: "php/contact-conf-email.php",
        data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone
    });
}