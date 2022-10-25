// При клике на кнопку "Посчитать" показать результат с направлением, временем в пути, временем отправления и временем прибытия в часовом поясе пользователя.

// Например:

// Вы выбрали 4 билета по маршруту из A в B стоимостью 4000р.
// Это путешествие займет у вас 40 минут. 
// Теплоход отправляется в 12-00, а прибудет в 18-00.

// таблица времени - GMT+3
// 


var route_dir = "из A в B";
var timeA = "18:00";
var timeB = null;
var count = 0;

function intoMinutes(hourMinute) {
    var parsed = hourMinute.split(":");
    return Number(parsed[0]) * 60 + Number(parsed[1]);
}

function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours + ':' + minutes;
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
    let totaltime = 0;
    if ((timeB != null) && (intoMinutes(timeA) + 50 > intoMinutes(timeB))) {
        window.alert("Обратный билет выбран на слишком раннее время");
        return
    }
    if ((timeA != null) && (timeB != null)) {
        sum = 1200;
        totaltime = intoMinutes(timeB) - intoMinutes(timeA) + 50;

    } else {
        sum = 700;
        totaltime = 50;
    }
    count = document.getElementById('num').value;
    sum = sum * count;
    const d = new Date();
    const msk_offset = -(d.getTimezoneOffset() / 60 + 3);
    window.alert("Общая стоимость билетов в заказе " + sum + ". Время в пути " + toHoursAndMinutes(totaltime) + ' мск+' + msk_offset);
    document.getElementById('num').value = 0;
}