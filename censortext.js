var censoredWords = ["bad", "sad", "mad"]
var customCensoredWords = []

function censor(inStr){
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****")
    }
    for (idx in customCensoredWords){
        inStr = inStr.replace(customCensoredWords[idx],"****")
    }
}

function addCensoredWord(word){
    customCensoredWords.push(word)
}

function getCensoredWord(){
    return censoredWords.concat(customCensoredWords)
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWord = getCensoredWord