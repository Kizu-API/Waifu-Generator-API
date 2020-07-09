import express, {Request, Response} from "express"
import path from "path"
import fs from "fs"

const PORT = 3000
const app:express.Application = express()
const file:string = path.join(__dirname, '..', '..', 'src', 'data', 'data.json')
let dataScrape:any
fs.readFile(file, 'utf-8', async (err, data) => {
    if(!err){
        try{
            dataScrape = await JSON.parse(data)
        }catch(err) {
            console.log('Error parsing JSON string:', err)
        }
    }
})

app.get("/api/v1", (req: Request, res: Response) => {
    res.setHeader("Cache-Control", "public,max-age=3600,s-maxage=30")
    res.json(dataScrape)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})