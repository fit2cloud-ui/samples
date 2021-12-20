export function getTextWidth(text) {
  const canvas =
    this.getTextWidth.canvas ||
    (this.getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = "12px Roboto, Helvetica, PingFang SC, Arial, sans-serif";
  const metrics = context.measureText(text);
  return parseInt(metrics.width) + 40;
}

export function getChildList(list, value) {
  let childRow = []
  const filter = list.filter((v) => v.value === value);
  if (filter.length > 0)(
    childRow = filter[0].children
  )
  return childRow;
}

export function getMaxWidth(arr) {
  var max = arr.reduce(function (a, b) {
    return b > a ? b : a;
  });
  return max;
}
