$( document ).ready(function() {
    $("body").scrollTop(0);
    var numberOfSections = document.getElementsByClassName("section").length;

    let progress = document.getElementById("progressBar");

    $(window).scroll(function() {
        var maxScrollTop = $("#container").height();
        var maxForAllSections = maxScrollTop*numberOfSections;
        $("body").css("height", maxForAllSections);

        var test = maxScrollTop*(numberOfSections-1);
        let progressWidth = (window.pageYOffset / test) * 100;
        progress.style.width = progressWidth + "%";

        var scroll = $("body").scrollTop();
        var maxHeight = $(document).height();
        var value = (scroll / maxHeight) * 100;

        $("#container").css("left", -value*numberOfSections + "%");
    });
});