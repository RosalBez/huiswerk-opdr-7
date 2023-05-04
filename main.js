// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

console.log('***************************************************************opdr 1******************************')
console.log('opdr 1a')


//gebruik een array methode (filter, find of map) om een array te maken met alle tv type namen
//zorg ervoor dat je ittereert over de hele array
//de map methode zorgt ervoor dat er een nieuwe array ontstaat
//zorg dat je een nieuwe variabele hebt waarnaar je de entrys kunt pushen en geef een return

const tvTypeNames = inventory.map((tvTypeName) => {
  return  tvTypeName.name
})

console.log(tvTypeNames)



console.log('opdr 1b')
//array methode
//je wilt dat hij alle hele objecten logt die uitverkocht zijn
//je wilt meerder objecten terug krijgen dus je kunt alleen map of filter gebruiken
// ik gebruik filter want dan kan ik aangeven dat ze op out of stock moeten staan en dan pas tevoorschijn mogen komen
//je hebt original in stock
// je hebt sold
// en je wilt alleen weten welke original - stock = 0 zijn

const outOfStocks = inventory.filter((outOfStock) => {
  if (outOfStock.originalStock - outOfStock.sold === 0) {
    return outOfStock
  }
})

console.log(outOfStocks)

console.log('opdr 1c')

//arraymethode
// je wilt hele objecten dus map of filter
// als (if) ambi light ja is dan moet ie hem eruit gooien
// je wilt ze aLLemaal dus je kunt geen find gebruiken

const oneCisTrue = inventory.filter((oneC) => {
  if (oneC.options.ambiLight === true ) {
    return oneC
  }
})

console.log(oneCisTrue)

console.log('opdr 1d')

//array methode voor sorteren is sort
//voor het sorteren van laag naar hoog gebruik je A - B
//

const tvPrices = inventory.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b ) {
    return -1;
  }

  return 0;
})


console.log(tvPrices)

console.log('***************************************************************opdr 2******************************')

//array methode, je wilt weten hoeveel tvs'onder het kopje sold bij elkaar getelt zijn

console.log('opdr 2a')
function tvSolds (inventory) {
  let tvSold = 0;
  for (let i = 0; i < inventory.length; i++) {
    tvSold += inventory[i].sold;
  }
  return tvSold
}

const totalTvSolds = tvSolds(inventory)
console.log('het totaal aantal verkochtte tv\\\s is ' + totalTvSolds)


console.log('opdr 2b')

const totalSolds = document.getElementById('totalSolds')