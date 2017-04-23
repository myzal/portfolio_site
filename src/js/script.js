$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });
    $("#navbar-collapse-main a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    $('input,textarea').click(function () {
        $(this).removeAttr('placeholder');
    });

    $('#myCarousel').carousel({
        interval: false
    });


});

$(function () {
    $("form[name='contact-with-me']").validate({


        rules: {

            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            }
            ,
            subject: "required",
            message: "required",
            rodo: "required"

        }
        ,
        messages: {
            firstname: "Enter your name",
            lastname: "Enter your surname",
            subject: "Enter subject of message",
            message: "Enter message",
            email: "Enter correct email",
            rodo: "You must accept this condition"
        }
        ,
        errorPlacement: function (error, element) {
            console.log('xx');
            if (element.attr('id') === 'rodo') {
                console.log('test');
                element.after(error);
            }
            else element.attr("placeholder", error.text());
        },
        debug: true,

        submitHandler: function (form) {
            $.post('https://www.enformed.io/aaalkga0', //post
                $("#contact-with-me").serialize(),
                function (data, status) {
                    console.log(status);
                    if (status == 'success') {
                        $("#contact-with-me")[0].reset(); //reset fields
                        $('#contact-with-me').css('visibility', 'hidden');
                        $(".form-result").show(); //show confirmation message
                        console.log('message send');
                    }
                });
            return false;


        }
    })
        ;
});


