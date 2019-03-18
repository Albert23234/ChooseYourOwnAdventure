// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "kitchen_background_by_tikamifirebird.jpg",
    levels: {

        start: {
            message: "You are in the kitchen",
            choices: [{
                    text: "make a sandwhich",
                    nextLevel: "sandwhich",
                },

                {
                    text: "heat up some pizza",
                    nextLevel: "fridge",
                },
            ]
        },
        sandwhich: {
            background_image: "sandwich.jpg",
            music: "Zelda-Overworld.mp3",
            message: "That was delicious ",
            choices: [{
                    text: "next",
                    nextLevel: "fooditem",
                }

            ]
        },

    fooditem: {
        background_image: "104161884-empty-open-fridge-with-shelves-white-refrigerator-background.jpg",
        music: "Zelda-Labrynth.mp3",
        message: "Drink",
        choices: [{
            text: "water",
            nextLevel: "someotherfood",
        },
        {
            text: "juice",
            nextLevel: "someotherfood",
            
        }
        
         ]
    },

    someotherfood: {
        background_image: "intro-bg.jpg",
        music: "Stranger-Things-Theme.mp3",
        message: "ei",
        choices: [{
            text: "hielo",
            nextLevel: "otherfood",
        }, ]
    },

    fridge: {
        background_image: "29722404-appetizing-background-pepperoni-pizza-closeup-filling-the-frame-.jpg",
        music: "Final-Fantasy-7-Boss-Battle.mp3",
        message: "You come across a fire monster or something!",
        choices: [{
                text: "grab dominoes",
                nextLevel: "start",
            },
            {
                text: "pizza hut",
                nextLevel: "close",
            },
        ]
    },




close:{
   background_image:"1212567.jpg",
   music:"98_Lost_Mine.mp3",
    message:"hello",
    choices: [{
        text: "cookie",
        nextLevel:"start",
    },
    {
        text:"or get 2",
        NextLevel:"dish",
      
    }]

    
},
dish:{
    field: {
        message: "Some adventurer you are...",
        choices: [{
            text: "Start over",
            nextLevel: "start",
        }, ]
    },


}
}
};
