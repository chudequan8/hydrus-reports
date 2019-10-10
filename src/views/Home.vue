<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  render() {
    const scopedSlots = {
      default: prop => <header>header{prop.aaa}</header>
    }
    return (
      <div class="home">
        <HelloWorld
          msg="Welcome to Your Vue.js App"
          scopedSlots={scopedSlots}
        />
      </div>
    )
  }
}
</script>
