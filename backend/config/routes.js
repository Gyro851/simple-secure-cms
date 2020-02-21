/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  //
   '/': {
     view: 'pages/homepage'
   },


  /***************************************************************************
  * REST API endpoint routes                                                 *
  ***************************************************************************/
  // Admin
  'GET /admin': {
    controller: 'admin',
    action: 'checkIfAdminByUserId'
  },
  'POST /admin': {response: 'notFound'},
  'PATCH /admin': {response: 'notFound'},
  'DELETE /admin': {response: 'notFound'},

  // Users
  'GET /users': {response: 'notFound'},
  'POST /users': {
    controller: 'users',
    action: 'createUser',
  },
  'PATCH /users': {response: 'notFound'},
  'DELETE /users': {response: 'notFound'},

  // Login
  'GET /login': {response: 'notFound'},
  'POST /login': {
    controller: 'users',
    action: 'loginUser',
  },
  'PATCH /login': {response: 'notFound'},
  'DELETE /login': {response: 'notFound'},


  // Pages
  'GET /pages': {
    controller: 'pages',
    action: 'checkIfPermittedToViewPage'
  },
  'POST /pages': {
    controller: 'admin',
    action:'allowAdminToCreateCatPage'
  },
  'PATCH /pages': {response: 'notFound'},
  'DELETE /pages': {response: 'notFound'},

  // Permissions
  'GET /permissions': {
    controller: 'permissions',
    action: 'getPermittedPagesByUserId'
  },
  'POST /permissions': {response: 'notFound'},
  'PATCH /permissions': {response: 'notFound'},
  'DELETE /permissions': {response: 'notFound'}
};
