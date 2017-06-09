var fs = require('fs');
var path = require('path');
var _ = require('underscore');
// var figlet = require('figlet');

// figlet.text('@ HACK REACTOR', function(error, data) {
//   if (error) console.log(error);
//   else console.log(data);
// })
/*
    ____    _   _    _    ____ _  __  ____  _____    _    ____ _____ ___  ____  
   / __ \  | | | |  / \  / ___| |/ / |  _ \| ____|  / \  / ___|_   _/ _ \|  _ \ 
  / / _` | | |_| | / _ \| |   | ' /  | |_) |  _|   / _ \| |     | || | | | |_) |
 | | (_| | |  _  |/ ___ \ |___| . \  |  _ <| |___ / ___ \ |___  | || |_| |  _ < 
  \ \__,_| |_| |_/_/   \_\____|_|\_\ |_| \_\_____/_/   \_\____| |_| \___/|_| \_\
   \____/                                                                       
*/
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

exports.readListOfUrls = function(url, callback) {
  let path = this.paths.siteAssets + url;
  fs.readFile(path, 'utf8', function(err, data) {
    // console.log('data: ', data);
    if (err) {
      return callback(err);
    } else {
      return callback(data);
    }
  });
};

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

exports.isUrlInList = function(url, callback) {
  fs.readFile(this.paths.list, 'utf8', function(err, data) {
    console.log(data);
  });
};

exports.addUrlToList = function(url, callback) {

};

exports.isUrlArchived = function(url, callback) {
};

exports.downloadUrls = function(urls) {
};
