// db.js

var fs = require('fs')

module.exports = { 
  data: { },
  save: function() {
    fs.writeFile('db.json', JSON.stringify(this.data))
  },
  load: function() {
  	fs.readFile('db.json', 'utf-8', function(err, data) {
	    return this.data = JSON.parse(data)
  	})
  }
}
