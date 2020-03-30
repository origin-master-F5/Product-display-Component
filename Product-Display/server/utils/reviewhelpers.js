// update if more seeds
const reviewcount = [22,26,20, 20, 32, 26, 23, 29, 26, 26, 16 ];

const reviewbreakdown = [ [3,2,5,5,7],
 [2,2,5,9,8],[4,6,1,3,6],[1,2,2,9,6],[9,7,3,9,4],[7,6,3,7,3],[7,8,2,3,3],[9,5,8,3,4],[8,4,4,4,6],[9,3,2,6,6],[3,5,3,3,2] ];

const questions = ["https://bb-clone.s3-us-west-1.amazonaws.com/Zelda+breath+of+wild/quest.png", "https://bb-clone.s3-us-west-1.amazonaws.com/questions/twelve.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Namco+Museum/quest.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Super+Mario+Deluxe/quest-super-mario-bundle.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Overcooked-2/questions_overcooked2.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Super+Smash+Bros/questions_super_smash-bros.png", "https://bb-clone.s3-us-west-1.amazonaws.com/Pokemon+Sword+Edition/questions_pokemon_sword_edition.png", "https://bb-clone.s3-us-west-1.amazonaws.com/general/questions_placeholder.png"  ];

const questionCount = [7, 12, 1, 14, 1, 54, 9, 27 ];

// can change if product platform changes
const bundle = ["https://bb-clone.s3-us-west-1.amazonaws.com/bundle/1.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/2.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/3.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/4.png" , "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/5.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/6.png", "https://bb-clone.s3-us-west-1.amazonaws.com/bundle/7.png"];

const bundletotal = [[29.99, 59.99, 29.99], [14.99, 64.99, 59.99], [59.99, 64.99, 84.99], [59.99,64.99,39.99], [24.99, 64.99, 249.99], [14.99,64.99, 39.99], [19.99, 14.99, 19.99] ];

module.exports = {
    reviewcount,
    reviewbreakdown,
    questions,
    questionCount,
    bundle,
    bundletotal
}