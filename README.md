# webcompat.com-type-labels
Scripts to extract type labels from Webcompat.com (Github) issue data

Requires node.js (using 8.11.1), lodash, moment and jsonfile.
https://www.npmjs.com/package/lodash
https://www.npmjs.com/package/moment
https://www.npmjs.com/package/jsonfile


Input is issues.json file, expected in same directory, available here: http://adamstevenson.ca/mozilla/issues.json

sort-type-labels-sort.js - Outputs data sorted by month

sort-type-labels-nosort.js - Outputs totals for all issues

Scripts are reused from other projects and may be ugly. Patches are welcome :)

Usage:

node sort-type-labels-sort.js > outputfile.csv
