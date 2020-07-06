import axios from "axios"
import cheerio from "cheerio"
import {dataWaifu} from "../interface/interface"
import {url} from "../const"

const AxiosIntance = axios.create()
const WaifuGenerator = () => {
    return new Promise<any>( async (resolve, reject) => {
        await AxiosIntance.get(url)
         .then((response) => {
            if(response.status == 200){
                const html = response.data
                const $ = cheerio.load(html)
                const articleWaifu: Cheerio = $(".article-wrapper.article-tb.m-tb")
                const scrape: dataWaifu[] = []

                articleWaifu.each((i, el):void => {
                    const image:string = $(el).find(".article-inner-wrapper > .cover.size-a.has-depth > img").attr("src")
                    const anime:string = $(el).find(".article-inner-wrapper > .meta > a:nth-child(1)").text().trim()
                    const name:string = $(el).find(".article-inner-wrapper > .meta > a:nth-child(2).title > h3 > span").text().replace("[Waifu Wednesday]", "").trim()
                    scrape.push({
                        image,
                        anime,
                        name
                    })
                })

                resolve(scrape)
                console.log(scrape)
            }
         })
         .catch((err) => {
             reject(err)
         })
    })
}

export default WaifuGenerator