<template>
  <div>
    <div class="title active titleName">
      布局
    </div>
    <ul>
      <li draggable='true' @dragstart='drag($event)' class="layoutLi" id="single-column"  v-for="n in singleColumnCount">
        <span class="layoutSpan">单列布局 {{ singleColumnCount - 1 }}</span>
        <single-column :dropDom="dropDom"></single-column>
      </li>
      <li draggable='true' @dragstart='drag($event)' class="layoutLi" id="double-column">
        <span class="layoutSpan">双列布局 {{ doubleColumnCount - 1 }}</span>
      </li>
      <li draggable='true' @dragstart='drag($event)' class="layoutLi" id="triplex-column">
        <span class="layoutSpan">三列布局 {{ triplexColumnCount - 1 }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// 加载布局控件模块
import SingleColumn from './SingleColumn'
export default {
  name: 'layoutComponents',
  data () {
    return {
      dropDom: [{
        dragId: '',
        dragDom: ''
      }]
    }
  },
  components: {
    SingleColumn
  },
  computed: {
    ...mapGetters({
      singleColumnCount: 'singleColumnCount',
      doubleColumnCount: 'doubleColumnCount',
      triplexColumnCount: 'triplexColumnCount'
    })
  },
  methods: {
    drag (event) {
      let dragId = event.currentTarget.id
      let dragDom = event.currentTarget.getElementsByClassName(dragId)[0]
      this.$data.dropDom[0].dragId = dragId
      this.$data.dropDom[0].dragDom = dragDom
      this.$emit('domId', dragId)
      this.$emit('dom', dragDom)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleName {
  width: auto;
  margin: 10px 0;
  padding: 0 10px;
  text-align: left;
}

.layoutLi {
  text-align: left;
}

.layoutSpan {
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
