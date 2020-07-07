import WaifuGenerator from "./scraper/WaifuGenerator"
import fs from "fs"
import path from "path"
import chalk from "chalk"
import {url} from "./const"
const outputFile = path.join(__dirname, 'data/', 'data.json')

WaifuGenerator(url)
 .then((data):void => {
    fs.writeFile(outputFile, JSON.stringify(data), err => {
        if(err) {
            console.log(err)
        }
        console.log(chalk.yellow.bgBlue(`\n Scraping data successfully finished. \n`))
    })
 }) 