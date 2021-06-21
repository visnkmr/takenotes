// global vars
// var textAreaPaddtop = 15;
// var dataBarHeight = 40;
var futext="";

$(document).ready(function () {
    // set continer height
    setMainContHeight();

    // focus on load
    $("textarea").focus();
    // setInterval(function(){settext();},100);
    // resize funstions
    $(window).resize(function () {
        setMainContHeight()
    });

    // count 
    /*$("textarea").on('input keyup propertychange paste', function () {
        $("#characterCount").text($(this).val().length); //characters
        countRows(); //rows
        wordCount(); // word counter 
        $("#changeTime").text(getCurrentTime());// set last saved
    });*/

    $("#fontSize").on('change', function () {
        fontSize = $(this).val();
        changesize();
        // settext();
    });

    $("#startw").click(function(){
        futext = $("#textArea").val();
        // $("#textArea").text($(this).text());
        $("#textArea").val(futext+"\n"+gctsw()+"---Start");
        settext();
    });

    $("#stopw").click(function(){
        futext = $("#textArea").val();
        // $("#textArea").text($(this).text());
        $("#textArea").val(futext+"\n"+gctsw()+"---Stop");
        settext();
    });

    $("#date").click(function(){
        futext = $("#textArea").val();
        // $("#textArea").text($(this).text());
        $("#textArea").val(futext+"\n"+gcd()+"---");
        settext();
    });

    $("#time").click(function(){
        futext = $("#textArea").val();
        // $("#textArea").text($(this).text());
        $("#textArea").val(futext+"\n"+gct()+"---");
        settext();
    });
    scrollToBottom();
});

function changesize(){
    $("textarea").css("font-size", fontSize + "px");
}
// var tatext="";
function settext(){
    $("#characterCount").text($("textarea").val().length); //characters
        countRows(); //rows
        wordCount(); // word counter 
        $("#changeTime").text(getCurrentTime());// set last saved
        lstxt();
        // scrollToBottom();
         $("textarea").focus();

    // $("textarea")[0].selectionStart;
    // $("textarea")[0].selectionEnd;
    // $("textarea").setInterval('checkTextAreaValue()',50);

}
// set continer height
function setMainContHeight()
{
    topbar = $("#topdiv")[0].scrollHeight;
    bottombar = $("#bottomdiv")[0].scrollHeight;
    $("#textArea").height($(window).height() - (topbar + bottombar+90));
}

// count number of rows
function countRows() {
    var t = $("textarea")[0];
    $("textarea").focus();
    // $("textarea").val+="";
    $("#linecount").text(t.value.substr(0, t.selectionStart).split("\n").length);
    // $("#linecount").text(t.val().split("\n").length);
    
}

function getCurrentTime()
{
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes();

    return datetime;

}
function scrollToBottom() {
  $('textarea').scrollTop($('textarea')[0].scrollHeight);
}

function gcd()
{
    var currentdate = new Date();
    return currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear();

}
function gct()
{
    var currentdate = new Date();
    return currentdate.getHours() + ":"
                    + (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes();
}

function gctsw()
{
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " "
                    + currentdate.getHours() + ":"
                    + (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes();

    return datetime;

}

// word count
function wordCount(){

    var value = $('#textArea').val();

    if (value.length == 0) {
        $('#wordCount').html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    $('#wordCount').html(wordCount); //update word count on the UI

}

