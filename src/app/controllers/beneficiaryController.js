const fs = require('fs')
const path = require('path')

class BeneficiaryController {
  async saveBeneficiary(req, res) {
    fs.readFile(path.join(__dirname, 'beneficiary.json'), 'utf8', (err, jsonString) => {
      if (err) {
        console.log('File read failed:', err)
        return
      }
      const body = req.body
      const data = JSON.parse(jsonString)
      data.push(body)
      console.log('File data:', data[0].quantity)

      fs.writeFile(path.join(__dirname, 'beneficiary.json'), JSON.stringify(data), (err) => {
        if (err) console.log('Error writing file:', err)
      })

      res.status(201).json(data)
    })
  }
}
module.exports = new BeneficiaryController()
