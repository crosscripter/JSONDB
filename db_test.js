
var db = require('./db')

function Point(x, y) {
	this.x = x
	this.y = y
}

function random_point() {
	return new Point(Math.random(), Math.random())
}

console.log("writing...")

for (var i = 0; i < 1000000; i++) {
	var p = random_point()
	db.data[i] = p
}

db.save()
console.log("written")
console.log("loading...")
db.load()
console.log("loaded")
