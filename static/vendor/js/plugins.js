// Avoid `console` errors in browsers that lack a console.
(function() {
    // parallax
    $(function () { "use strict"; function b() { var b = $(this).outerHeight(), c = b / 2, d = a / 2, e = $(this).offset().top, f = $(window).scrollTop(), g = $(this).attr("data-parallax-speed"), h = e - a, i = e + b, j = e - a, k = c + e - (d + d / 2); h < 0 && (h = 0, i = a); var l = (f - h) / (i - h); l *= 100, l *= g, l = l.toFixed(2); var m = (f - j) / (k - j); m = m.toFixed(2), m >= 1 && (m = 1), $(this).css("background-position", "center " + l + "%") } var a = $(window).height(); $(".parallax").each(b), $(window).on("scroll", function (a) { $(".parallax").each(b) }) });

}());

// Place any jQuery/helper plugins in here.
