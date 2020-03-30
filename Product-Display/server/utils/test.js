const faker = require('faker');

// console.log( typeof faker.finance.account()); // 14259019 string

// console.log(faker.lorem.word()) //aperiam

// console.log(faker.lorem.sentences()) //Tempora est qui veritatis veniam repudiandae eveniet saepe est. Et architecto quisquam. Qui minus sed impedit pariatur. At sit odio et sunt sit aliquid laborum dolorum et. Quia non nisi modi voluptatum.

// console.log(faker.random.alphaNumeric()) //r

// console.log(faker.commerce.productAdjective()) //Refined

// console.log(faker.fake("{{random.alphaNumeric}}, {{random.alphaNumeric}} {{random.alphaNumeric}}")); //j, a m

// console.log(faker.finance.account()) // 60213376

// console.log(faker.fake("{{finance.account}}{{random.alphaNumeric}}")) // 69603020
// 338918880

// console.log(faker.random.alphaNumeric() + faker.finance.account()) // b

// console.log(faker.random.alphaNumeric() + faker.finance.account()) // u11229798

// console.log(faker.random.uuid()) // 72087288-7b27-4d99-84c6-686fb1de0e7e

// console.log(faker.random.locale()) // es_MX

// console.log(faker.helpers.randomize()) //c

// console.log(faker.finance.amount()) // 379.40
// console.log(faker.company.bs()) //innovative deliver channels

// console.log(faker.lorem.word()) //eligendi

// console.log(faker.lorem.text()) // Perferendis ea quisquam doloribus ipsum. Sit itaque non cumque saepe enim. Sed molestiae aut dignissimos. Adipisci atque et. Praesentium inventore rerum aut eos sint. Quis omnis id.

// console.log(faker.lorem.slug()) //quo-facilis-quae

// console.log(faker.random.number())
// console.log(faker.phone.phoneNumber())
// console.log(faker.internet.password()) //84318     1-236-143-3226 x374     fi_8LCIT_Po4MKU

// console.log(faker.fake("{{random.number}}{{random.alphaNumeric}}")) //32540i

// console.log(faker.company.companyName()) // Lang, Cummings and Bosco
// console.log(faker.date.past())  //2019-08-11T11:32:00.754Z

// console.log(typeof faker.date.past()) //object

// console.log(faker.date.past().toDateString) // Sun Feb 16 2020

// console.log(faker.date.past().getMonth()) //10

// console.log(faker.date.past().getFullYear()) // 2019

// console.log(faker.date.past().getDate()) //17


// console.log(typeof faker.date.past().getDate()) // number

// var arr = []
// for (let i = 0; i < 5; i++) {
//     var game = {
//         a: 1,
//         b: 2,
//         c: this.a
//     }
//     arr.push(game);
// }
// console.log (arr)
// [
//     { a: 1, b: 2, c: undefined },
//     { a: 1, b: 2, c: undefined },
//     { a: 1, b: 2, c: undefined },
//     { a: 1, b: 2, c: undefined },
//     { a: 1, b: 2, c: undefined }
//   ]

// console.log(faker.lorem.paragraph())
//Incidunt id qui est perferendis deleniti necessitatibus delectus. Laboriosam numquam quisquam ipsum rerum omnis aperiam. Maxime est est voluptas similique nostrum voluptates enim. Reiciendis natus aut qui quia voluptatem cupiditate.

// console.log(faker.lorem.paragraphs())
// Error soluta repudiandae laboriosam tempora. Aut consequatur sint suscipit in consequuntur perferendis provident eum. Eos nobis cum. Nam aliquam temporibus voluptas qui.
// Necessitatibus numquam enim nihil. Voluptatem repellendus sint dicta sed sunt est et. Dignissimos a enim et iusto odio enim. Porro cum dolores dolor. Quo laborum odio et neque sed aspernatur perferendis.
// Voluptatem non corporis blanditiis id earum possimus dolorem et. Consequatur voluptas quo assumenda eligendi neque inventore. Libero consectetur aperiam quis molestias dolore architecto. Quia dignissimos nihil ratione. Ullam consequatur nihil sapiente quisquam facilis.

// console.log(faker.lorem.paragraph() + faker.lorem.sentences())
// Repudiandae et et occaecati vero quo et quasi consequuntur. Rerum vel veniam doloribus qui vitae. Autem in repellendus quis a et eos blanditiis consectetur. Consequatur provident nesciunt. Qui qui autem. Itaque omnis dolores recusandae.Ut aut consequatur optio fugit qui aut. Temporibus est tempore qui voluptatem omnis praesentium. Itaque pariatur est occaecati provident et unde modi magnam et.

// var arr = []
// for (let i = 0; i < 5; i++) {
//     let d = false;
//     var game = {
//         a: 1,
//         b: 2,
//         c: d ? 4 : 0
//     }
//     arr.push(game);
// }
// console.log (arr)

// [
//     { a: 1, b: 2, c: 4 },
//     { a: 1, b: 2, c: 4 },
//     { a: 1, b: 2, c: 4 },
//     { a: 1, b: 2, c: 4 },
//     { a: 1, b: 2, c: 4 }
//   ]
// [
//     { a: 1, b: 2, c: 0 },
//     { a: 1, b: 2, c: 0 },
//     { a: 1, b: 2, c: 0 },
//     { a: 1, b: 2, c: 0 },
//     { a: 1, b: 2, c: 0 }
//   ]

// console.log(faker.random.boolean());

// var arr = []
// for (let i = 0; i < 3; i++) {
//     let d = false;
//     var game = {
//         a: 1,
//         b: 2,
//         c: !d ? 4 : 0
//     }
//     arr.push(game);
// }
// console.log (arr) //{ a: 1, b: 2, c: 4 } ]

// console.log([faker.helpers.randomize(), faker.lorem.words(), faker.lorem.words()]);
//[ 'c', 'est esse mollitia', 'voluptas itaque quis' ]

// console.log(faker.finance.accountName()); //Investment Account
// console.log(faker.lorem.word().toUpperCase() + faker.random.number() + faker.random.alphaNumeric().toUpperCase());

console.log(faker.random.boolean());