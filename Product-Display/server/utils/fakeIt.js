const faker = require('faker');
const helpers = require('./ps4helpers');
const vids = require('./vidhelpers');
const reviews = require('./reviewhelpers');
const images = require('./Imagehelpers');
const fs = require('fs');

var gameArray = [];
var sku = 12;

for (let i = 0; i < helpers.titles.length; i++) {
    let productprice = helpers.randomSelector(helpers.prices);
    let vidIndex = helpers.randomIndexSelector(vids.ps4VidTimeStamps);
    let hasVideo = faker.random.boolean();
    let rating = helpers.randomSelector(helpers.esrbRating);
    let bundleIndex = helpers.randomIndexSelector(reviews.bundle);
    var game = {
        name: helpers.titles[i],
        category: helpers.category,
        sub_category: helpers.subcategory,
        model: faker.lorem.word().toUpperCase() + faker.random.number(),
        publisher: faker.company.companyName(),
        sku: helpers.incrementer(sku),
        product_sku: faker.finance.account(),
        release_date: helpers.dateGenerator(),
        esrb_rating: rating,
        price: productprice,
        images: images.randomImagePacker(i),
        compatible_platforms: helpers.platforms,
        software_format: helpers.format,
        geek_squad_price: helpers.geekPriceGenerator(productprice),
        description: faker.lorem.paragraphs(),
        features: faker.lorem.paragraph() + faker.lorem.sentences(),
        included: helpers.titles[i],
        header_titles: helpers.ps4header,
        still_img_videos: hasVideo ? vids.generateVidGallery() : [],
        miniplayer_videos: hasVideo ? vids.ps4Vids[vidIndex]: "",
        video_length:[vids.ps4VidTimeStamps[vidIndex]],
        reviews_count: reviews.reviewcount[i],
        reviews_breakdown: reviews.reviewbreakdown[i],
        keyspecs_title: helpers.keyspecheader,
        keyspecs: [rating, helpers.randomSelector(helpers.descriptors), faker.company.catchPhrase(), helpers.format[0]],
        general_title: helpers.generalheader,
        general: [helpers.titles[i], faker.company.companyName(), faker.company.companyName(), faker.company.companyName(), faker.lorem.word().toUpperCase() + faker.random.number() + faker.random.alphaNumeric().toUpperCase()],
        game_Details_title: helpers.gamedetailheader,
        game_details: [faker.company.bsAdjective(), faker.company.companyName(), faker.company.bsNoun()],
        requirements_title: ["System Requirements", "Subscription"],
        requirements: [faker.company.bsAdjective(), faker.lorem.word()],
        other_title: ["UPC"],
        other: faker.finance.account(),
        questions: reviews.questionCount[vidIndex],
        bundle: reviews.bundle[bundleIndex],
        bundle_total: reviews.bundletotal[bundleIndex],
        manufacturer_img: "",
        questions_img: reviews.questions[vidIndex]
    }
    sku++;
    gameArray.push(game);
  }

  fs.writeFile(__dirname + '/ps4seed1.json', JSON.stringify(gameArray), function (err) {
    if (err) 
    return console.log(err);
    console.log('success');
  });

  
   
