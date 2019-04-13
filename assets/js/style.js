$(document).on("click", "#nav-show", function() {
    let nav = $("nav");
    nav.css("height", "50px");
    $(this).removeAttr("id");
    $(this).attr("id", "nav-hide");
});

$(document).on("click", "#nav-hide", function() {
    let nav = $("nav");
    nav.css("height", "0px");
    $(this).removeAttr("id");
    $(this).attr("id", "nav-show");
});

$(".fa-github").on("click", function() {
    window.open("https://github.com/lmh96", "_blank");
})

$(".fa-linkedin-in").on("click", function() {
    window.open("https://www.linkedin.com/in/logan-hill-86828b166", "_blank");
})

$(".fa-code").on("click", function() {
    window.open($(this).attr("href"), "_blank");
});

$(".project-div").on("click", function(e) {
    window.open($(this).attr("href"), "_blank");
});