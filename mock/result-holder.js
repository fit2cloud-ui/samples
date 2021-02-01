class ResultHolder {
  constructor(success, data, message) {
    this.success = success;
    this.data = data;
    this.message = message;
  }
}

export const success = data => {
  return new ResultHolder(true, data)
}

export const error = message => {
  return new ResultHolder(false, undefined, message)
}
