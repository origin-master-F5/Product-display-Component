const vidImages = [
    "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/20e8f7ed4abe4ce59da5126768578888.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/1799536929_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/1044944662_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/d921a1a964bc841698d01cde4f15f720.jpg;maxHeight=112;maxWidth=200", 
    "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/1297102016_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5723/1514902275_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6311/1544712004_ap.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/5d269344f43ddbcaea6fa10aee1c59dc.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/b1be00eb953c43fc1e769b50220bcbe6.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/ae042bdc9a7fb58f96a9a9af0738d7a2.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/4cd6a72107b14b3991204fc55f895085.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/13c7e0cdfbc711f0f5183aa0471def38.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/13c7e0cdfbc711f0f5183aa0471def38.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/fa0215124bda9c973862a8dfe9804253.jpg;maxHeight=112;maxWidth=200",  "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/3696d63c50b815ccd48e458480b07a2a.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/ce2d6e673a8237259a3d764b5ba766d5.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/dbcae4cef939e00d77dbcba50ee2422c.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/394ef1561157d5c4a4a33706c2392bb5.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/b3dafa8db2017e714cf6fa536b6d4ed0.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/fbfbf88f8fdc6602a6ba8a9312f9df7e.jpg;maxHeight=112;maxWidth=200", "https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/d349e3ca485d50981e81c89689b8f1e9.jpg;maxHeight=112;maxWidth=200"
];

const ps4Vids = ["https://www.totaleclips.com/Bounce/b?eclipid=e167127&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e166878&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e166087&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e165537&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e164230&amp;bitrateid=472&amp;vendorid=302", "https://www.totaleclips.com/Bounce/b?eclipid=e163909&amp;bitrateid=472&amp;vendorid=302", "https://sc.liveclicker.net/service/qr?1281343804&amp;mobile=true", "https://www.totaleclips.com/Bounce/b?eclipid=e165618&amp;bitrateid=472&amp;vendorid=302" ];

const ps4VidTimeStamps = ["1:03", "1:30", "1:01", "2:11","0:30", "1:51", "0:30", "1:20" ];

function generateVidGallery() {
  let count = Math.floor(Math.random() * 4) + 1;
  let arr =[];
  for (let i = 0; i < count; i++) {
    let index = Math.floor(Math.random() * vidImages.length);
    arr.push(vidImages[index]);
  }
  return arr.filter((link, index) => arr.indexOf(link) === index);
}

module.exports = {
  vidImages,
  ps4Vids,
  ps4VidTimeStamps,
  generateVidGallery
}

