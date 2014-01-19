# attr-ev

attribute-registered dom event listener

# example

``` html
<html>
  <body>
    <button x-click="clk">click me</button>
    <script src="bundle.js"></script>
  </body>
</html>
```

``` js
var aev = require('attr-ev')('click', function (ev) {
    console.log('CLICK!');
});

var elems = document.querySelectorAll('*[x-click]');
for (var i = 0; i < elems.length; i++) aev(elems[i]);
```

compile with [browserify](http://browserify.org):

```
browserify browser.js > bundle.js
```

then open `index.html` in a browser.

You can also use this module with
[attractor](https://npmjs.org/package/attractor):

``` js
var scope = {
    clk: function (ev) { console.log('CLICK!') }
};
var attractor = require('attractor');
var attr = attrractor({
    'x-click': [ require('attr-ev'), 'click' ]
}, scope);
attr.scan(document);
```

# methods

``` js
var aev = require('attr-ev')
```

## var reg = aev(name, cb)

Return a register function `reg()` for the event named by the string `name` and
the event handler `cb(ev)`.

## reg(elem)

Register the event handler for the dom element `elem`.

# install

With [npm](https://npmjs.org) do:

```
npm install attr-ev
```

# license

MIT
