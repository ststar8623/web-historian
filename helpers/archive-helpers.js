var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

exports.readListOfUrls = function(callback) {
  var path = this.paths.list;
  fs.readFile(path, 'utf-8', function(err, data) {
    callback(data.split('\n'));
  });
};

exports.isUrlInList = function(url, callback, error) {
  var path = this.paths.list;
  this.readListOfUrls(function(urls) {
    var found = false;
    urls.forEach(function(link) {
      if (link === url) {
        found = true;
        callback(link);
      }
      if (!found) {
        error(url);
      }
    });
  });
};

exports.addUrlToList = function(url, callback) {
  var path = this.paths.list;
  var error = function() {
    fs.readFile(path, 'utf-8', function(err, data) {
      fs.writeFile(path, data + url + '\n');
    });
  };
  this.isUrlInList(url, function(d) {}, error);
};

exports.isUrlArchived = function(url, callback) {

};

exports.downloadUrls = function(urls) {

};
