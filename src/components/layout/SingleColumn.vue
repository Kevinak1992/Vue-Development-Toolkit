<template>
  <div class="single-column" hidden>
    <div class="row">
      <div class="col-md-12 bdt-droppable" @drop='drop($event)' @dragover='allowDrop($event)'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleColumn',
  data () {
    return {

    }
  },
  props: [
    'dropDom'
  ],
  methods: {
    drop (event) {
      let dropDom = this.$props.dropDom[0].dragDom
      event.preventDefault()
      event.currentTarget.appendChild(dropDom)
      let dropDomId = this.$props.dropDom[0].dragId
      document.getElementById(dropDomId).remove()
      let ui = document.getElementById('container').getElementsByClassName(dropDomId)
      for (let a = 0; a < ui.length; a++) {
        ui[a].removeAttribute('hidden')
      }
      this.$store.dispatch('addDomCount', dropDomId)
      event.stopPropagation()
    },
    allowDrop (event) {
      event.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
