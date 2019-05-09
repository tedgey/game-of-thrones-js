// console.log(`There are ${characters.length} characters in the array.`);

// characters.forEach(function(character) {
//     console.log(`Character name: ${character.name}`);
// });

// How many characters names start with "A"?

let charsWithA = 0;

characters.forEach(function(character) {
    if (character.name[0] === "A") {
        charsWithA += 1;
    }
});
console.log(charsWithA)

// How many characters names start with "Z"?

let charsWithZ = 0;

characters.forEach(function(character) {
    if (character.name[0] === "Z") {
        charsWithZ += 1;
    }
});
console.log(charsWithZ)

// How many characters are dead?

let deadChars = 0;

characters.forEach(function(character) {
    if (character.died != "") {
        deadChars += 1;
    }
});
console.log(deadChars)

// Who has the most titles? 

let maxTitles = 0;
let maxTitleName = "";

characters.forEach(function(character) {
    if (character.titles.length > maxTitles) {
        maxTitles = character.titles.length;
        maxTitleName = character.name;
    }

});
console.log(maxTitleName, maxTitles)

// How many are Valyrian?

let valyrianFam = 0;

characters.forEach(function(character) {
    if (character.culture === "Valyrian") {
        valyrianFam += 1;
    }
});
console.log(valyrianFam)

// What actor plays Hot Pie?

let hotPieActor = "";

characters.forEach(function(character) {
    if (character.name === "Hot Pie") {
        hotPieActor = character.playedBy;
    }
});
console.log(hotPieActor)

// How many characters are not in the tv show?

let bookExclusive = 0;

characters.forEach(function(character) {
    if (character.playedBy[0] === "") {
        bookExclusive += 1;
    }
});
console.log(bookExclusive)

// list of Targaryens

let Targaryens = [];

characters.forEach(function(character)) {
    if (character.name.includes('Targaryen')) {

    }
}
console.log(Targaryens)