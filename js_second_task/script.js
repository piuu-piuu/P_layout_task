var route_dir = "из A в B";
var timeA = "18:00";
var timeB = null;
var count = 0;

function intoMinutes(hourMinute) {
    var parsed = hourMinute.split(":");
    return Number(parsed[0]) * 60 + Number(parsed[1]);
}

function intoHours(minutes) {

}

function dirSelect() {
    route_dir = document.getElementById('route').value;
    if (route_dir == "из B в A") {
        timeA = null;
        timeB = "18:30";
        document.getElementById('time').style.display = 'none';
        document.getElementById('time-back').style.display = 'block';
    } else if (route_dir == "из A в B") {
        timeA = "18:00";
        timeB = null;
        document.getElementById('time').style.display = 'block';
        document.getElementById('time-back').style.display = 'none';
    } else {
        timeA = "18:00";
        timeB = "18:30";
        document.getElementById('time').style.display = 'block';
        document.getElementById('time-back').style.display = 'block';
    }
}

function ticketA() {
    timeA = document.getElementById('time').value.split('(')[0];
    intoMinutes(timeA);
}

function ticketB() {
    timeB = document.getElementById('time-back').value.split('(')[0];
}

function result() {

    if ((timeB != null) && (intoMinutes(timeA) + 50 > intoMinutes(timeB))) {
        window.alert("Обратный билет выбран на слишком раннее время");
        return
    }

    if ((timeA != null) && (timeB != null)) { sum = 1200 } else { sum = 700 }
    count = document.getElementById('num').value;
    sum = sum * count;
    window.alert("Общая стоимость билетов в заказе " + sum);
    document.getElementById('num').value = 0;

}