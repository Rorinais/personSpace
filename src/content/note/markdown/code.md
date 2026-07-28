---
title: 代码块与高亮
date: 2026-07-28
category: 其他
tags: [Markdown, 代码, 高亮]
prev: /note/markdown
next: /note/markdown/math
---

## 行内代码

用反引号包裹文字，就会显示为等宽字体：

```markdown
用 `code` 标记代码
```

用 `code` 标记代码

## 代码块

三个反引号包裹多行代码，后面跟语言名可以开启语法高亮：

````markdown
    ```cpp
    #include <iostream>
    int main() {
        return 0;
    }
    ```
````

渲染效果：

```cpp
#include <iostream>
int main() {
    return 0;
}
```

## 更多语言示例

```python
def greet(name):
    print(f"Hello, {name}!")
```

```html
<h1>Hello World</h1>
<p>一段 HTML</p>
```

```javascript
const hello = (name) => console.log(`Hello, ${name}!`)
```

支持的语言：cpp, python, html, javascript, css, json, bash, glsl, cmake
