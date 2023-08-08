---
title: Markdown
description: '介绍HsuBlog所使用的Markdown格式'
pubDate: 2023-07-30T04:33:26.486Z
updatedDate: 2023-07-30T04:33:26.486Z
heroColor: ''
themeColor: ''
cover: ''
abbrlink: lkoy4onq
tags:
    - '教程'
    - 'Markdown'
category: '快速开始'
lang: 'zh'
---

:color[HsuBlog]{color="gold"}主要使用`.md`文件也就是`markdown`格式的文本生成博客和页面，但实际上每个 `Markdown` 应用程序都实现了稍有不同的 `Markdown` 语法。`Markdown` 的这些变体通常被称为 `flavors`（方言）。

:color[HsuBlog]{color="gold"}就提供了许多 [扩展语法](/zh/blog/lkpk0hzz)

## Markdown

本文只作简要介绍，更多内容参见[Markdown官方教程](https://markdown.com.cn/)或[Markdown Guide](https://www.markdownguide.org/getting-started)

`Markdown`是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与`HTML`混编，可导出 `HTML`、`PDF` 以及本身的 `.md` 格式的文件。因简洁、高效、易读、易写，`Markdown`被大量使用，如`Github`、`Wikipedia`、`简书`等。

[在线体验](https://markdown.com.cn/editor/)

### 标题

要创建标题，请在单词或短语前面添加井号`#`,`#`的数量代表了标题的级别，最多6个`#`。

比如本文的前三个标题就可以表示为

```markdown
# 格式介绍
## Markdown
### 标题
```

或者，你也可以使用任意数量的 `==` 号来标识一级标题，或者 `--` 号来标识二级标题

```markdown
格式介绍
===================

Markdown
-------------------
```

### 段落和换行

被空白行分隔的部分被认为是一个段落，在段落内任意行的末尾添加两个或多个空格即可创建一个换行：

```markdown
这是段落一

这是段落二的第一行(这一行末尾有两个空格)  
这是段落二的第二行

这是段落三的第一行
，这还是段落三的第一行
```

### 强调语法

#### 粗体

被两个`*`或`-`包裹的文本会被加粗：

| markdown                            | 效果                              |
| ----------------------------------- | --------------------------------- |
| `Bold means the text is **bolded**` | Bold means the text is **bolded** |
| `Bold means the text is __bolded__` | Bold means the text is __bolded__ |

#### 斜体

被一个`*`或`-`包裹的文本会被倾斜：

| markdown                              | 效果                                |
| ------------------------------------- | ----------------------------------- |
| `Italics means the text is *slanted*` | Italics means the text is *slanted* |
| `Italics means the text is _slanted_` | Italics means the text is _slanted_ |

#### 粗斜体

被三个`*`或`-`包裹的文本会被加粗同时倾斜：

| markdown                                              | 效果                                                |
| ----------------------------------------------------- | --------------------------------------------------- |
| `Bold italics means text is ***bolded and slanted***` | Bold italics means text is ***bolded and slanted*** |
| `Bold italics means text is ___bolded and slanted___` | Bold italics means text is ___bolded and slanted___ |

PS: 为了避免歧义，在单词或短语中间进行斜体或加粗只能使用`*`，This is n_o_t v__ali__d

### 引言

以`>`开头的段落被视为引言:

`> Veni, vidi, vici`

> Veni, vidi, vici

连续的引用被称为块引用：

```markdown
> Veni, vidi, vici
> 
> _Caesar_
```

> Veni, vidi, vici
> 
> _Caesar_

引用可以嵌套，但是:color[HsuBlog]{color="gold"}的渲染效果可能略显奇怪：

```markdown
> Veni, vidi, vici
> 
>> _Caesar_
```

> Veni, vidi, vici
> 
>> _Caesar_

PS：:color[HsuBlog]{color="gold"}为引用提供扩展的署名语法，需要在最后一个段落的开头写两个`:`

```markdown
> Veni, vidi, vici
> 
> ::— _Caesar_
```

> Veni, vidi, vici
> 
> ::— _Caesar_

### 脚注

**脚注并不是“标准语法”的一部分**

你可以使用像`[^1]`这样的语法创建参考和脚注，标识符可以是数字或者单词：`[^Caesar]`也是可以的。

```markdown
> Veni, vidi, vici
> 
> ::— _Caesar_[^Caesar]

[^Caesar]: Gaius Julius Caesar (12 July 100 BC – 15 March 44 BC) was a Roman general and statesman.
```
> Veni, vidi, vici
> 
> ::— _Caesar_[^Caesar]

[^Caesar]: Gaius Julius Caesar (12 July 100 BC – 15 March 44 BC) was a Roman general and statesman.

### 列表

列表分为有序列表和无序列表，你可以以很直观的方式创建他们：

```markdown
- First item
- Second item
- Third item
  - First child
  - Second child
- Fourth item

1. First item
2. Second item
3. Third item
   1. First child
   2. Second child    
4. Fourth item  
```

- First item
- Second item
- Third item
  - First child
  - Second child
- Fourth item

1. First item
2. Second item
3. Third item
   1. First child
   2. Second child    
4. Fourth item  

### 代码

代码分为行内代码和代码块：

````markdown
`inline code`

**你可以在代码块的开头加上代码语言**
```javascript 
console.log("This is a code Block")
```
````

`inline code`

```javascript
console.log("This is a code Block")
```

显然，代码也可以嵌套——你只需要使用更多的 `` ` `` ，比如：

`````markdown
显然，代码也可以嵌套——你只需要使用更多的 `` ` `` ，比如：

````markdown
`inline code`

```javascript
console.log("This is a code Block")
```
````
`````

PS: :color[HsuBlog]{color="gold"}提供扩展的高亮行语法，你可以在代码语言的后面用方括号提供需要高亮的行

````markdown
```html[3,5-6]
<span class="line"><span style="color: #5C6166">1</span></span>
<span class="line"><span style="color: #5C6166">2</span></span>
<span class="line highlight"><span style="color: #5C6166">3</span></span>
<span class="line"><span style="color: #5C6166">4</span></span>
<span class="line highlight"><span style="color: #5C6166">5</span></span>
<span class="line highlight"><span style="color: #5C6166">6</span></span>
```
````

```html[3,5-6]
<span class="line"><span style="color: #5C6166">1</span></span>
<span class="line"><span style="color: #5C6166">2</span></span>
<span class="line highlight"><span style="color: #5C6166">3</span></span>
<span class="line"><span style="color: #5C6166">4</span></span>
<span class="line highlight"><span style="color: #5C6166">5</span></span>
<span class="line highlight"><span style="color: #5C6166">6</span></span>
```

### 分割线

一个只包含三个及以上`*`，`-`或`_`的段落：

```markdown
***

---

___
```

---

### 链接

`[连接显示的名称](连接的地址 "可选的Title")`: [HsuBlog](https://hsublog.pages.dev/ "HsuBlog的地址")

`<链接或者邮箱>`: <https://hsublog.pages.dev/> & <charles040318@gmail.com>

你也可以为链接添加格式：

`**[Bold](https://foo.com)**`: **[Bold](https://foo.com)**

`*[Italics](https://foo.com)*`: *[Italics](https://foo.com)*

``[`code`](https://foo.com)``: [`code`](https://foo.com)

或者对于大量重复的链接，你可以创建引用链接：

```markdown
[link1][1]
[link2][1]

[1]: https://foo.com
```

[link1][1]
[link2][1]

[1]: https://foo.com

### 图片

图片就是链接加一个叹号，图片后紧跟的文本会被认为是图片注释，比如,

`![preview](https://fakeimg.pl/250x100/)HsuBlog`：

![preview](https://hsublog.pages.dev/preview.png)HsuBlog

你还可以将图片作为链接的“文本”，  
`[![preview](https://hsublog.pages.dev/preview.png)HsuBlog](https://hsublog.pages.dev)`：

[![preview](https://hsublog.pages.dev/preview.png)HsuBlog](https://hsublog.pages.dev)

### html

markdown 允许你直接添加`html`元素:

`Bold means the text is <strong>bolded</strong>`: Bold means the text is <strong>bolded</strong>

```markdown
<p>
    <code>
    Bold means the text is &lt;strong&gt;bolded&lt;/strong&gt;
    </code> 
    : Bold means the text is <strong>bolded</strong>
</p>
```

<p>
    <code>
    Bold means the text is &lt;strong&gt;bolded&lt;/strong&gt;
    </code> 
    : Bold means the text is <strong>bolded</strong>
</p>

PS: 没有特殊需求的情况下请尽量不要直接使用HTML

---

:color[HsuBlog]{color="gold"} 还支持 [markdown gfm](/blog/lkpepx4m) 以及一些 [扩展语法](/zh/blog/lkpk0hzz)