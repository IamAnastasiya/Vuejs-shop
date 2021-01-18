<template>
  <div class="wrapper">
    <div class="shop-slider" :style="{ 'margin-left': '-' + (100*currentSlideIndex) + '%'}">
      <shop-slider-item
        v-for="item in slider_data"
        :key="item.id"
        v-bind:item_data="item"
        @click="filterByCategory(item.category)"
      />
    </div>
  </div>
</template>

<script>
  import shopSliderItem from './shop-slider-item'

  export default {
  name: "shop-slider",
  components: {shopSliderItem},
  props: {
    slider_data: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentSlideIndex: 0
    }
    },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex <= 0) {
        this.currentSlideIndex = this.slider_data.length-1
      } else {
        this.currentSlideIndex--
      }
    },
    nextSlide () {
      if (this.currentSlideIndex >= this.slider_data.length - 1) {
        this.currentSlideIndex = 0
      } else {
        this.currentSlideIndex++
      }
    },
    filterByCategory (cat) {
      console.log(cat)
    }
  },
  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide()
      }, vm.interval)
    }

  }
  }
</script>

<style lang="scss">
  .wrapper {
    max-width: 900px;
    overflow: hidden;
    margin: 0 auto;
  }
  .shop-slider {
    display: flex;
    transition: all ease .7s;
  }
</style>