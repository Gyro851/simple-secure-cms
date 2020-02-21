module.exports = {

  /**
  * @method {GET}
  * @param {String} userToken
  * @param {Number} pagesid
  * @return {Object} returns an object containing the page id, decrypted user id,
      URL of the cat image, name of the cat, and information about the cat
  */
  checkIfPermittedToViewPage: async function (req, res) {
      req.param(userToken);
      var crypto = require('crypto');
      const key = '6c53732d70abdb203f3f668f594127df6c53732d70abdb203f3f668f594127df';
      var md5 = require('md5');
      var userToken = req.param('userToken');
      var mykey = crypto.createDecipher('aes-128-cbc', key);
      var userId = mykey.update(userToken, 'hex', 'utf8')
      userId += mykey.final('utf8');
      let usernameid = userId;
      const SQL = `SELECT
                        pages.id,
                        permissions.pagesid,
                        permissions.usernameid,
                        pages.catimageurl,
                        pages.name,
                        pages.catfacts
                   FROM
                        pages
                   INNER JOIN
                        permissions
                          ON pages.id=permissions.pagesid
                    WHERE
                        usernameid = $1
                          AND pagesid= $2`;

      pagesid = req.param('pagesid');
      const result = await sails.sendNativeQuery(SQL, [usernameid, pagesid]);
      res.json(result.rows);
  }
}
