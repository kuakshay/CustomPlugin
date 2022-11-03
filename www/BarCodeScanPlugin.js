var exec = require('cordova/exec');





module.exports.add = function (arg0, success, error) {
    exec(success, error, 'BarCodeScanPlugin', 'add', [arg0]);
};
module.exports.substract = function (arg0, success, error) {
    exec(success, error, 'BarCodeScanPlugin', 'substract', [arg0]);
};
// module.exports.mul = function (arg0, success, error) {
//     exec(success, error, 'BarCodeScanPlugin', 'mul', [arg0]);
// };
// module.exports.div = function (arg0, success, error) {
//     exec(success, error, 'BarCodeScanPlugin', 'div', [arg0]);
// };
