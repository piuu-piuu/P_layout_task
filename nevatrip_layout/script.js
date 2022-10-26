function count_buttons() {
    let times = document.querySelectorAll('.time-button');
    let times_count = times.length;
    if (times_count > 4) {
        times.forEach((b, i) => {
            if (i > 2)
                b.style.display = "none"
        })
        times[times_count - 1].innerHTML = "ещё...";
        times[times_count - 1].style.display = "block";
    }
};

function show_buttons() {
    let buttons = document.querySelectorAll('.time-button');
    buttons.forEach((b, i) => { b.style.display = "block" })
    buttons[buttons.length - 1].style.display = "none";
}