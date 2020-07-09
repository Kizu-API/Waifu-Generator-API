import express, {Request, Response} from "express"
import { dataIndex } from "./src/interface/interface"

const PORT = 3000
const app:express.Application = express()

app.get("/", (req: Request, res: Response) => {
    const v1: string = "https://waifu-generator-api.vercel.app/api/v1"
    const v2: string = "https://waifu-generator-api.vercel.app/api/v2"

    const data: dataIndex = {
        v1,
        v2
    }

    res.status(200).send(data)
    console.log(data)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})