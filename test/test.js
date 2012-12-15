var linesTest = require('../js/lines.js');
var scriptTest = require('../js/script.js');
var test = require('tape');

test('linesTest', 'scriptTest', function(t){
    t.equal(linesTest.lines(scriptTest.boxOne, scriptTest.boxTwo));
    t.end();
});