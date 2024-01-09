$(document).ready(function () {
    $("#stream1_btn").click(function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
    $("p").on("click", function () {
        $(".card_para").css("color", "red");
    });
    $("h2").mouseenter(function () {
        $(".card_head").css("background-color", "lightblue");
    });
    $("#bigger").mouseenter(function () {
        $("h2").css("font-size", "2em");
    });
    $("a").mouseenter(function () {
        $("body").css("background-color", "black");
    });
    $("a").mouseleave(function () {
        $("body").css("background-color", "grey");
    });
}); 