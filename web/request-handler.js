var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  let statusCode;

  headers['Content-Type'] = 'text/html';

  if (req.method === 'GET') {
    statusCode = 200;
    res.writeHead(statusCode, headers);
    archive.readListOfUrls('/index.html', function(data) {
      // console.log('req Data: ', data);
      res.end(data);
    });

    // res.write(archive.paths.siteAssets + '/index.html');
  }
  // if (req.method === 'POST') {
  //   statusCode = 201;
  //   res.writeHead(statusCode, headers);
  //   req.on('data', function(chunk) {
  //     console.log('Got to POST');
  //     res.write(chunk.toString());
  //   });
  //   req.on('end', function() {
  //     res.end();
  //   })
  // }
  // res.end(archive.paths.list);
};

let defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, text/html',
  'access-control-max-age': 10
};