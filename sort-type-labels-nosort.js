"use strict";

var jsonfile = require('jsonfile'),
    _ = require('lodash'),
    moment = require('moment'),
    inputFile = './issues.json';
var listNames =[];

function main() {
  var issuesList = loadFile(inputFile), // Load the issues JSON
      sorted = sortInput(issuesList), // Sort by month
      results = getCounts(sorted); // Loop through each month
}


function loadFile(filename) {
  //Load the full dataset
   return jsonfile.readFileSync(filename);
}


function sortInput(issuesList) {
  // Use lodash and moment to group the results by Month
  return _.groupBy(issuesList, (result) => moment(result['created_at'], moment.ISO_8601).startOf('month'));
}


function getCounts(groupedResults) {
  var weeklyResults = [], // Array for monthly results
      dt = new Date; // Grab the date / time for the website "updated at"

  Object.keys(groupedResults).forEach(function(key) {
    var val = groupedResults[key], // Grab this month's record
        k = key.substr(4, 11); // Extract the month name - "Mar 20 2017"
    //console.log(k); //Log the month for use later
    var status = getStatusCount(val); //
  });

  countBugs(listNames); // Count the bugs and output to console
  return weeklyResults;
}


function getStatusCount(weekIssues) {
  // Look through each bug report in the month array
  for (var issue of weekIssues) {
    // Get the labels for Type, sorted by month
    for (var label of issue.labels) {
      if(label.name.substr(0,5) == 'type-'){
        listNames.push(label.name);
      }
    }
  }
}

function countBugs(arr) {
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
      counts[arr[i]] = 1 + (counts[arr[i]] || 0);
  }

  //output to CSV on the console
  Object.keys(counts).forEach(function(key) {
    console.log(key + "," + counts[key]);
  });
}


main(); //Let's get started
