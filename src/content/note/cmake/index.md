---
title: CMake 入门
date: 2024-04-25
category: C++相关
tags: [CMake, 构建工具, C++]
related: [cpp-basic]
prev: /note/cpp-basic
---

## 什么是 CMake

CMake 是一个跨平台构建系统，用于管理 C/C++ 项目编译。

## 基本用法

- `cmake_minimum_required()` — 指定最低版本
- `project()` — 定义项目名
- `add_executable()` — 添加可执行文件
- `target_link_libraries()` — 链接库
- `find_package()` — 查找依赖

> CMake + C++ 是图形学项目标准配置。[查看 C++ 笔记 →](/note/cpp-basic)
