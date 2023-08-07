---
title: Extended Syntax
description: 'Some of the extension syntax provided by HsuBlog'
pubDate: 2023-07-30T14:46:02.783Z
updatedDate: 2023-07-30T14:46:02.783Z
heroColor: ''
themeColor: ''
cover: ''
abbrlink: lkpk0hzz
tags:
    - 'Tutorial'
    - 'Markdown'
category: 'Quick Start'
lang: 'en'
---

HsuBlog provides many extended syntax features for web pages, supporting the [Generic Directives Proposal](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444). Specific syntax parsing rules can be seen at [micromark](https://github.com/micromark/micromark-extension-directive#syntax).

## Math

To use the math support, you need to enable math support in the **site configuration**.

Syntax: Inline `$...$` and Block `$$...$$`, where `...` is the corresponding `LATEX` formula.

Examples:
|            Formula            |       Rendered Result       |
| :---------------------------: | :-------------------------: |
|          `$\LaTeX$`           |          $\LaTeX$           |
|           `$a + b$`           |           $a + b$           |
|        `$\frac{a}{b}$`        |        $\frac{a}{b}$        |
|   `$\alpha, \beta, \gamma$`   |   $\alpha, \beta, \gamma$   |
|         `$a^b, a_b$`          |         $a^b, a_b$          |
|        `$\sqrt[n]{a}$`        |        $\sqrt[n]{a}$        |
|         `$\log_b a$`          |         $\log_b a$          |
| `$\sin(a), \cos(a), \tan(a)$` | $\sin(a), \cos(a), \tan(a)$ |
|    `$\sum_{i=1}^{n} a_i$`     |    $\sum_{i=1}^{n} a_i$     |
|    `$\int_a^b f(x) \, dx$`    |    $\int_a^b f(x) \, dx$    |

Due to the vast and varied content in this section, no further explanation will be given. For more details, you can visit [oi-wiki](https://oi-wiki.org/tools/latex/) or [Overleaf](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes).

## Link

Syntax: `:link[title]{logo="url/of/logo" desc="description" link="link" color="background/of/link"}`

Example: `::link[KraHsu]{logo="/avatar.avif" desc="I'm looking forward to, a meteor passing by" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}`

::link[KraHsu]{logo="/avatar.avif" desc="I'm looking forward to, a meteor passing by" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

## Links Group

Syntax:  
```markdown
:::links[title]

<!-- You can add a paragraph before the links for description -->
...paragraph

<!-- It must end with some links(link) -->
...link 

:::
```

Example:  
```markdown
:::links[My Friends]

Those who have helped me

::link[KraHsu]{logo="/avatar.avif" desc="I'm looking forward to, a meteor passing by" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

::link[KraHsu]{logo="/avatar.avif" desc="I'm looking forward to, a meteor passing by" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

::link[KraHsu]{logo="/avatar.avif" desc="I'm looking forward to, a meteor passing by" link="https://blog.krahsu.top" color="rgba(255, 247, 241, 0.6)"}

::link[Astro]{logo="https://astro.build/favicon.svg" desc="all-in-one web framework" link="https://astro.build/" color="#fbe3ffa6"}

:::
```

## Color

Syntax: `:color[content]{color="color" bg="background"}`  
Example: `:color[HsuBlog]{color="gold"}` :color[HsuBlog]{color="gold"}

It can be used in paragraphs:

`:color[HsuBlog]{color="gold"} provides many:color[extended syntax]{bg="#eee"} features for web pages...`  
:color[HsuBlog]{color="gold"} provides many:color[extended syntax]{bg="#eee"} features for web pages...

## Note

Syntax: `::note[content]{class="" color="" bg="" icon="" id=""}`  
HsuBlog provides some pre-defined `class` to use, styles for `class` not in this range can be customized with css

`icon` only supports using `local:...` syntax, see [local Fontawesome](/blog/lkplqhb8)

```markdown
::note[Info]{class="info"}
::note[Warn]{class="warn"}
::note[Error]{class="error"}
::note[Success]{class="success"}
::note[Tips]{class="tips"}

::note[Star]{color="red" bg="green" icon="local:solid.star"}
```

If you want to include more content within a note, use three or more `:`

```markdown
:::note[Example]{class="info"}
Just like this.
:::
```
:::note[Example]{class="info"}
Just like this.
:::

## Timeline

Syntax:
```markdown
::::timeline[Title]{linecolor="color of line" color="color of title"}

...time

::::
```
`time` syntax:
```markdown
:::time[time]{color="color of text" timecolor="color of time" bg="background of timecard"}

...

:::
```

Example:
```markdown
::::timeline[TimeLine]{linecolor="red" color="gold"}
:::time[Jul 7 2023]{color="blue" timecolor="green" bg="pink"}
content
:::
::::
```

You can also use the default style:
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

## Icon

Syntax: `:i{i="local:family.name"}`
For the local syntax, see [local Fontawesome](/blog/lkplqhb8)

Example:
```markdown
:i{i="local:solid.dog"} and :i{i="local:solid.cat"} are best friends. One day, they found a treasure map :i{i="local:solid.map"} in the :i{i="local:solid.tree"}. Deciding to hunt for treasure, they crossed :i{i="local:solid.water"}, bypassed :i{i="local:solid.mountain"}, overcoming many difficulties.  
Finally, they found the treasure :i{i="local:solid.gem"}. They cheered in celebration, their friendship deepened even more :i{i="local:solid.heart-pulse"}.
```

:i{i="local:solid.dog"} and :i{i="local:solid.cat"} are best friends. One day, they found a treasure map :i{i="local:solid.map"} in the :i{i="local:solid.tree"}. Deciding to hunt for treasure, they crossed :i{i="local:solid.water"}, bypassed :i{i="local:solid.mountain"}, overcoming many difficulties.  
Finally, they found the treasure :i{i="local:solid.gem"}. They cheered in celebration, their friendship deepened even more :i{i="local:solid.heart-pulse"}.

## Tabs

Syntax:

```markdown
::::tabs[name] 

:::tab[title1]
content1
:::

::::
```

For example,

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

## Gallery

Syntax:
```markdown
:::gallery[name]
![...](...)
:::
```

For example,

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

You can also use `.only-preview` to restrict it to only show the preview,

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

Note that the `name` is used to differentiate galleries, and paragraphs within the gallery are used to differentiate groups:

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

## Bilibili & YouTube

Syntax: `::bili[title]{#BV number}` & `::youtube[title]{#video ID}`

For example:

`::bili[改革春风吹满地]{#1bW411n7fY}`:

::bili[改革春风吹满地]{#1bW411n7fY}

`::youtube[Baby Cats]{#E9iP8jdtYZ0}`:

::youtube[Baby Cats]{#E9iP8jdtYZ0}