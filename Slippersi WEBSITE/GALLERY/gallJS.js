window.onload = function() {
    var main = document.getElementById("main").getElementsByTagName("img")[0],
        images = document.getElementById("thumb").getElementsByTagName("img"),
        j = 0;

    var startTimer = function() {
        stillTimer = setInterval(function() {
            j = (j < 3) ? ++j : 0;
            main.src = images[j].src;

        }, 10000);
    }

    startTimer();

    for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(evt) {
            clearInterval(stillTimer);
            main.src = evt.target.src;
            ++j;
            startTimer();
        });
    };
}