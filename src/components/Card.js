export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  render() {
    return (
      <div class="dq-card">
        {this.$scopedSlots.header ? (
          this.$scopedSlots.header()
        ) : this.title ? (
          <h3 class="dq-card-title">{this.title}</h3>
        ) : null}
        {this.$slots.default}
      </div>
    )
  }
}
