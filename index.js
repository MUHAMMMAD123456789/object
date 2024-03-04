let team = {

    team_name: "Manchester City",
    founded: 1880,
    brand_worth: 'five billon dollars',
    team_worth: 'two billion dollars',
    main_coach: 'Pep Gvardiola',
    Leage: "English Premier League",

    playes: [
        {
            name: "Erling Haaland",
            market_price: 200000000,
            pitch_number: 9,
            position: "Forward"

        },

        {
            Jack_Grilish: {
                market_price: 120000000,
                pitch_number: 10,
                position: "Midfield"
            }
        },

        {
            Kevin_DeBruyne: {
                market_price: 60000000,
                pitch_number: 17,
                position: "Midfield"
            }
        },
    ]

}





let car = {
    model: 'malibu',
    color: 'black',
    engine: 3.5,
    biten: false,
    series: 'premier',
    additional: {
        year: 2023,
        country: 'Uzbekistan',
        quater: 4,
        mileage: 700,
    },
    wheel_air: [80, 70, 0, 20],

    age: function () {
        let curr_year = new Date().getFullYear()
        let car_year = this.additional.year
        return curr_year - car_year
    }
}


console.log(
    car.age()
);

// arr.forEach(i => {
//     if (i.completed) {
//         a.count++,
//         a.text.push(i.title)
//     } else {
//         b.count++,
//         b.text.push(i.title)
//     }
// });


// console.log(a);
// console.log(b);



let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]
let a = {
    count: 0,
    text: []
}

let b = {
    count: 0,
    text: []
}


arr.forEach( (i) => { if(  i.completed === true) {
   a.count++ && a.text.push(i.title)
} else {
    b.count++ && b.text.push(i.title)
}})

console.log(a);
console.log(b);












