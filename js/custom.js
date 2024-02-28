$(document).ready(function(){
    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 2);
    timer = setInterval(function() {
    timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        // Timer done
        clearInterval(timer);
    
    } else {
        
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
    }

<<<<<<< HEAD
    
=======
    $("#btn-modal-signIn").click(function(){
        $("#pills-signUp-tab").removeClass("active");
        $("#pills-signUp").removeClass("show");
        $("#pills-signUp").removeClass("active");
        $("#pills-signIn-tab").addClass("active");
        $("#pills-signIn").addClass("show");
        $("#pills-signIn").addClass("active");
    })

    $("#btn-modal-signUp").click(function(){
        $("#pills-signUp-tab").addClass("active");
        $("#pills-signUp").addClass("show");
        $("#pills-signUp").addClass("active");
        $("#pills-signIn-tab").removeClass("active");
        $("#pills-signIn").removeClass("show");
        $("#pills-signIn").removeClass("active");
    })
    $("#target-form-reset").click(function(){
        $("#pills-tab").hide();
        $(".reset-password").show();
        $("#login-popup").hide();
    })
    $("#returnBack").click(function(){
        $("#pills-tab").show();
        $(".reset-password").hide();
        $("#login-popup").show();
    })
>>>>>>> ead897a16f9617c16d509b894927e231ec7a27fc
});