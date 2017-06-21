<template>
  <div class="workspace pin-sidebar pin-left pin-right">
    <div id="components" class="sidebar left">
      <div class="components-group">
        <layout-components @dom='getDom' @domId='getDomId'></layout-components>
        <container-components></container-components>
        <generic-components></generic-components>
        <entity-components></entity-components>
      </div>
    </div>
    <div id="container" class="container" @drop='drop($event)' @dragover='allowDrop($event)'></div>
    <div id="properties" class="sidebar right"></div>
  </div>
</template>

<script>
// 加载控件列表模块
import LayoutComponents from './layout/LayoutComponents'
import ContainerComponents from './container/ContainerComponents'
import GenericComponents from './generic/GenericComponents'
import EntityComponents from './entity/EntityComponents'

export default {
  name: 'vdt',
  data () {
    return {
      dropDom: '',
      dropDomId: ''
    }
  },
  components: {
    LayoutComponents,
    ContainerComponents,
    GenericComponents,
    EntityComponents
  },
  methods: {
    getDom (data) {
      this.$data.dropDom = data
    },
    getDomId (data) {
      this.$data.dropDomId = data
    },
    drop (event) {
      let dropDom = this.$data.dropDom
      event.preventDefault()
      event.currentTarget.appendChild(dropDom)
      this.$store.dispatch('addDomCount')
      let dropDomId = this.$data.dropDomId
      document.getElementById(dropDomId).remove()
      let ui = document.getElementById('container').getElementsByClassName(dropDomId)
      ui[ ui.length - 1 ].removeAttribute('hidden')
    },
    allowDrop (event) {
      event.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../css/vdt.css';

.components-group {
  margin-bottom: 12px;
}
</style>
