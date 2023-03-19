## boyyang_tools(封装常用工具函数)

### 安装（推荐使用yarn）
1. npm 安装
```yarn
yarn add boyyang_tools
```
2. npm 安装
```npm
npm install boyyang_tools
```
### 使用
```typescript
import {is} from 'boyyang_tools'
const testArr = [1, 2, 3, 4, 5]
const testObj = {name: "test"}
console.log(is(testArr)) // array
console.log(is(testObj)) // object
```
### 函数
1. is (判断数据类型)

#### 技术栈

* vite            ^4.2.0
* typescripts     ^5.0.2
* vite-plugin-dts ^2.1.0
* @types/node     ^18.15.3
