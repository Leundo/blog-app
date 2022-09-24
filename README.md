# Blog App

[Lzzet Wetland](https://www.lzzet.com/)

## 运行方式

### 1. 安装 yarn，nodejs，mysql

### 2. 数据库建立

按照 `./server/database.md` 初始化数据库（把里面的命令复制粘贴到 mysql 命令行中运行）。

### 3. 运行后端服务

```bash
# 仅需运行一次
cd blog-app/server
yarn install # 安装依赖
```

```bash
node App.js
```

### 4.1. 运行前端服务(开发环境)

```bash
# 仅需运行一次
cd blog-app
yarn install # 安装依赖
```

```bash
yarn run start
```

或

### 4.2. 运行前端服务(生产环境)

```bash
# 仅需运行一次
cd WebExample
yarn install # 安装依赖
```

```bash
yarn run build
node entrance.js
```



