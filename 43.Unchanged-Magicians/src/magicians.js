"use strict";
// Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and
//   one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Abracadabra', 'Herry Potter', 'BabuBhaiya', 'Ron Weasley'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nThis is my Original array:');
show_magicians(magician);
console.log('This is my modified copy of the array');
show_magicians(copyMagicianArray);
