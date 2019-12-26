<template>
  <transition name="fade-transform" mode="out-in">
    <div v-if="show" class="ts-study">
      {{title}}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TsStudy',
  data () {
    return {
      title: '学习ts',
      show: false
    }
  },
  methods: {
  },
  mounted () {
    this.show = true
    console.log(this.show)
  }
}
</script>
