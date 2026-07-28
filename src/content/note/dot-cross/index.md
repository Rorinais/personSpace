---
title: 点乘与叉乘
date: 2024-06-21
category: shader
tags: [数学, 向量, Shader]
related: [shader, glsl]
prev: /note/glsl
next: /note/vue
---

## 向量运算基础

在图形学中，向量运算是核心数学工具。点乘和叉乘是最常用的两种向量运算。

## 点乘（Dot Product）

A·B = |A| × |B| × cos(θ)

几何意义：衡量两个向量的相似程度。结果 = 0 时垂直，> 0 时夹角 < 90°，< 0 时夹角 > 90°。

常用于光照计算中的漫反射、判断物体前后关系。

## 叉乘（Cross Product）

A×B = |A| × |B| × sin(θ) × n

几何意义：得到垂直于两向量的新向量。

常用于计算法线方向、判断左右关系、构建坐标系。

> 理解向量运算是学习 Shader 光照计算的关键。[查看 Shader 入门笔记 →](/note/shader)
