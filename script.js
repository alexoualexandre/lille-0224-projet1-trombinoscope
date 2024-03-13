let button = document.getElementById('button');
setInterval(function () {
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 50) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    })
}, 10);