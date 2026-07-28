---
title: Shader 入门
date: 2024-06-20
category: shader
tags: [Shader, GLSL, OpenGL]
related: [glsl, dot-cross]
next: /note/glsl
---

## 什么是 Shader

Shader（着色器）是运行在 GPU 上的小程序，用于处理图形渲染中的顶点和像素数据。在 OpenGL 中，Shader 使用 **GLSL**（OpenGL Shading Language）编写。

## Shader 类型

常见的 Shader 类型包括：

- **顶点着色器（Vertex Shader）**：处理每个顶点的位置变换
- **片元着色器（Fragment Shader）**：计算每个像素的颜色
- **几何着色器（Geometry Shader）**：可以生成新的几何体

## 基本工作流程

- 编写 GLSL 源码
- 创建 Shader 对象并编译
- 创建 Shader Program 并链接
- 在渲染循环中使用 Program
- 通过 Uniform 传递数据给 Shader

> Shader 是图形学的基础，建议先掌握 GLSL 语法再深入。[查看 GLSL 语法笔记 →](/note/glsl)
