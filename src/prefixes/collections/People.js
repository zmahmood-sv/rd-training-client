const { query } = require("@simpleview/sv-graphql-client");
class People {
    constructor({ graphUrl, graphServer }) {
        this.name = "People";
        this._graphurl = graphUrl;
        this._graphServer = graphServer;
    }

    async find({ input, context, fields, headers }) {

        return await query({
            query: `
            query training($input:training_people_find_param){
                training{
                      people_find(input:$input){
                        ${fields}
                    }
                }
            }`,
            variables: {
             input
            },
            url: this._graphurl,
            headers,
            clean: true,
            key: "training.people_find",

        });

    }

    async remove({ input, context, fields, headers }) {

        return await query({
            query: `
            mutation training($input:training_people_remove_input){
                training{
                      people_remove(input:$input){
                          ${fields}
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
            key: "training.people_remove",

        });

    }

    async insert({ input, context, fields, headers }) {

        return await query({
            query: `
            mutation Insert($input: [training_people_insert!]!){
                training {
                  people_insert(input: $input){
                    ${fields}   
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
            key: "training.people_insert",

        });
    }
}

module.exports = { People };