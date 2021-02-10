export class ComplexCondition {
  constructor(options = {}) {
    this.label = options.label;
    this.operator = options.operator;
    this.value = options.value;
  }
}

export class Condition {
  constructor(options = {}) {
    this.quick = options.quick;
    this.complex = options.complex;
  }
}

export const OPERATORS = {
  LIKE: {
    label: "包含",
    value: "like"
  },
  NOT_LIKE: {
    label: "不包含",
    value: "not like"
  },
  IN: {
    label: "属于",
    value: "in"
  },
  NOT_IN: {
    label: "不属于",
    value: "not in"
  },
  GT: {
    label: "大于",
    value: "gt"
  },
  GE: {
    label: "大于等于",
    value: "ge"
  },
  LT: {
    label: "小于",
    value: "lt"
  },
  LE: {
    label: "小于等于",
    value: "le"
  },
  EQ: {
    label: "等于",
    value: "eq"
  },
  NE: {
    label: "不等于",
    value: "ne"
  },
  BETWEEN: {
    label: "之间",
    value: "between"
  }
}
