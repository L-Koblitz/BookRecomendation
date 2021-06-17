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
