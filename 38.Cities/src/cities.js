"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = 'Default Country.') {
    console.log(` ${city} is in ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Iraq', 'Baghdad');
describe_city('Dehli');
