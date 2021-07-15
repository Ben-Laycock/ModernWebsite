$( document ).ready(function() {
    $("body").scrollTop(0);
    var numberOfSections = document.getElementsByClassName("section").length;

    $(window).scroll(function() {
        var maxScrollTop = $("#container").height();
        var maxForAllSections = maxScrollTop*numberOfSections;
        $("body").css("height", maxForAllSections);

        var scroll = $("body").scrollTop();
        var maxHeight = $(document).height();
        var value = (scroll / maxHeight) * 100;

        $("#container").css("left", -value*numberOfSections + "%");
    });
});