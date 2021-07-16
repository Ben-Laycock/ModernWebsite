$( document ).ready(function() {
    $("body").scrollTop(0);
    var numberOfSections = document.getElementsByClassName("section").length;

    let progress = document.getElementById("progressBar");

    updateDisplay();
    $(window).resize(function() {
        updateDisplay();
    });

    $(window).scroll(function() {
        let sections = document.getElementsByClassName("section");
        var totalHeight = 0;
        for (let i = 0; i < sections.length-1; i++) {
            totalHeight += sections[i].offsetHeight;
        }
        console.log(totalHeight);

        var maxScrollTop = $("#container").height();
        var maxForAllSections = maxScrollTop*numberOfSections;
        $("body").css("height", maxForAllSections);

        var test = totalHeight;
        let progressWidth = (window.pageYOffset / test) * 100;
        progress.style.width = progressWidth + "%";

        var scroll = $("body").scrollTop();
        var maxHeight = $(document).height();
        var value = (scroll / maxHeight) * 100;

        $("#container").css("left", -value*numberOfSections + "%");
    });
});

function updateDisplay()
{
    let width = $("body").width();
    $("#container").css("position", "fixed");
    $("#container").css("display", "flex");

    $(".flexContainer").css("flex-wrap", "wrap");
    $(".flexContainer").css("flex-direction", "row");
    if (width < 1000)
    {
        $("#container").css("position", "initial");
        $("#container").css("display", "initial");

        $(".flexContainer").css("flex-wrap", "no-wrap");
        $(".flexContainer").css("flex-direction", "column");
    }
}