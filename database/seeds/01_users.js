exports.seed = async function(knex) {
	await knex("users").insert([
		{ username: "Alex89", password: "12345678" },
		{ username: "Rebe85", password: "87654321" },
	])
}
