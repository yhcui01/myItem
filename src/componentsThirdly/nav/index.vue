<template>
        <div class="entity_nav">
            <ul class="entity_nav_list">
                <li class="entity_nav_item active">你好呀中国</li>
                <li class="entity_nav_item">你好呀中国</li>
                <li class="entity_nav_item">你好呀中国</li>
                <li class="entity_nav_item">你好呀中国</li>
                <li class="entity_nav_item">你好呀中国</li>
                <li class="entity_nav_item">你好呀中国</li>
                <li class="entity_nav_item">你好呀中国</li>
                <li class="entity_nav_item">你好呀中国</li>
                <li class="entity_nav_item">你好呀中国</li>
            </ul>
        </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      .entity_nav
        height 1.1rem
        width 100%
        .entity_nav_list
          float left
          display flex
          .entity_nav_item
            width 4rem
            font-size 0.5rem
            text-align center
            line-height 0.5rem
            padding 0.2rem
            box-sizing border-box
            &.active
              border-bottom 1px solid red
              color red
 
</style>
