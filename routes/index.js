'use strict';

module.exports = function () {

  return [

    //directory path for web pages
    { path: '/{param*}', method: 'GET', handler: {
        directory: {
          path: 'public',
          index: true
        }
      }
    }
  ]
};
