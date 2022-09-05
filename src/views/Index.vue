<template>
  <div>
    <!-- 标题栏 -->
    <mt-header fixed flaex title="学前端,到学问">
      <div v-if="$store.state.user" slot="right">
        欢迎:{{ $store.state.user }}
      </div>
      <div v-else slot="right">
        <router-link to="/login" class="link">登录</router-link>
        <router-link to="/register" class="link">注册 </router-link>
      </div>
    </mt-header>
    <mt-navbar style="margin-top: 40px" fixed v-model="selected">
      <!-- 导航 -->
      <mt-tab-item v-for="{ id, category_name } of cats" :key="id" :id="id">
        {{ category_name }}
      </mt-tab-item>
    </mt-navbar>

    <!-- 轮播图 -->
    <mt-swipe style="margin-top: 90px; height: 56vw">
      <mt-swipe-item>
        <img src="/banner/1.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/banner/2.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/banner/3.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    <div
      v-if="articles && articles.length != 0"
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="30"
    >
      <article-item
        @click.native="$router.push(`/article?id=${item.id}`)"
        :article="item"
        v-for="item in articles"
        :key="item.id"
      ></article-item>
    </div>
  </div>
</template>
<script>
import ArticleItem from "@/components/ArticleItem.vue";
export default {
  components: {
    ArticleItem,
  },
  data() {
    return {
      selected: 1,
      cats: null,
      articles: [],
      page: 1,
      stopLoading: false,
    };
  },
  methods: {
    loadMore() {
      if (this.stopLoading) {
        return;
      }
      this.page++;
      this.loadArticles();
    },
    getCats() {
      this.axios.get("/category").then((res) => {
        this.cats = res.data.results;
      });
    },
    loadArticles() {
      //弹出等待框
      this.$indicator.open({
        text: "加载中",
        spinnerType: "fading-circle",
      });
      this.axios
        .get(`/articles?cid=${this.selected}&page=${this.page}`)
        .then((res) => {
          this.articles.push(...res.data.results);
          this.$indicator.close();
        });
    },
  },
  /** 当前页面转到前台时执行 keepAlive配套生命周期 */
  activated() {
    console.log("activated...");
    this.stopLoading = false; // 恢复加载更多功能
  },
  /** 当前页面从前台转到后台时执行 keepAlive配套生命周期 */
  deactivated() {
    console.log("deactivated...");
    this.stopLoading = true; // 停止加载更多功能
  },
  watch: {
    selected(newValue, oldValue) {
      window.scrollTo(0, 0);
      this.articles = [];
      this.page = 1;
      this.loadArticles();
    },
  },

  //组件挂载完毕后执行
  mounted() {
    this.getCats();
    this.loadArticles();
  },
};
</script>
<style scoped>
.link {
  color: #fff;
}
.mint-swipe-item img {
  width: 100%;
}
</style>