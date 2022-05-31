import Chart from "chart.js/auto";

const ctx = document.getElementById("myChart").getContext("2d");

let delayed;

let validFilesAmount = JSON.parse(window.localStorage.getItem("validFilesAmount")); //Amount of files that will be used to generate the stats
let totalFiles = JSON.parse(window.localStorage.getItem("totalFiles")); //The amount of files that the user uploaded
let creationDates = JSON.parse(window.localStorage.getItem("creationDates")); //The creationDates of all the valid screenshots

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
            data: [211, 326, 165, 350, 420, 370, 500],
            label: "Amount Of Screenshots Per Day Of The Week",
            fill: true,
            backgroundColor: gradient,
            borderColor: "#fff",
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
            y: {
                ticks: {
                    callback: function (value){
                        return "$" + value + "m";
                    },
                },
            },
        },
    },
};

const myChart = new Chart(ctx, config);
