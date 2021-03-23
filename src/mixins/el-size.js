const ElSize = {
  computed: {
    computeSize({size, $ELEMENT}) {
      return size || $ELEMENT?.size
    }
  }
}
export default ElSize
