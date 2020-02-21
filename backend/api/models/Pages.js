/**
 * Pages.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type: 'string',
      required: true
    },

    catimageurl: {
      type: 'string',
      required: true
    },

    catfacts: {
      type: 'string',
      required: true
    }
  }
};
