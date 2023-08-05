<script setup lang="ts">
import Fuse from "fuse.js";

interface Result {
  content: string;
  title: string;
  url: string;
  cover: string;
}

const {
  lang: language,
  title,
  cover,
} = defineProps(["lang", "title", "cover"]);

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
  threshold: 1,
  useExtendedSearch: false,
  ignoreFieldNorm: false,
  fieldNormWeight: 1,
  keys: ["title", "content"],
};

const list = await hsu.getJson(`/scripts/searchData-${language}.json`);
const fuse = new Fuse(list, fuseOptions);
const results = fuse.search(title).slice(1, 7) as Fuse.FuseResult<Result>[];
console.log(results);
</script>

<template>
  <a
    class="related-post"
    v-for="{ item } in results"
    :href="item.url"
    :style="`background: url(${item.cover || cover}) center/cover no-repeat;`"
  >
    <div class="related-post-title">{{ item.title }}</div>
  </a>
</template>

<style scoped></style>
