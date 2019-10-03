const dotaAPI = require('../apis/dotaApi')

class DotaController {
  static getHeroes(req, res) {
    dotaAPI
      .get('/heroes')
      .then(heroes => {
        res.status(200).json(heroes.data)
      })
      .catch(console.log)
  }
}

module.exports = DotaController