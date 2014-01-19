module.exports = function (name, cb) {
    return function (elem) {
        elem.addEventListener(name, cb);
    };
};
