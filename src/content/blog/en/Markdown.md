---
title: Markdown
description: 'Introduction to the Markdown format used by HsuBlog'
pubDate: 2023-07-30T04:33:26.486Z
updatedDate: 2023-07-30T04:33:26.486Z
heroColor: ''
themeColor: ''
cover: ''
abbrlink: lkoy4onq
tags:
    - 'Tutorial'
    - 'Markdown'
category: 'Quick Start'
lang: 'en'
---

:color[HsuBlog]{color="gold"} Primarily, `.md` files, or `markdown` format texts, are used to generate blogs and pages. However, it's worth noting that each `Markdown` application might implement a slightly different `Markdown` syntax. These variations of `Markdown` are often referred to as `flavors`.

:color[HsuBlog]{color="gold"} offers many [extended syntax](/blog/lkpk0hzz).

## Markdown

This article provides a brief introduction. For more information, refer to the [Official Markdown Tutorial](https://markdown.com.cn/) or [Markdown Guide](https://www.markdownguide.org/getting-started).

`Markdown` is a lightweight markup language with simple formatting syntax. It allows people to focus more on the content than the formatting. You can write documents in a readable and easy-to-write plain text format, which can be mixed with `HTML` and exported as `HTML`, `PDF`, or the original `.md` format. Due to its simplicity, efficiency, readability, and writability, `Markdown` is widely used, as seen on platforms like `Github`, `Wikipedia`, and `JianShu`.

[Experience it online](https://markdown.com.cn/editor/)

### Headers

To create headers, you can prepend the word or phrase with a hash symbol `#`. The number of `#` symbols represents the header level, with a maximum of six `#` symbols.

For instance, the first three headers in this article can be represented as:

```markdown
# Formatting Introduction
## Markdown
### Headers
```

Alternatively, you can use any number of `==` symbols for a level one header or `--` symbols for a level two header:

```markdown
Formatting Introduction
===================

Markdown
-------------------
```

### Paragraphs and Line Breaks

Parts separated by blank lines are considered paragraphs. To create a line break within a paragraph, add two or more spaces at the end of any line:

```markdown
This is paragraph one

This is the first line of paragraph two (two spaces at the end of this line)  
This is the second line of paragraph two

This is the first line of paragraph three
, this is still the first line of paragraph three
```

### Emphasis

#### Bold

Text enclosed by two `*` or `_` symbols will be bolded:

| markdown                            | Output                            |
| ----------------------------------- | --------------------------------- |
| `Bold means the text is **bolded**` | Bold means the text is **bolded** |
| `Bold means the text is __bolded__` | Bold means the text is __bolded__ |

#### Italics

Text enclosed by one `*` or `_` symbol will be italicized:

| markdown                              | Output                              |
| ------------------------------------- | ----------------------------------- |
| `Italics means the text is *slanted*` | Italics means the text is *slanted* |
| `Italics means the text is _slanted_` | Italics means the text is _slanted* |

#### Bold and Italic

Text enclosed by three `*` or `_` symbols will be both bolded and italicized:

| markdown                                              | Output                                              |
| ----------------------------------------------------- | --------------------------------------------------- |
| `Bold italics means text is ***bolded and slanted***` | Bold italics means text is ***bolded and slanted*** |
| `Bold italics means text is ___bolded and slanted___` | Bold italics means text is ___bolded and slanted___ |

PS: To avoid ambiguity, use only `*` for emphasis within words. This is n_o_t v__ali__d.

### Quotes

Paragraphs starting with `>` are treated as quotes:

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

Quotes can be nested, but the rendering in :color[HsuBlog]{color="gold"} might look a bit unusual:

```markdown
> Veni, vidi, vici
> 
>> _Caesar_
```

> Veni, vidi, vici
> 
>> _Caesar_

PS: :color[HsuBlog]{color="gold"} offers an extended syntax for quote attributions. To use it, start the last paragraph with two colons:

```markdown
> Veni, vidi, vici
> 
> ::— _Caesar_
```

> Veni, vidi, vici
> 
> ::— _Caesar_

### Footnotes

**Footnotes are not part of the "standard syntax."**

You can use syntax like `[^1]` to create references and footnotes. Identifiers can be numbers or words, so `[^Caesar]` is also valid.

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

Lists are divided into ordered and unordered lists, and they can be created in a very intuitive way:

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

**You can specify the programming language at the beginning of the code block**
```javascript 
console.log("This is a code block")
```
````

`inline code`

```javascript
console.log("This is a code block")
```

Obviously, code can be nested — you just need to use more `` ` `` symbols. For example:

`````markdown
Obviously, code can be nested — you just need to use more `` ` `` symbols. For example:

````markdown
`inline code`

```javascript
console.log("This is a code block")
```
````
`````

PS: :color[HsuBlog]{color="gold"} provides an extended syntax for highlighting lines. You can specify the lines to be highlighted after the programming language in square brackets:

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

### Horizontal Lines

A line containing three or more `*`, `-`, or `_` symbols is treated as a horizontal line:

```markdown
***

---

___
```

---

### Links

`[Displayed link name](Link address "Optional Title")`: [HsuBlog](https://hsublog.pages.dev/ "HsuBlog's Address")

`<Link or Email>`: <https://hsublog.pages.dev/> & <charles040318@gmail.com>

You can also add formatting to links:

`**[Bold](https://foo.com)**`: **[Bold](https://foo.com)**

`*[Italics](https://foo.com)*`: *[Italics](https://foo.com)*

``[`code`](https://foo.com)``: [`code`](https://foo.com)

Or, for links that are used frequently, you can create reference links:

```markdown
[link1][1]
[link2][1]

[1]: https://foo.com
```

[link1][1]
[link2][1]

[1]: https://foo.com

### Images

Images are just links with a preceding exclamation mark. Text following an image is considered its caption, such as,

`![preview](https://fakeimg.pl/250x100/)HsuBlog`:

![preview](https://hsublog.pages.dev/preview.png)HsuBlog

You can also make images function as "text" for links,  
`[![preview](https://hsublog.pages.dev/preview.png)HsuBlog](https://hsublog.pages.dev)`:

[![preview](https://hsublog.pages.dev/preview.png)HsuBlog](https://hsublog.pages.dev)

### HTML

Markdown allows you to directly add `HTML` elements:

`Bold means the text is <strong>bolded</strong>`: Bold means the text is <strong>bolded</strong>

**or**

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

PS: Unless there's a specific need, it's generally best not to use HTML directly.

---

:color[HsuBlog]{color="gold"} also supports [markdown gfm](/blog/lkpepx4m) and some [extended syntax](/blog/lkpk0hzz).