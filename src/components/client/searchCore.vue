<script setup lang="ts">
import { ref, reactive, computed, onMounted, Ref } from "vue";
import Fuse from "fuse.js";

interface Result {
  content: string;
  title: string;
  url: string;
}

function search() {
  let tmp: Fuse.FuseResult<Result>[] = fuse.search(keywords.value);
  result.value = [];

  for (let i = 0; i < tmp.length; i += 10) {
    result.value.push(tmp.slice(i, i + 10));
  }

  pageNumber.value = 1;

  pageSize.value = result.value.length;
}

const { lang: language } = defineProps(["lang"]);

const fuseOptions = {
  isCaseSensitive: false,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 1,
  shouldSort: true,
  findAllMatches: false,
  // location: 0,
  // distance: 100,
  // ignoreLocation: false,
  threshold: 0.6,
  useExtendedSearch: true,
  ignoreFieldNorm: false,
  fieldNormWeight: 1,
  keys: ["title", "content"],
};

const keywords = ref("");
const result: Ref<Fuse.FuseResult<Result>[][]> = ref([]);
const pageNumber: Ref<number> = ref(1);
const pageSize: Ref<number> = ref(0);

const list = await hsu.getJson(`/scripts/searchData-${language}.json`);
const fuse = new Fuse(list, fuseOptions);
</script>

<template>
  <input
    class="search-input"
    type="text"
    placeholder=""
    v-model="keywords"
    @keydown.enter="search"
  />
  <div class="search-results">
    <a
      v-if="result.length"
      v-for="i in 10"
      class="search-result"
      :href="result[pageNumber - 1][i - 1]?.item.url"
      >{{ result[pageNumber - 1][i - 1]?.item.title }}</a
    >
  </div>
  <div class="search-pagination">
    <span
      v-for="num in pageSize"
      :class="{ 'search-pagenumber': true, active: pageNumber == num }"
      @click="pageNumber = num"
    >
      <span>{{ num }}</span>
    </span>
  </div>
</template>

<style scoped></style>
