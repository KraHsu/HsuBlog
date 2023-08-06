---
title: 扩展语法
description: 'HsuBlog所提供的一些扩展语法'
pubDate: 2023-07-30T14:46:02.783Z
updatedDate: 2023-07-30T14:46:02.783Z
heroColor: ''
themeColor: ''
cover: ''
abbrlink: lkpk0hzz
tags:
    - '教程'
    - 'Markdown'
category: '快速开始'
lang: 'zh'
---

:color[HsuBlog]{color="gold"}提供许多为网页提供的扩展语法，这些语法支持[通用指令提案](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444)，具体的语法解析规则可见[micromark](https://github.com/micromark/micromark-extension-directive#syntax)

## 链接 Link

语法：`:link[title]{logo="url/of/logo" desc="description" link="link" color="background/of/link"}`

示例：`::link[枢衡KraHsu]{logo="/avatar.avif" desc="我期待着，有流星划过" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}`

::link[枢衡KraHsu]{logo="/avatar.avif" desc="我期待着，有流星划过" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

## 链接组 Links

语法：  
```markdown
:::links[title]

<!-- 在链接前可以添加段落用于描述 -->
...paragraph

<!-- 必须以若干链接(link)结尾 -->
...link 

:::
```

示例：  
```markdown
:::links[我的朋友们]

那些曾帮助过我的

::link[枢衡KraHsu]{logo="/avatar.avif" desc="我期待着，有流星划过" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

::link[枢衡KraHsu]{logo="/avatar.avif" desc="我期待着，有流星划过" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

::link[枢衡KraHsu]{logo="/avatar.avif" desc="我期待着，有流星划过" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

:::
```

:::links[我的朋友们]

那些曾帮助过我的

::link[枢衡KraHsu]{logo="/avatar.avif" desc="我期待着，有流星划过" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

::link[枢衡KraHsu]{logo="/avatar.avif" desc="我期待着，有流星划过" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

::link[枢衡KraHsu]{logo="/avatar.avif" desc="我期待着，有流星划过" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

:::

## 颜色 Color

语法：`:color[content]{color="color" bg="background"}`  
示例：`:color[HsuBlog]{color="gold"}` :color[HsuBlog]{color="gold"}

可以在段落中使用：

`:color[HsuBlog]{color="gold"}提供许多为网页提供的:color[扩展语法]{bg="#eee"}...`  
:color[HsuBlog]{color="gold"}提供许多为网页提供的:color[扩展语法]{bg="#eee"}...

## 标签 Note

语法：`::note[content]{class="" color="" bg="" icon="" id=""}`  
其中:color[HsuBlog]{color="gold"}预置了一些`class`以供使用，不在此范围内的`class`可以使用css自定义样式

其中`icon`只支持使用`local:...`语法，详见[local Fontawesome](/blog/lkplqhb8)

```markdown
::note[信息]{class="info"}
::note[注意！]{class="warn"}
::note[错误！]{class="error"}
::note[成功]{class="success"}
::note[提示]{class="tips"}

::note[小星星]{color="red" bg="green" icon="local:solid.star"}
```

::note[信息]{class="info"}
::note[注意！]{class="warn"}
::note[错误！]{class="error"}
::note[成功]{class="success"}
::note[提示]{class="tips"}

::note[小星星]{color="red" bg="green" icon="local:solid.star"}

如果要在标签中包含更多内容，请使用三个及以上 `:`

```markdown
:::note[示例]{class="info"}
就像这样
:::
```
:::note[示例]{class="info"}
就像这样
:::

## 时间线 TimeLine

语法：
```markdown
::::timeline[Title]{linecolor="color of line" color="color of title"}

...time

::::
```
其中`time`：
```markdown
:::time[time]{color="color of text" timecolor="color of time" bg="background of timecard"}

...

:::
```

示例：
```markdown
::::timeline[时间线]{linecolor="red" color="gold"}
:::time[二〇二三六月七]{color="blue" timecolor="green" bg="pink"}
内容
:::
::::
```

::::timeline[时间线]{linecolor="red" color="gold"}
:::time[二〇二三七月七]{color="blue" timecolor="green" bg="pink"}
内容
:::
::::

你也可以使用默认样式：
```markdown
::::timeline[时间线]
:::time[二〇二三七月七]
**你好，HsuBlog**  
你好，HsuBlog
:::
:::time[二〇二三七月二十三]
**扩展搜索**  
关于HsuBlog所使用的fusejs的扩展搜索语法
:::
:::time[二〇二三七月二十七]
**快速开始**  
通过本指南快速开始使用HsuBlog。
:::
:::time[二〇二三七月二十八]
**Markdown**  
介绍HsuBlog所使用的Markdown格式
:::
::::
```
::::timeline[时间线]
:::time[二〇二三七月七]
**你好，HsuBlog**  
你好，HsuBlog
:::
:::time[二〇二三七月二十三]
**扩展搜索**  
关于HsuBlog所使用的fusejs的扩展搜索语法
:::
:::time[二〇二三七月二十七]
**快速开始**  
通过本指南快速开始使用HsuBlog。
:::
:::time[二〇二三七月二十八]
**Markdown**  
介绍HsuBlog所使用的Markdown格式
:::
::::

## 图标 Icon

语法：`:i{i="local:family.name"}`
其中local语法详见[local Fontawesome](/zh/blog/lkplqhb8)

示例：
```markdown
:i{i="local:solid.dog"}和:i{i="local:solid.cat"}是最好的朋友。一天，他们在:i{i="local:solid.tree"}里发现了一张藏宝图:i{i="local:solid.map"}。决定寻宝，他们跨过:i{i="local:solid.water"}，越过:i{i="local:solid.mountain"}，克服了许多困难。  
终于，他们发现了宝藏:i{i="local:solid.gem"}。他们欢呼庆祝，他们之间的友谊更加深厚:i{i="local:solid.heart-pulse"}。
```

:i{i="local:solid.dog"}和:i{i="local:solid.cat"}是最好的朋友。一天，他们在:i{i="local:solid.tree"}里发现了一张藏宝图:i{i="local:solid.map"}。决定寻宝，他们跨过:i{i="local:solid.water"}，越过:i{i="local:solid.mountain"}，克服了许多困难。  
终于，他们发现了宝藏:i{i="local:solid.gem"}。他们欢呼庆祝，他们之间的友谊更加深厚:i{i="local:solid.heart-pulse"}。

## 选项卡 Tabs

语法：

```markdown
::::tabs[name] 

:::tab[title1]
content1
:::

::::
```

比如，

```markdown
::::tabs[name] 
:::tab[title1]
content1
:::
:::tab[title2]
content2
:::
::::
```

::::tabs[name] 
:::tab[title1]
content1
:::
:::tab[title2]
content2
:::
::::

## 相册 Gallery

语法：
```markdown
:::gallery[name]
![...](...)
:::
```

比如，

```markdown
:::gallery[gallery1]
![test1](https://lipsum.app/id/1/1600x1200)
![test2](https://lipsum.app/id/2/1600x1200)
![test3](https://lipsum.app/id/3/1600x1200)
![test4](https://lipsum.app/id/4/1600x1200)
![test5](https://lipsum.app/id/5/1600x1200)
![test6](https://lipsum.app/id/6/1600x1200)
![test7](https://lipsum.app/id/7/1600x1200)
:::
```

:::gallery[gallery1]
![test1](https://lipsum.app/id/1/1600x1200)
![test2](https://lipsum.app/id/2/1600x1200)
![test3](https://lipsum.app/id/3/1600x1200)
![test4](https://lipsum.app/id/4/1600x1200)
![test5](https://lipsum.app/id/5/1600x1200)
![test6](https://lipsum.app/id/6/1600x1200)
![test7](https://lipsum.app/id/7/1600x1200)
:::

你也可以使用 `.only-preview` 限制只显示预览，

```markdown
:::gallery[gallery2]{.only-preview}
![test1](https://lipsum.app/id/1/1600x1200)
![test2](https://lipsum.app/id/2/1600x1200)
![test3](https://lipsum.app/id/3/1600x1200)
![test4](https://lipsum.app/id/4/1600x1200)
![test5](https://lipsum.app/id/5/1600x1200)
![test6](https://lipsum.app/id/6/1600x1200)
![test7](https://lipsum.app/id/7/1600x1200)
:::
```

:::gallery[gallery2]{.only-preview}
![test1](https://lipsum.app/id/1/1600x1200)
![test2](https://lipsum.app/id/2/1600x1200)
![test3](https://lipsum.app/id/3/1600x1200)
![test4](https://lipsum.app/id/4/1600x1200)
![test5](https://lipsum.app/id/5/1600x1200)
![test6](https://lipsum.app/id/6/1600x1200)
![test7](https://lipsum.app/id/7/1600x1200)
:::

需要注意的是，`name` 是用来区分相册的，而相册中的段落用来区分组:

```markdown
:::gallery[gallery3]{.only-preview}
![test1](https://lipsum.app/id/1/1600x1200)
:::

:::gallery[gallery3]{.only-preview}
![test2](https://lipsum.app/id/2/1600x1200)
:::
```
:::gallery[gallery3]{.only-preview}
![test1](https://lipsum.app/id/1/1600x1200)
:::

:::gallery[gallery3]{.only-preview}
![test2](https://lipsum.app/id/2/1600x1200)
:::

```markdown
:::gallery[gallery4]
![test1](https://lipsum.app/id/1/1600x1200)
![test2](https://lipsum.app/id/2/1600x1200)

![test3](https://lipsum.app/id/3/1600x1200)
![test4](https://lipsum.app/id/4/1600x1200)
![test5](https://lipsum.app/id/5/1600x1200)
:::
```
:::gallery[gallery4]
![test1](https://lipsum.app/id/1/1600x1200)
![test2](https://lipsum.app/id/2/1600x1200)

![test3](https://lipsum.app/id/3/1600x1200)
![test4](https://lipsum.app/id/4/1600x1200)
![test5](https://lipsum.app/id/5/1600x1200)
:::

## 哔站和油管 Bilibili & YouTube

语法：`::bili[标题]{#BV号}` & `::youtube[标题]{#视频ID}`

比如：

`::bili[改革春风吹满地]{#1bW411n7fY}`:

::bili[改革春风吹满地]{#1bW411n7fY}

`::youtube[Baby Cats]{#E9iP8jdtYZ0}`:

::youtube[Baby Cats]{#E9iP8jdtYZ0}