let thing = {
    randNum(quant) {
        return Math.floor(Math.random()*quant);
    },
    words: [],

    addWords(word, wsyd, pros) {
        let newWord = {
            word,
            wsyd,
            pros,
        };
        this.words.push(newWord);
    },
    randMessage() {
        const temp = Math.floor(Math.random()* this.words.length); 
        console.log("The thing you should work on today is: ")
        return thing.words[temp].word + '\n' + thing.words[temp].wsyd + '\n' + thing.words[temp].pros
    },
};
thing.addWords('Tolerance', "work in your maturity to face problems. Not everything is exactly as you want it to be, and that's fine.", "People around you, won't be scared of making mistakes, this can make them feel more comfortable when beeing with you.")

thing.addWords("Joy", "You don't have to be worried everytime about everything, enjoy the little happy moments of life."), "Paying attention to the details you can enjoy much more, feel the taste of coffe, make life more bearable"

thing.addWords("Sincerity", "Express yourself the most truly way you can, so that no one can missunderstan you", "This way, you can expect more truly feelins for the ones beside you. Do great, receive great.")

thing.addWords("Pratic", "If you have something that you want to accomplish in life, realize that no one is gonna do it for you. You're the one who's creating your future, so work on it", "Workin out this, you can get out of the comfort zone. Leading you to your self improvement")

thing.addWords("Hummility", "No one or no one's dream is better than yours, focus on empathy, undestand others side.", "This way you'll become someone much more kind and good to live with.")

console.log(thing.randMessage())