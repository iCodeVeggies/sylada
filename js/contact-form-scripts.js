/*
	AUTHOR: SYLVESTER KLIROWSKI
*/

$("#contactForm").submit(function (event) {
    event.preventDefault();
    //submitForm();
    $("#contactForm")[0].reset();

    // Thank you toast
    var $toastContent = $("<span>Thank you for your message. A confirmation has been sent to your email address. (Check the spam folder if you don't see it in your inbox)<span>").add($('<button class="btn-flat toast-action" id="dismiss-toast">X</button>'));
    Materialize.toast($toastContent, 15000);
    $(document).on('click', '#dismiss-toast', function() {
        $(this).parent().remove();
    });
    
});

/* SUBMIT FORM TO SERVER */

function submitForm(){
// Initiate Variables With Form Content
var message = $("#message").val();
var name = $("#name").val();
var email = $("#email").val();
var phone = $("#phone").val();

$.ajax({
    type: "POST",
    url: "../php/form-process.php",
    data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone
});

$.ajax({
    type: "POST",
    url: "../php/contact-conf-email.php",
    data: "message=" + message + "&name=" + name + "&email=" + email + "&phone=" + phone
});

}