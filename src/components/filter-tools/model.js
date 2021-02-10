export class ComplexCondition {
  constructor(options = {}) {
    this.name = options.name;
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
