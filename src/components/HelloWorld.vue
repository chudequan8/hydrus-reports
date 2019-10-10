<script>
export default {
  props: ["msg"],
  render() {
    console.log(this.$scopedSlots);
    return (
      <div>
        <p>子组件1</p>
        <p>msg: {this.msg}</p>
        <div>
          {this.$scopedSlots.default({
            aaa: "nihao"
          })}
        </div>
      </div>
    );
  }
};
</script>
