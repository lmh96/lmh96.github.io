document = $("document");
header = $("header");
logo = $("#logo");
navBtn = $(".nav-btn");
git = $(".fa-github");
linkedin = $(".fa-linkedin-in");
main = $("#about-contents");
project = $("#projects-contents");
contact = $("#contact-contents");

mainTop = main.offset().top - 50;
projectTop = project.offset().top - 50;
contactTop = contact.offset().top - 50;

window.onscroll = function() {
    if(window.pageYOffset >= mainTop) {
        header.css("background", "#eeeeee");
        header.css("border-bottom", "solid #4d4d4d 2px");
        $("#about-btn").addClass("active");
        logo.css("color", "#4d4d4d");
        navBtn.css("color", "#4d4d4d");
        git.css("color", "#4d4d4d");
        linkedin.css("color", "#4d4d4d");
    }
    else {
        header.css("background", "none");
        header.css("border-bottom", "none");
        $("#about-btn").removeClass("active");
        logo.css("color", "white");
        navBtn.css("color", "white");
        git.css("color", "white");
        linkedin.css("color", "white");
    }
    if(window.pageYOffset >= projectTop) {
        $("#projects-btn").addClass("active");
        $("#about-btn").removeClass("active");
    }
    else {
        $("#projects-btn").removeClass("active");
    }
    if(window.pageYOffset >= contactTop) {
        $("#contacts-btn").addClass("active");
        $("#projects-btn").removeClass("active");
    }
    else {
        $("#contacts-btn").removeClass("active");
    }
}

logo.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
})

$("#about-btn").on("click", function() {
    $("html, body").animate({ scrollTop: window.innerHeight }, 500);
});

$("#projects-btn").on("click", function() {
    $("html, body").animate({ scrollTop: window.innerHeight * 2 }, 500);
});

$("#contacts-btn").on("click", function() {
    $("html, body").animate({ scrollTop: (window.innerHeight * 4) + 150}, 500);
});

git.on("click", function() {
    window.open("https://github.com/lmh96", "_blank");
})

linkedin.on("click", function() {
    window.open("https://www.linkedin.com/in/logan-hill-86828b166", "_blank");
})

$(".fa-code").on("click", function() {
    window.open($(this).attr("href"), "_blank");
});

$(".project-div").on("click", function(e) {
    window.open($(this).attr("href"), "_blank");
});