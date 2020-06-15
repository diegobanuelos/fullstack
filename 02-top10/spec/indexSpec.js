let ejercicio = require('../src/index');


describe('Debería pasar las pruebas', () => {

    it('Letras y palabras', () => {
        expect(ejercicio.topWords('a')).toEqual([{word:'a', count: 1}]);
        expect(ejercicio.topWords('a a b')).toEqual([{word:'a', count: 2},{word:'b', count: 1}]);
        expect(ejercicio.topWords('a b b c c c')).toEqual([{word:'c', count: 3},{word:'b', count: 2},{word:'a', count: 1}]);
        expect(ejercicio.topWords('b b a a')).toEqual([{word:'a', count: 2},{word:'b', count: 2}]);
    });

    it ('Omitir puntuación', ()=>{
        expect(ejercicio.topWords('I won\'t go. She won\'t go either.')).toEqual([
            { word: 'go', count: 2 },
            { word: 'won\'t', count: 2 },
            { word: 'either', count: 1 },
            { word: 'i', count: 1 },
            { word: 'she', count: 1 }
        ]);

        expect (ejercicio.topWords('this \'ways\' are our ways.')).toEqual([
            { word: 'ways', count: 2 },
            { word: 'are', count: 1 },
            { word: 'our', count: 1 },
            { word: 'this', count: 1 },
        ])
    })
    
    it ('Queen: we will rock you', ()=>{
        expect(ejercicio.topWords(
            `   Buddy, you're a boy, make a big noise
                Playing in the street, gonna be a big man someday
                You got mud on your face, you big disgrace
                Kicking your can all over the place, singin'
                We will, we will rock you
                We will, we will rock you
                Buddy, you're a young man, hard man
                Shouting in the street, gonna take on the world someday
                You got blood on your face, you big disgrace
                Waving your banner all over the place
                We will, we will rock you, sing it!
                We will, we will rock you, yeah
                Buddy, you're an old man, poor man
                Pleading with your eyes, gonna get you some peace someday
                You got mud on your face, big disgrace
                Somebody better put you back into your place, do it!
                We will, we will rock you, yeah, yeah, come on
                We will, we will rock you, alright, louder!
                We will, we will rock you, one more time
                We will, we will rock you
                Yeah`
            )).toEqual([
                { word: 'we', count: 16 },
                { word: 'will', count: 16 },
                { word: 'you', count: 15 },
                { word: 'rock', count: 8 },
                { word: 'your', count: 7 },
                { word: 'big', count: 5 },
                { word: 'man', count: 5 },
                { word: 'on', count: 5 },
                { word: 'the', count: 5 },
                { word: 'a', count: 4 }
            ]);
    })

    it ('John Lennon: Imagine', ()=>{
        expect(ejercicio.topWords(
                `Imagine there's no heaven
                It's easy if you try
                No hell below us
                Above us, only sky
                Imagine all the people
                Livin' for today
                Ah
                Imagine there's no countries
                It isn't hard to do
                Nothing to kill or die for
                And no religion, too
                Imagine all the people
                Livin' life in peace
                You
                You may say I'm a dreamer
                But I'm not the only one
                I hope someday you'll join us
                And the world will be as one
                Imagine no possessions
                I wonder if you can
                No need for greed or hunger
                A brotherhood of man
                Imagine all the people
                Sharing all the world
                You
                You may say I'm a dreamer
                But I'm not the only one
                I hope someday you'll join us
                And the world will live as one`
        )).toEqual([
                { word: 'the', count: 8 },
                { word: 'imagine', count: 6 },
                { word: 'no', count: 6 },
                { word: 'you', count: 6 },
                { word: 'all', count: 4 },
                { word: 'i\'m', count: 4 },
                { word: 'one', count: 4 },
                { word: 'us', count: 4 },
                { word: 'a', count: 3 },
                { word: 'and', count: 3 }                           
        ])
    })

})