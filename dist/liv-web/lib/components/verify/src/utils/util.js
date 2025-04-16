'use strict';

function resetSize(vm) {
  var img_width, img_height, bar_width, bar_height;
  var parentWidth = vm.$el.parentNode.offsetWidth || window.offsetWidth;
  var parentHeight = vm.$el.parentNode.offsetHeight || window.offsetHeight;
  if (vm.imgSize.width.indexOf("%") != -1) {
    img_width = parseInt(vm.imgSize.width) / 100 * parentWidth + "px";
  } else {
    img_width = vm.imgSize.width;
  }
  if (vm.imgSize.height.indexOf("%") != -1) {
    img_height = parseInt(vm.imgSize.height) / 100 * parentHeight + "px";
  } else {
    img_height = vm.imgSize.height;
  }
  if (vm.barSize.width.indexOf("%") != -1) {
    bar_width = parseInt(vm.barSize.width) / 100 * parentWidth + "px";
  } else {
    bar_width = vm.barSize.width;
  }
  if (vm.barSize.height.indexOf("%") != -1) {
    bar_height = parseInt(vm.barSize.height) / 100 * parentHeight + "px";
  } else {
    bar_height = vm.barSize.height;
  }
  return { imgWidth: img_width, imgHeight: img_height, barWidth: bar_width, barHeight: bar_height };
}
const _code_chars = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
const _code_color1 = ["#fffff0", "#f0ffff", "#f0fff0", "#fff0f0"];
const _code_color2 = ["#FF0033", "#006699", "#993366", "#FF9900", "#66CC66", "#FF33CC"];

exports._code_chars = _code_chars;
exports._code_color1 = _code_color1;
exports._code_color2 = _code_color2;
exports.resetSize = resetSize;
//# sourceMappingURL=util.js.map
