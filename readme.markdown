# lines

![alt text](http://373.be/lines/lines_example.png "lines example image of a connecting svg curved line between a red box and a blue box.")

__lines__ is [raphael.js'](https://github.com/DmitryBaranovskiy/raphael/) [graffle.js](http://raphaeljs.com/graffle.js) example only modified slightly. What __lines__ does is set the style of the element with the ID of "lines" to be absolutely positioned with a z-index of -1, creating a raphael generated svg layer behind your front-end layout. It works by calling the __lines__ function. The following is a example:

in your html
<div id="lines"> </div>

in your script.js
```javascript
var boxOne = Y.one('#box1');
var boxTwo = Y.one('#box2');

lines(boxOne, boxTwo);
```

Run __lines__ tests in [![browser support](http://ci.testling.com/Inkwhy/lines.png)]
with [testling-ci](http://ci.testling.com/Inkwhy/lines).

## TO DO
1. Fix any issues.
2. Add more arugments to the __lines__ function to allow specification of which side the line connects to.
3. Online example with dragging and spawning lined elements.
3. Further field testing & feedback.


###### Thank You for checking lines out.
