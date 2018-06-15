'use strict';

//wolf is the object
var wolf = {
    //key value pairs: name is key, value is Gray
    name: 'Gray',
    packNum: 9,
    gender: 'female',
    age: 7,
    territory: 'North Cascades',
    alpha: true,
    yellowEyes: true,
    family: {
        mate: {
            name: 'Black',
        },
        pups: ['Larry', 
        'Curly', 
        'Mo'
    ]
    },
    speak: function() {
        console.log('Howl, my name is ' + wolf.name + ' and I like to roam around in the ' + wolf.territory + '.');
    }

};
wolf.speak();

//this is a getter using dot notation to access, dot notation is more popular
console.log(wolf.age);

//if I want to add a pup I can access the pup array using dot notation 
//wolf.family.pups.push('Summer'); 
