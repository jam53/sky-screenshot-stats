import Chart from "chart.js/auto";

const ctx = document.getElementById("millisecondsPerDay_Week").getContext("2d");

let delayed;

let generatedData = JSON.parse(window.localStorage.getItem("generatedData")); //The Data generated by the web worker
let millisecondsPerDayWeek = generatedData.millisecondsPerDay_Week; //Array, Sunday - 0, Saturday - 6
millisecondsPerDayWeek.push(millisecondsPerDayWeek.shift()); //Monday - 0, Sunday - 6

millisecondsPerDayWeek = millisecondsPerDayWeek.map(milliseconds => milliseconds * (1 / 3600000));

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(58,123,213,1');
gradient.addColorStop(1, 'rgba(0,210,255,0.3');

const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const data = {
    labels,
    datasets: [
        {
            data: millisecondsPerDayWeek    ,
            label: "Amount Of Hours",
            fill: true,
            backgroundColor: gradient,
            borderColor: "#fff",
            color: "#fff",
            pointBackgroundColor: "#fff",
            tension: 0.4,
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 50 + context.dataIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: "#343434"
                },
            },
        },
    },
};

const myChart = new Chart(ctx, config);
