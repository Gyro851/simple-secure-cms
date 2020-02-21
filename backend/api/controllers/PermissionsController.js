module.exports = {

  /**
  * @method {GET}
  * @param {String} userToken
  * @return {Array} returns an array of objects containing the decrypted user ID
      and the page id of each page this user has access to
  */
  getPermittedPagesByUserId: async function(req, res) {
    var crypto = require('crypto');
    const key = '6c53732d70abdb203f3f668f594127df6c53732d70abdb203f3f668f594127df';
    var md5 = require('md5');
    var userToken = req.param('userToken');
    var mykey = crypto.createDecipher('aes-128-cbc', key);
    var userId = mykey.update(userToken, 'hex', 'utf8')
    userId += mykey.final('utf8');
    const SQL = `SELECT
                      pages.id,
                      pages.name,
                      permissions.pagesid,
                      permissions.usernameid,
                      pages.catimageurl
                  FROM
                      pages
                  JOIN
                      permissions
                        ON pages.id=permissions.pagesid
                  WHERE
                      usernameid = $1`;
    let pages = await sails.sendNativeQuery(SQL, [userId]);
    res.json(pages);
  }
};
