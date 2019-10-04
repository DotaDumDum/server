const youtubeAPI = require('../apis/youtubeApi')
const youtubeApiKey = process.env.YOUTUBE_API_KEY  

class YoutubeController {
    static getVideo(req,res,next){
      let sanitizedHero = req.body.hero.trim().replace(/ /g, '+')
        youtubeAPI.get(`search?q=${sanitizedHero}&key=${youtubeApiKey}&part=id&type=video&fields=items%2Fid&channelId=UCZsM8MOy0VC9blj_wBkbo-g`)
        .then(({data})=>{
          let url = `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`
            res.status(200).json(url)
        })
        .catch(next)
    }

    static commentVideo(req,res,next){
      const packet = {
        "snippet": {
          "channelId": "UCZsM8MOy0VC9blj_wBkbo-g",
          "topLevelComment": {
            "snippet": {
              "textOriginal": req.body.comment
            }
          },
          "videoId": req.body.videoId
        }
      }  
        youtubeAPI.post(`commentThreads?part=snippet`,packet)
        .then(({data})=>{
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = YoutubeController