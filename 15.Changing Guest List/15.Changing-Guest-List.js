"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guestlist = ['Kamran Tessori', 'Daniyal Nagori', 'Zia Khan',];
for (let i = 0; i < Guestlist.length; i++) {
    console.log('Dear Mr. ' + Guestlist[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}
let absent_Guest = 'Zia Khan';
let new_Guest = 'Imran Khan';
Guestlist[2] = new_Guest;
for (let i = 0; i < Guestlist.length; i++) {
    console.log('Dear Mr. ' + Guestlist[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}
console.log(`Mr. ${absent_Guest} is not coming in the party.`);
