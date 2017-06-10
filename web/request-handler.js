var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

let defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, text/html',
  'access-control-max-age': 10
};

exports.handleRequest = function (req, res) {
  let statusCode;

  let headers = defaultCorsHeaders;

  headers['Content-Type'] = 'text/html';

  // receiving 'GET' method
  if (req.method === 'GET') {
    // set status code '200'
    let url = archive.paths.archivedSites + req.url;
    // check url
    if (req.url === '/') {
      url = archive.paths.siteAssets + '/index.html';
      fs.readFile(url, 'utf-8', function(err, data) {
        // send 404 for errors
        if (err) {
          statusCode = 404;
          res.writeHead(statusCode, headers);
        }
        statusCode = 200;
        res.writeHead(statusCode, headers);
        res.end(data);
      });
    }
  }

  if (req.method === 'POST') {
    let url;
    req.on('data', function(data) {
      url = data.toString().slice(4);
      // read url from paths
      archive.addUrlToList(url);
      req.on('end', function(data) {
        // loading html
        let loading = archive.paths.siteAssets + '/loading.html';
        // get url paths
        let path = archive.paths.archivedSites + '/' + url;

        fs.readFile(path, 'utf-8', function(err, data) {

          if (err) {
            fs.readFile(loading, 'utf-8', function(err, loadingPage) {
              statusCode = 404;
              res.writeHead(statusCode, headers);
              res.end(loadingPage);
            });
          }
          statusCode = 200;
          res.writeHead(statusCode, headers);
          res.end(data);
        });
      });
    });
  }
};




