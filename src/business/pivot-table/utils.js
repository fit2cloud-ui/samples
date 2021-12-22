export function getTextWidth(length) {
  return parseInt(length) * 4 + 30;
}
export function getMaxWidth(arr) {
  var max = arr.reduce(function (a, b) {
    return b > a ? b : a;
  });
  return max;
}
export function getSum(arr) {
  let sum = arr.reduce((pre, cur) => {
    return pre + cur
  }, 0)
  return sum
}

export function getNumArray(list, name) {
  let arr = [];
  list.forEach((item) => {
    arr.push(item[name]);
  });
  return arr;
}

export function TreeToFlat(data) {
  if (!Array.isArray(data)) {
    return []
  }
  return data.reduce((prev, curt) => {
    // 有子节点的话把子节点作为一级节点递归遍历
    const childs = curt["children"]?.length ? TreeToFlat(curt["children"]) : []
    return [...prev, curt, ...childs]
  }, [])
}



// export function getTextWidth(text) {
//   const canvas =
//     this.getTextWidth.canvas ||
//     (this.getTextWidth.canvas = document.createElement("canvas"));
//   const context = canvas.getContext("2d");
//   context.font = "12px Roboto, Helvetica, PingFang SC, Arial, sans-serif";
//   const metrics = context.measureText(text);
//   return parseInt(metrics.width) + 40;
// }
