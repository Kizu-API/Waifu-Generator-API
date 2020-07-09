import express, {Request, Response} from "express"
import path from "path"
import fs from "fs"

const PORT = 3001
const app:express.Application = express()
const file:string = path.join(__dirname, '..', '..', 'src', 'data', 'data.json')
let dataScrape:any
let item:any
fs.readFile(file, 'utf-8', async (err, data) => {
    if(!err){
        try{
            dataScrape = await JSON.parse(data)
            item = dataScrape[Math.floor(Math.random() * dataScrape.length)]
            console.log(item)
        }catch(err) {
            console.log('Error parsing JSON string:', err)
        }
    }
})

app.get("/api/v2", (req: Request, res: Response) => {
    res.json(item)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})