---
title: Markdown
description: 'Introduction to the Markdown format used by HsuBlog'
pubDate: 2023-07-28T05:31:14.722Z
updatedDate: 2023-07-28T05:31:14.722Z
heroColor: ''
themeColor: ''
abbrlink: lkm5bbfm
tags:
    - 'Tutorial'
    - 'Markdown'
category: 'Quick Start'
---

:color[HsuBlog]{color="gold"}Mainly uses `.md` files, which are `markdown` format texts, to generate blogs and pages. However, each `Markdown` application implements a slightly different `Markdown` syntax. These variations of `Markdown` are commonly referred to as `flavors`.

:color[HsuBlog]{color="gold"}Provides many **extended syntaxes**

## Markdown

This article is just a brief introduction. For more details, see [Markdown's official tutorial](https://markdown.com.cn/) or [Markdown Guide](https://www.markdownguide.org/getting-started)

`Markdown` is a lightweight markup language with concise formatting syntax, allowing people to focus more on the content itself than formatting. It uses a readable and writable plain text format to write documents, can be mixed with `HTML`, and can be exported to `HTML`, `PDF`, and its own `.md` format. Due to its simplicity, efficiency, readability, and writability, `Markdown` is widely used, such as by `Github`, `Wikipedia`, and `Jianshu`.

[Try it online](https://markdown.com.cn/editor/)

### Headings

To create a heading, add a hash symbol `#` in front of a word or phrase. The number of `#` symbols represents the heading level, up to six `#`.

For instance, the first three headings in this article can be represented as:

```markdown
# Format Introduction
## Markdown
### Headings
```

Alternatively, you can use any number of `==` symbols for first-level headings or `--` symbols for second-level headings:

```markdown
Format Introduction
===================

Markdown
-------------------
```

### Paragraphs and Line Breaks

Sections separated by blank lines are considered paragraphs. Add two or more spaces at the end of any line within a paragraph to create a line break:

```markdown
This is paragraph one

This is the first line of paragraph two (two spaces at the end of this line)  
This is the second line of paragraph two

This is the first line of paragraph three
This is still the first line of paragraph three
```

### Emphasis Syntax

#### Bold

Text wrapped with two `*` or `_` symbols will be bolded:

| markdown                            | result                            |
| ----------------------------------- | --------------------------------- |
| `Bold means the text is **bolded**` | Bold means the text is **bolded** |
| `Bold means the text is __bolded__` | Bold means the text is __bolded__ |

#### Italics

Text wrapped with one `*` or `_` symbol will be italicized:

| markdown                              | result                              |
| ------------------------------------- | ----------------------------------- |
| `Italics means the text is *slanted*` | Italics means the text is *slanted* |
| `Italics means the text is _slanted_` | Italics means the text is _slanted* |

#### Bold and Italics

Text wrapped with three `*` or `_` symbols will be bolded and italicized:

| markdown                                              | result                                              |
| ----------------------------------------------------- | --------------------------------------------------- |
| `Bold italics means text is ***bolded and slanted***` | Bold italics means text is ***bolded and slanted*** |
| `Bold italics means text is ___bolded and slanted___` | Bold italics means text is ___bolded and slanted___ |

PS: To avoid ambiguity, use `*` to italicize or bold within words or phrases. This is n_o_t v__ali__d.

### Quotes

Paragraphs that start with `>` are considered quotes:

`> Veni, vidi, vici`

> Veni, vidi, vici

Consecutive quotes are called block quotes:

```markdown
> Veni, vidi, vici
> 
> _Caesar_
```

> Veni, vidi, vici
> 
> _Caesar_

Quotes can be nested, but the rendering in :color[HsuBlog]{color="gold"} might look a bit strange:

```markdown
> Veni, vidi, vici
> 
>> _Caesar_
```

> Veni, vidi, vici
> 
>> _Caesar_

PS: :color[HsuBlog]{color="gold"} provides an extended authorship syntax for quotes, which requires writing two `:` at the beginning of the last paragraph:

```markdown
> Veni, vidi, vici
> 
> ::— _Caesar_
```

> Veni, vidi, vici
> 
> ::— _Caesar_

### Footnotes

**Footnotes are not part of the "standard syntax"**

You can use syntax like `[^1]` to create references and footnotes, and the identifier can be a number or a word: `[^Caesar]` is also acceptable.

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

### Lists

Lists are divided into ordered and unordered lists, and you can create them in a very intuitive way:

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

### Code

Code is divided into inline code and code blocks:

````markdown
`inline code`

**You can specify the language at the beginning of a code block**
```javascript 
console.log("This is a code Block")
```
````

`inline code`

```javascript
console.log("This is a code Block")
```

Clearly, code can also be nested— you just need to use more `` ` ``:

`````markdown
Clearly, code can also be nested— you just need to use more `` ` ``:

````markdown
`inline code`

```javascript
console.log("This is a code Block")
```
````
`````

PS: :color[HsuBlog]{color="gold"} offers extended row highlighting syntax, where you can specify the highlighted rows using square brackets after the code language.

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

### Divider

A paragraph that contains three or more `*`, `-`, or `_`:

```markdown
***

---

___
```

---

### Links

`[Displayed name of link](URL "Optional Title")`: [HsuBlog](https://hsublog.pages.dev/ "HsuBlog's URL")

`<URL or email>`: <https://hsublog.pages.dev/> & <charles040318@gmail.com>

You can also add styling to links:

`**[Bold](https://foo.com)**`: **[Bold](https://foo.com)**

`*[Italics](https://foo.com)*`: *[Italics](https://foo.com)*

``[`code`](https://foo.com)``: [`code`](https://foo.com)

Or for a large number of repeated links, you can create reference links:

```markdown
[link1][1]
[link2][1]

[1]: https://foo.com
```

[link1][1]
[link2][1]

### Images

Images are just links with an exclamation mark `![Image](https://fakeimg.pl/250x100/)`:

![preview](https://hsublog.pages.dev/preview.png)

You can also link an image `![preview](https://hsublog.pages.dev/preview.png)](https://hsublog.pages.dev)`:

[![preview](https://hsublog.pages.dev/preview.png)](https://hsublog.pages.dev)

### HTML

Markdown allows you to directly add `HTML` elements:

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

PS: Avoid using HTML directly unless there's a special requirement.

---

:color[HsuBlog]{color="gold"} also supports `markdown gfm` and some unique extended syntax, content for this part is being updated.

<!-- ---
title: Markdown
description: 'HsuBlog所使用的Markdown格式介绍'
pubDate: 2023-07-28T05:31:14.722Z
updatedDate: 2023-07-28T05:31:14.722Z
heroColor: ''
themeColor: ''
abbrlink: lkm5bbfm
tags: 
    - '教程'
    - 'Markdown'
category: '快速开始'
---

:color[HsuBlog]{color="gold"}主要使用`.md`文件也就是`markdown`格式的文本生成博客和页面，但实际上每个 `Markdown` 应用程序都实现了稍有不同的 `Markdown` 语法。`Markdown` 的这些变体通常被称为 `flavors`（方言）。

:color[HsuBlog]{color="gold"}就提供了许多 **扩展语法**

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

图片就是链接加一个叹号`![图片](https://fakeimg.pl/250x100/)`：

![preview](https://hsublog.pages.dev/preview.png)

你还可以为图片添加链接`[![preview](https://hsublog.pages.dev/preview.png)](https://hsublog.pages.dev)`：

[![preview](https://hsublog.pages.dev/preview.png)](https://hsublog.pages.dev)

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

:color[HsuBlog]{color="gold"} 还支持`markdown gfm`以及一些特有的扩展语法，这部分内容正在更新中 -->