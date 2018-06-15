'use strict';
//first add the cdn link to the head of your html
//find the chart object in the console and inspect it ex: myChart, myChart.data, myChart.datasets[0].data
//the data renders how hight he bar chart will be
//data: [], will hold the votes for each product image
//Labels: ['red' etc] will hold the name for each product
//myChart.update() is the method you will need to keep an eye on
//ex: myChart.data.datasets[0].data[0] = 4 assigns a new value to it
//myChart.update() //should change the value and update the chart

//this holds the value for the votes of each product image
var data = [12, 19, 3, 5, 2, 3];
//this is the name for each product
var labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

var ctx = document.getElementById('chart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: labelColors,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: labelColors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});