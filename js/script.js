YUI().use('lines', function(Y){
    
    var boxOne = Y.one('#box1');
    var boxTwo = Y.one('#box2');
  
    Y.lines(boxOne, boxTwo);
});