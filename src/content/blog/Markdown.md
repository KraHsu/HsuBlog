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