$(document).ready(function(){
    $("#ipsit-signup").hide();
    $("#blb-content-2").hide();

    $("#animate-btn-1").click(function(){
        $("#blb").removeClass("add-animation-2");
        $("#blb").addClass("add-animation-1");
        $("#ipsit-login").hide(1000);
        $("#ipsit-signup").show(2000);
        $("#blb-content-1").hide(1000);
        $("#blb-content-2").show(2000);
    });

    $("#animate-btn-2").click(function(){
        $("#blb").removeClass("add-animation-1");
        $("#blb").addClass("add-animation-2");
        $("#blb-content-1").show(1000);
        $("#blb-content-2").hide(2000);
        $("#ipsit-signup").hide(1000);
        $("#ipsit-login").show(2000);
    });
});