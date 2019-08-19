<template>
  <div id="search">
        <div class="type_area">
            <h3>热门搜索</h3>
            <div class="search_container">
                <ul class="search_container_list">
                    <li class="search_container_item">爆款</li>
                    <li class="search_container_item active">爆11111款</li>
                    <li class="search_container_item">爆款爆款爆款爆款爆款爆款爆款爆款爆款</li>
                    <li class="search_container_item">爆</li>
                    <li class="search_container_item active">爆款爆款爆款爆款爆款爆款爆款爆款爆款爆款爆款</li>
                    <li class="search_container_item">爆款</li>
                </ul>
            </div>
           <button class="btn" @click="$router.replace('/home')">返回首页</button>
           <button class="bottom btn" @click="$router.go(-1)">返回上次</button>

        </div>
     
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../static/css/mixin.styl"
  #search
      h3
        margin 0.15rem 0
        font-size 0.8rem
        color #ccc
       .search_container_list
         dispaly flex
         flex-wrap wrap
        .search_container_item
          display inline-block
          border 1px solid #000
          padding 0.33rem
          margin 0.3rem
          margin-left 0
          text-align  center
          font-size 0.7rem
          line-height
          &.active
            color: red
            border 1px solid red
      .btn
          width 100%
          background greenyellow
      .bottom
          background pink
          margin-top 1rem

 
</style>
