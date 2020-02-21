/**
 * Permissions.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    usernameid: {
      type: 'number',
      required: true
    },

    pagesid: {
      type: 'number',
      required:true
    }
  }
};
