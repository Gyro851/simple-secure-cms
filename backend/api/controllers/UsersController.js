/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  /**
  * @method {POST}
  * @param {String} username
  * @param {String} password
  * @return {String} encrypted userId as userToken to be used in all future requests
  */
  createUser: async function (req, res) {
    var crypto = require('crypto');
    const key = '6c53732d70abdb203f3f668f594127df6c53732d70abdb203f3f668f594127df';
    var md5 = require('md5');
    var username = req.param('username');
    var password = req.param('password');
    var hash = md5(password + '6c53732d70abdb203f3f668f594127df6c53732d70abdb203f3f668f594127df');
    let newUser = await Users.create({username:username,password:hash}).fetch();
    let userId = newUser.id + '';
    var mykey = crypto.createCipher('aes-128-cbc', key);
    var userToken = mykey.update(userId, 'utf8', 'hex')
    userToken += mykey.final('hex');
    res.json(userToken);
  },

  /**
  * @method {POST}
  * @param {String} username
  * @param {String} password
  * @return {String} userToken
  */
  loginUser: async function (req, res) {
    var crypto = require('crypto');
    const key = '6c53732d70abdb203f3f668f594127df6c53732d70abdb203f3f668f594127df';
    var md5 = require('md5');
    var username = req.param('username');
    var password = req.param('password');
    var hash = md5(password + '6c53732d70abdb203f3f668f594127df6c53732d70abdb203f3f668f594127df');
    let newUser = await Users.findOne({username:username,password:hash});
    if (!newUser) {
      res.send(405);
      return;
    }
    let userId = newUser.id + '';
    var mykey = crypto.createCipher('aes-128-cbc', key);
    var userToken = mykey.update(userId, 'utf8', 'hex')
    userToken += mykey.final('hex');
    res.json(userToken);
  },
};
