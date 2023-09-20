var ngulang = 1;

setInterval(function() {
    document.getElementById('radio' + ngulang).checked = true;
    ngulang++;

    if(ngulang > 3) {
        ngulang = 1;
    }
}, 7500);