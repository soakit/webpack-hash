# 使用规则

## 入口文件使用 chunkhash，chunk 文件使用 contenthash

```shell
npm run build
```

观察输出的文件名

0. 默认输出

   ```shell
   .
   ├── 2.4da633ad.css
   ├── 2.de0aa200.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.e15d31ec.js
   └── vendors.9365ec55.js
   ```

1. 修改`main.js`

   ```shell
   # 修改前
   .
   ├── 2.4da633ad.css
   ├── 2.de0aa200.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.e15d31ec.js
   └── vendors.9365ec55.js
   # 修改后
   .
   ├── 2.4da633ad.css
   ├── 2.de0aa200.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.d5f7cc61.js
   └── vendors.9365ec55.js
   ```

   文件名有变化：main

2. 修改`common.js`

   ```shell
   # 修改前
   .
   ├── 2.4da633ad.css
   ├── 2.de0aa200.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.e15d31ec.js
   └── vendors.9365ec55.js
   # 修改后
   .
   ├── 2.4da633ad.css
   ├── 2.de0aa200.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.4fc91a58.js
   └── vendors.92c3da81.js
   ```

   文件名有变化：main, vendors

3. 修改`chunk0.js`

   ```shell
   # 修改前
   .
   ├── 2.4da633ad.css
   ├── 2.de0aa200.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.e15d31ec.js
   └── vendors.9365ec55.js
   # 修改后
   .
   ├── 2.4da633ad.css
   ├── 2.d3c435cb.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.b4ae67d2.js
   └── vendors.9365ec55.js
   ```

   文件名有变化：main, 2.\*.js

4. 修改`chunk0.css`

   ```shell
   # 修改前
   .
   ├── 2.4da633ad.css
   ├── 2.de0aa200.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.e15d31ec.js
   └── vendors.9365ec55.js
   # 修改后
   ├── 2.cf82e8d4.css
   ├── 2.de0aa200.js
   ├── 3.12e1d633.js
   ├── 3.4bbb00bd.css
   ├── main.910c5734.js
   └── vendors.9365ec55.js
   ```

   文件名有变化：main, 2.\*.css
