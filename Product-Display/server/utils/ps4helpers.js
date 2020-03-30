const faker = require('faker');

// can change as more items are needed
const titles = ["Cyberpunk 2077 Standard Edition", "The Last of Us Part II Special Edition", "Death Stranding Standard Edition", "Star Wars: Jedi Fallen Order", "Call of Duty: Modern Warfare Standard Edition", "NBA 2K20 Standard Edition", "Madden NFL 20 Standard Edition", "MLB The Show 20 Standard Edition", "NHL 20 Standard Edition","Grand Theft Auto V: Premium Edition"]

const esrbRating = ["E (Everyone)", "M (Mature 17+)", "T (Teen 13+)", "E10+ (Everyone 10+)" ]
// can change if product changes
const category = "PlayStation 4";
// can change if product changes
const platforms = ["https://bb-clone.s3-us-west-1.amazonaws.com/general/platform_ps4.png", "https://bb-clone.s3-us-west-1.amazonaws.com/general/platform_xbox.png"];

const prices= [59.99, 49.99, 29.99, 19.99, 39.99];
// can change if product changes
const subcategory = "PlayStation 4 Games";

const format = ["Physical", "Digital"];
// can change if product changes
const ps4header = ["Best Buy", "Video Games", "PlayStation 4", "PS4 Games"];

const keyspecheader = ["ESRB Rating", "ESRB Descriptors", "Compatible Platform(s)", "Software Format"];

const generalheader = ["Product Name", "Brand", "Publisher", "Developer", "Model Number"];

const gamedetailheader = ["Genre", "Game Franchise", "Multiplayer"];

const descriptors = ["Alcohol Reference", "Blood", "Cartoon Violence", "Crude Humor", "Animated Blood", "Blodd and Gore", "Comic Mischief", "Drug Reference", "Fantasy Violence", "Language", "Mature Humor", "Intense Violence", "Lyrics", "Nudity", "Real Gambling", "Sexual Content", "Sexual Violence", "Strong Language", "Sexual Themes", "Simulated Gambling", "Suggestive Themes", "Use of Drugs", "Violence", "Use of Alcohol", "Intense Violence"];

function incrementer(value) {
return value.toString();
}

function dateGenerator() {
let date = "";
date += faker.date.past().getMonth();
date += '/';
date += faker.date.past().getDate();
date += '/';
date += faker.date.past().getFullYear();
return date;
}

function geekPriceGenerator(value) {
  if (value > 40 ) {
      return 7.99;
  }
  if  (value > 30 ){
      return 5.99;
  } 
  return 3.99;
}

function randomSelector(list) {
let index = Math.floor(Math.random() * list.length);
return list[index];
}

function randomIndexSelector(list) {
    let index = Math.floor(Math.random() * list.length);
    return index;
}

module.exports = {
    titles,
    category,
    subcategory,
    incrementer,
    dateGenerator,
    randomSelector,
    esrbRating,
    prices,
    geekPriceGenerator,
    platforms,
    format,
    ps4header,
    randomIndexSelector,
    keyspecheader,
    descriptors,
    generalheader,
    gamedetailheader

}