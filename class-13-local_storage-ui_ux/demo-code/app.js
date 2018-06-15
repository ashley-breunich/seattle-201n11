//all the data

var allAvocados = [];

//constructor and instances 
function Avocado(name, path, shown, votes) {
    this.name = name;
    this.path = path;
    this.timesShown = shown;
    this.votes = votes;
    allAvocados.push(this);
}

function instantiateAvocados() {
    var hand = new Avocado('hand', 'img/avocado-hand.png', 0, 0);
    var cartoon = new Avocado('cartoon', 'img/avoCartoon.jpg', 0, 0);
    var hass = new Avocado('hass', 'img/hass.jpg', 0, 0);
    var ripe = new Avocado('ripe', 'img/ripe-avocado.png', 0, 0);
    var bird = new Avocado('bird', 'img/avocado-bird.jpg', 0, 0);
}

//image and voting functions
var tracker = {
    chartLabels: [],
    chartVotes: [],
    img1: document.getElementsByClassName('img1')[0],
    img2: document.getElementsByClassName('img2')[0],
    displaySection: document.getElementById('display'),
    resultsButton: document.getElementById('button'),

    //now we need a way to randomize the img
    randomIndex: function(arr) {
        return Math.floor(Math.random() * arr.length);
    },
    getIndices: function(arr) {
        var ind1 = this.randomIndex(arr);
        var ind2 = this.randomIndex(arr);

        //to prevent two of the same images at the same time
        while(ind1 === ind2) {
            ind2 = this.randomIndex(arr);
        }
        return[ind1, ind2];
    },
    
    displayPics: function() {
        var indices = this.getIndices(allAvocados);
        var leftImg = allAvocados[indices[0]];
        var rightImg = allAvocados[indices[1]];

        this.img1.src = leftImg.path;
        this.img2.src = rightImg.path;

        this.img1.id = leftImg.name;
        this.img2.id = rightImg.name;
//counter for how many times each image was shown
        leftImg.timesShown += 1;
        rightImg.timesShown += 1;
    },
//counter for the votes
    tallyVote: function(id) {
        for(var avo of allAvocados) {
            if (avo.name === id) {
                avo.votes += 1;
            }
        }
        //saving to local storage
        //stringify turns into JSON a string, single data type
        var strAvocados = JSON.stringify(allAvocados);
        localStorage.setItem('avocados', strAvocados);
    }, 

    //chart functions

    updateChartData: function() {
        for(var i = 0; i < allAvocados.length; i++) {
            this.chartLabels[i] = allAvocados[i].name;
            this.chartVotes[i] = allAvocados[i].votes;
        }
    },

    makeChart: function() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        tracker.updateChartData();

        var chart = new Chart(ctx, {
            type: "bar", 
            data: {
                labels: tracker.chartLabels,
                datasets: [
                    {
                        label: "Votes",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
                        hoverBorderColor: "rgba(255, 99, 132, 1)",
                        data: tracker.chartVotes
                    }
                ]
            }
        });
    }
};

//event listeners

tracker.displaySection.addEventListener('click', function(event) {
    if(event.target.id !== 'display') {
        tracker.tallyVote(event.target.id);
        tracker.displayPics();
    }
});
//event handler

tracker.resultsButton.addEventListener('click', tracker.makeChart);

//get avocados from localstorage
//IIFE immediately invoked function expression
(function getLocalStorage() {
    if(localStorage.avocados) {
        var strAvocados = localStorage.getItem('avocados');
        var avocados = JSON.parse(strAvocados);
        console.log(avocados); 
        for(var avo of avocados) {
            console.log(avo);
            var newAvo = new Avocado(avo.name, avo.path, avo.timesShown, avo.votes);
        }
    } else {
        instantiateAvocados();
    }
})();
//this will show the pics first

tracker.displayPics();