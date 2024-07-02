"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let firstname = "sami";
console.log(firstname.toLocaleUpperCase());
console.log(firstname.toLocaleLowerCase());
console.log(firstname.charAt(0).toUpperCase() + firstname.slice(1));
