---
title: 数学公式
date: 2024-07-28
category: 其他
tags: [Markdown, 数学, LaTeX]
prev: /note/markdown/code
next: /note/markdown/advanced
---

Markdown 通过 `$` 包裹 LaTeX 语法来写数学公式。

## 行内公式
```markdown
    $a^2 + b^2 = c^2$ 
```

$a^2 + b^2 = c^2$ 

## 块级公式

```markdown
    $$E = mc^2$$
```

$$E = mc^2$$

## 常用公式

```markdown
分数：$\frac{1}{2}$
开方：$\sqrt{x}$
上标：$x^2$  下标：$y_1$
求和：$\sum_{i=1}^{n}$
积分：$\int_{a}^{b}$
极限：$\lim_{n \to \infty}$
```

分数：$\frac{1}{2}$  
开方：$\sqrt{x}$
上标：$x^2$  
下标：$y_1$
求和：$\sum_{i=1}^{n}$  
积分：$\int_{a}^{b}$  
极限：$\lim_{n \to \infty}$

## 希腊字母

```markdown
$\alpha$ $\beta$ $\gamma$ $\delta$ $\epsilon$ $\theta$
$\lambda$ $\mu$ $\pi$ $\sigma$ $\phi$ $\omega$ $\Delta$
```

$\alpha$ $\beta$ $\gamma$ $\delta$ $\epsilon$ $\theta$

$\lambda$ $\mu$ $\pi$ $\sigma$ $\phi$ $\omega$ $\Delta$

## 矩阵

```markdown
    $$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$$
```

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$$

## 方程组

```markdown
    $$\begin{cases} x + y = 1 \\ x - y = 0 \end{cases}$$
```

$$\begin{cases} x + y = 1 \\ x - y = 0 \end{cases}$$

## 常用运算符

```markdown
$\times$ $\cdot$ $\pm$ $\div$
$\approx$ $\leq$ $\geq$ $\neq$ $\infty$
```

$\times$ $\cdot$ $\pm$ $\div$

$\approx$ $\leq$ $\geq$ $\neq$ $\infty$

> LaTeX 数学语法非常强大，支持分数、矩阵、积分、极限等。用 `$` 包裹行内公式，`$$` 包裹块级公式即可。
