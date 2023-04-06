const { query } = require("@simpleview/sv-graphql-client");

class Movies {
	constructor({ graphUrl, graphServer }) {
		this.name = "Movies";
		this._graphurl = graphUrl;
		this._graphServer = graphServer;
	}


	async find({ input, fields, headers }) {

		return await query({
			query: `
					query Docs ($input:training_movie_find_input){
						training{
							movies_find(input:$input){
				 				${ fields }
							}
						}
					}
			`,
			variables: {
				input
			},
			url: this._graphurl,
			headers,
			clean: true,
			key: "training.movies_find",


		});
	}


	async remove({ input, fields, headers }) {

		return await query({
			query: `
				mutation training($input:training_movie_remove_input){
					training{
						movies_remove(input:$input){
							${ fields }
						}
					}
				}	
			`,
			variables: {
				input
			},
			url: this._graphurl,
			headers,
			clean: true,
			key: "training.movies_remove",
		});

	}

	async insert({ input, fields, headers }) {

		return await query({
			query: `
				mutation training($input:[training_movie_insert_input!]!){
					training{
						movies_insert(input:$input){
							${ fields }
						}
					}
				}	
			`,
			variables: {
				input
			},
			url: this._graphurl,
			headers,
			clean: true,
			key: "training.movies_insert",
		});

	}
}

module.exports = { Movies };
