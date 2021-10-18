$(document).ready(function () {
    // Hero Section FUll Height
    $(function () {
        var windowH = $(window).height();
        var wrapperH = $(".hero").height();
        if (windowH > wrapperH) {
            $(".hero").css({ height: $(window).height() + "px" });
        }
        $(window).resize(function () {
            var windowH = $(window).height();
            var wrapperH = $(".hero").height();
            var differenceH = windowH - wrapperH;
            var newH = wrapperH + differenceH;
            var truecontentH = $("#truecontent").height();
            if (windowH > truecontentH) {
                $(".hero").css("height", newH + "px");
            }
        });
    });
});

window.onload = function () {
    document
        .getElementById("contact-form")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs
                .sendForm(
                    "service_843fwul",
                    "template_46bbgcd",
                    "#contact-form",
                    "user_zBoj5z1K90Ujly6NVFJn8"
                )
                .then(
                    function () {
                        console.log("SUCCESS!");
                    },
                    function (error) {
                        console.log("FAILED...", error);
                    }
                );
            e.target.reset();
        });
};
