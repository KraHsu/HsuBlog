---
title: 扩展语法
description: ''
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
::note[Info]{class="info"}
::note[Warn]{class="warn"}
::note[Error]{class="error"}
::note[Success]{class="success"}
::note[Tips]{class="tips"}

::note[Star]{color="red" bg="green" icon="local:solid.star"}
```

::note[Info]{class="info"}
::note[Warn]{class="warn"}
::note[Error]{class="error"}
::note[Success]{class="success"}
::note[Tips]{class="tips"}

::note[Star]{color="red" bg="green" icon="local:solid.star"}

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
::::timeline[TimeLine]{linecolor="red" color="gold"}
:::time[Jul 7 2023]{color="blue" timecolor="green" bg="pink"}
content
:::
::::
```

::::timeline[TimeLine]{linecolor="red" color="gold"}
:::time[Jul 7 2023]{color="blue" timecolor="green" bg="pink"}
content
:::
::::

你也可以使用默认样式：
```markdown
::::timeline[TimeLine]
:::time[Jul 22 2023]
**hello world**  
hello world
:::
:::time[Jul 23 2023]
**Extended Search**  
HsuBlog's Extended Search Syntax Using Fuse.js
:::
:::time[Jul 27 2023]
**Quick Start**  
HsuBlog's Extended Search Syntax Using Fuse.js
:::
:::time[Jul 28 2023]
**Markdown**  
Introduction to the Markdown format used by HsuBlog
:::
::::
```
::::timeline[TimeLine]
:::time[Jul 22 2023]
**hello world**  
hello world
:::
:::time[Jul 23 2023]
**Extended Search**  
HsuBlog's Extended Search Syntax Using Fuse.js
:::
:::time[Jul 27 2023]
**Quick Start**  
HsuBlog's Extended Search Syntax Using Fuse.js
:::
:::time[Jul 28 2023]
**Markdown**  
Introduction to the Markdown format used by HsuBlog
:::
::::

## 图标 Icon

语法：`:i{i="local:family.name"}`
其中local语法详见[local Fontawesome](/blog/lkplqhb8)

示例：
```markdown
:i{i="local:solid.dog"}和:i{i="local:solid.cat"}是最好的朋友。一天，他们在:i{i="local:solid.tree"}里发现了一张藏宝图:i{i="local:solid.map"}。决定寻宝，他们跨过:i{i="local:solid.water"}，越过:i{i="local:solid.mountain"}，克服了许多困难。  
终于，他们发现了宝藏:i{i="local:solid.gem"}。他们欢呼庆祝，他们之间的友谊更加深厚:i{i="local:solid.heart-pulse"}。
```

:i{i="local:solid.dog"}和:i{i="local:solid.cat"}是最好的朋友。一天，他们在:i{i="local:solid.tree"}里发现了一张藏宝图:i{i="local:solid.map"}。决定寻宝，他们跨过:i{i="local:solid.water"}，越过:i{i="local:solid.mountain"}，克服了许多困难。  
终于，他们发现了宝藏:i{i="local:solid.gem"}。他们欢呼庆祝，他们之间的友谊更加深厚:i{i="local:solid.heart-pulse"}。
