$(function(){
    $.ajax({
        url:"shade.html",
        type:"get",
        success: function(result) {
            $(result).replaceAll("#shade");
            $(`<link rel="stylesheet" href="css/shade.css">`).appendTo("head");
        }
    });
})