<template>
  <div class="shop-select">
    <p>Choose category:</p>
    <p
        class="title"
        @click="areOptionsVisible = !areOptionsVisible"
    >
      {{selected}}
    </p>
    <div
        class="options"
        v-if="areOptionsVisible"
    >
      <p
          class="option-item"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.category}}
      </p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "shop-select",
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        areOptionsVisible: false
      }
    },
    computed: {
    },
    methods: {
      selectOption (option) {
        this.$emit("select", option)
        this.areOptionsVisible = false
      },
      hideOptions () {
        this.areOptionsVisible = false
      }
    },
    mounted() {
      document.addEventListener('click', this.hideOptions.bind(this), true)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hideOptions)
    }
  }
</script>

<style lang = scss>
  .shop-select {
    position: relative;
    width: 200px;
  }

  .title {
    border: 1px solid grey;
    cursor: pointer;
  }

  .options {
    border: 1px solid grey;
    position: absolute;
    top: 25px;
    right: 0;
    width: 100%;
    background: white;
  }

  .option-item {
    margin: 0;
    cursor: pointer;
  }
  .option-item:hover {
    background: #a479cd;
  }
</style>