---
title: GLSL 语法
date: 2024-06-22
category: shader
tags: [GLSL, Shader, 语法]
related: [shader, dot-cross]
prev: /note/shader
next: /note/dot-cross
---

## GLSL 基础

GLSL（OpenGL Shading Language）是 OpenGL 的着色语言，语法类似 C 语言，但针对 GPU 并行计算做了优化。

## 数据类型

- `float` / `int` / `bool` — 基本类型
- `vec2` / `vec3` / `vec4` — 向量类型
- `mat2` / `mat3` / `mat4` — 矩阵类型
- `sampler2D` — 纹理采样器

## 内置函数

- `normalize()` — 归一化向量
- `dot()` — 点乘
- `cross()` — 叉乘
- `mix()` — 混合
- `clamp()` — 钳制
- `smoothstep()` — 平滑过渡
- `texture()` — 纹理采样

> GLSL 是写 Shader 的必备技能，配合向量运算知识效果更佳。[查看点乘与叉乘笔记 →](/note/dot-cross)
