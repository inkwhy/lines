YUI().use('node', function(Y){
    function lines(){
        var boxoneW = Y.one('#box-one').get('offsetWidth');
        var boxoneH = Y.one('#box-one').get('offsetHeight');
        var boxone = Y.one('#box-one').get('region');
        var boxW = Y.one('#box-two').get('offsetWidth');
        var offset = boxW*4;
    
     var box2 = Y.one('#box-two').get('region');
            shaping = {};
            connections = [];
            shaping = {box2Shape: r.rect(box2.left - offset/2, box2.top-19, boxW+offset, 1), boxoneShape: r.rect(boxone.left,boxone.top,boxoneW,boxoneH)};
            connections.push(r.connection(shaping.box2Shape,shaping.boxoneShape,'#777'));
                for (var i in shaping) {
                    shaping[i].attr({fill: 'transparent', stroke: 'transparent', "fill-opacity": 0, "stroke-width": 2});
            }
        }
});