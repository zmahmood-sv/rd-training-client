const { query } = require("@simpleview/sv-graphql-client");
class People {
	constructor({ graphUrl, graphServer }) {
		this.name = "People";
		this._graphurl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ input, fields, headers }) {

		return await query({
			query: `
			query training($findId:training_people_find_input){
				training{
						people_find(param:$findId){
						${ fields }
					}
				}
			}`,
			variables: {
				param: input
			},
			url: this._graphurl,
			headers,
			clean: true,
			key: "training.people_find",

		});

	}

	async remove({ input, fields, headers }) {

		return await query({
			query: `
			mutation training($param:training_people_remove_input){
				training{
					people_remove(input:$param){
						${ fields }
					}
				}
			}	
			`,
			variables: {
				param: input
			},
			url: this._graphurl,
			headers,
			clean: true,
			key: "training.people_remove",

		});

	}

	async insert({ input, fields, headers }) {

		return await query({
			query: `
			mutation Insert($people: [training_people_insert_input!]!){
				training {
					people_insert(people: $people){
						${ fields }
					}
				}
			}
			`,
			variables: {
				param: input
			},
			url: this._graphurl,
			headers,
			clean: true,
			key: "training.people_insert",

		});
	}
}

module.exports = { People };
