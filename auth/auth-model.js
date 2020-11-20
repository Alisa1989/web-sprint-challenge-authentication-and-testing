const db = require("../database/dbConfig")

async function add(user) {

	return  db("users").insert(user)
}

function find() {
	return db("users as u")
		.select("u.id", "u.username")
}

function findByUsername(username) {
	return db("users as u")
		.where("u.username", username)
		.first("u.id", "u.username", "u.password")
}

module.exports = {
	add,
	find,
	findByUsername,
}