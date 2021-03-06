import Chart from "chart.js/auto";

const ctx = document.getElementById("screenshotsPerMonth_Playtime").getContext("2d");

let delayed;

let generatedData = JSON.parse(window.localStorage.getItem("generatedData")); //The Data generated by the web worker
let screenshotsPerMonth_Playtime = generatedData.screenshotsPerMonth_Playtime; //Array, 0 = jan, 11 = dec

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(58,123,213,1');
gradient.addColorStop(1, 'rgba(0,210,255,0.3');

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const data = {
    labels,
    data: screenshotsPerMonth_Playtime,
    datasets: [
        {
            label: "Amount Of Screenshots",
            data: screenshotsPerMonth_Playtime,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(204, 88, 3)',
                'rgb(193, 247, 220)',
                'rgb(189, 160, 188)',
                'rgb(231, 14, 2)',
                'rgb(185, 230, 255)',
                'rgb(27, 153, 139)',
                'rgb(32, 44, 89)',
                'rgb(144, 103, 198)',
                'rgb(240, 162, 2)',
            ],
            hoverOffset: 20,
        },
    ],
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "right",
            }
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 100 + context.dataIndex * 100;
                }
                return delay;
            },
        },
    }
};

const myChart = new Chart(ctx, config);
