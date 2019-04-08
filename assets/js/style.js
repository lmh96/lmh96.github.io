$(".nav-btn").on("click", function() {
    window.location=$(this).attr("href");
});

$(".project-tile").on("click", function() {
    window.open($(this).attr("href"), "_blank");
});