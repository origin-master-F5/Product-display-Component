const db = require('../../db-mongodb');
const Product = require('../../db-mongodb/model');
const games =require('./games.js');
const ps4_one = require('./ps4seed1.json');


// const data = [
//   {
//     name: 'Mario Kart 8 Deluxe - Nintendo Switch',
//     category: 'Nintendo Switch',
//     sub_category: 'Nintendo Swtich Games',
//     model: 'HACPAABPA',
//     publisher: 'Nintendo',
//     sku: '1',
//     product_sku: '5723304',
//     release_date: '04/28/2017',
//     esrb_rating: 'E (Everyone)',
//     price: '59.99',
//     images: ['https://bb-clone.s3-us-west-1.amazonaws.com/Mario+Kart+8+Deluxe+-+Nintendo+Switch/images/Mario+Kart+8+Deluxe+-+Nintendo+Switch-1.png', 'https://bb-clone.s3-us-west-1.amazonaws.com/Mario+Kart+8+Deluxe+-+Nintendo+Switch/images/Mario+Kart+8+Deluxe+-+Nintendo+Switch-2.png', 'https://bb-clone.s3-us-west-1.amazonaws.com/Mario+Kart+8+Deluxe+-+Nintendo+Switch/images/Mario+Kart+8+Deluxe+-+Nintendo+Switch-3.png', 'https://bb-clone.s3-us-west-1.amazonaws.com/Mario+Kart+8+Deluxe+-+Nintendo+Switch/images/Mario+Kart+8+Deluxe+-+Nintendo+Switch-4.png', 'https://bb-clone.s3-us-west-1.amazonaws.com/Mario+Kart+8+Deluxe+-+Nintendo+Switch/images/Mario+Kart+8+Deluxe+-+Nintendo+Switch-5.png', 'https://bb-clone.s3-us-west-1.amazonaws.com/Mario+Kart+8+Deluxe+-+Nintendo+Switch/images/Mario+Kart+8+Deluxe+-+Nintendo+Switch-6.png', 'https://bb-clone.s3-us-west-1.amazonaws.com/Mario+Kart+8+Deluxe+-+Nintendo+Switch/images/Mario+Kart+8+Deluxe+-+Nintendo+Switch-7.png'],
//     compatible_platforms: ['https://bb-clone.s3-us-west-1.amazonaws.com/general/switch_icon.png', 'https://bb-clone.s3-us-west-1.amazonaws.com/general/wii_icon.png'],
//     software_format: ['Physical', 'Digital'],
//     geek_squad: '7.99',
//     description: 'Battle new enemies on a host of fun tracks with Mario Kart 8 Deluxe for the Nintendo Switch. Three new vehicles and a smart steering feature make this game perfect for both beginners or seasoned pros. In Mario Kart 8 Deluxe you can hold up to two items at a time to attack your enemies.',
//     features: 'Race your friends in the definitive version of Mario Kart 8, only on Nintendo Switch!\n Race as every character on every track from the Wii U version, including DLC characters and tracks \n Pop some balloons in the revamped Battle mode, complete with Balloon Battle and Bob-omb Blast \n Battle on new courses, like Urchin Underpass and Battle Stadium, or returning ones, such as GCN Luigi\'s Mansion and SNES Battle Course 1 \n Inkling Girl & Inkling Boy from Splatoon, King Boo, Dry Bones, and Bowser Jr. join the roster! \n Choose a new Smart Steering feature which makes driving and staying on the track easy even at 200cc \n Three new vehicles have been added, two are even inspired by Splatoon \n Carry two items at the same time \n Returning items include Boo, the item stealing ghost, and the Feather, which gives you a high jump in battle mode \n Drive through in 1080p HD quality in TV mode \n For 1 player or up to 12 players online multiplayer* \n * Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online',
//     included: 'Mario Kart 8 Deluxe',
//     header_titles: ["Best Buy", "Video Games", "Nintendo Switch", "Nintendo Switch Games"]
//   }
// ]

var seedDB = () => {
  Product.create(games)
  return Product.create(ps4_one)
  .then(()=> console.log('seeded data to mongo'))
  
}

   seedDB();