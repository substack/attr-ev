var aev = require('../')('click', function (ev) {
    console.log('CLICK!');
});

var elems = document.querySelectorAll('*[x-click]');
for (var i = 0; i < elems.length; i++) aev(elems[i]);
