console.log('hallo!!')
import {inventory} from './main.js'

//gebruik een array methode (filter, find of map) om een array te maken met alle tv type namen
//zorg ervoor dat je ittereert over de hele array
//de map methode zorgt ervoor dat er een nieuwe array ontstaat
//zorg dat je een nieuwe variabele hebt waarnaar je de entrys kunt pushen en geef een return

const tvTypeNames = inventory.map((tvTypeName) => {
    return tvTypeName.name
})

console.log(tvTypeNames)
