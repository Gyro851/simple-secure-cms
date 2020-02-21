/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * @param {String} userToken
   * @method decrypts the userToken and performs a query
   * @return {Object} Returns an Object which can be used to determine
              whether or not the user has admin priviledges
   */
  checkAdminAuthorization: async function(userToken) {
    var crypto = require('crypto');
    var md5 = require('md5');
    const key = '6c53732d70abdb203f3f668f594127df6c53732d70abdb203f3f668f594127df';
    var mykey = crypto.createDecipher('aes-128-cbc', key);
    var userId = mykey.update(userToken, 'hex', 'utf8')
    userId += mykey.final('utf8');
    const SQL = `SELECT
                      admin
                 FROM
                      users
                 WHERE
                      id = $1`;
    return await sails.sendNativeQuery(SQL, [userId]);
  },
  /**
   * @method {GET}
   * @param {String} userToken
   * @return {Object} Returns an Object which can be used to determine
              whether or not the user has admin priviledges
   */
  checkIfAdminByUserId: async function (req, res) {
      let response = await module.exports.checkAdminAuthorization(req.param('userToken'));
      res.json(response.rows);
  },
  /**
   * @method {POST}
   * @param {String} userToken
   * @param {String} name
   * @param {String} catimageurl
   * @param {String} catfacts
   * @return {Object} Returns an Object which contains the name of a cat,
              a URL to a picture of a cat, and some information abut the cat.
   */
  allowAdminToCreateCatPage: async function (req, res) {
    let adminCheck = await module.exports.checkAdminAuthorization(req.param('userToken'));
    if (adminCheck.rows && adminCheck.rows[0].admin == 1) {
      let cat = {
        name: req.param('name'),
        catimageurl: req.param('catimageurl'),
        catfacts: req.param('catfacts')
      }
      res.json(await Pages.create(cat).fetch());
    } else {
      res.json({err: "Something went wrong"});
    }
  }
};
