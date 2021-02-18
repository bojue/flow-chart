# run dev

```javascript

npm run dev

```
打开链接

```javascript
http://localhost:8000/

```

# 项目结构

```js
|-- editor
    |
    |-- components  // 组件
        |
        |-- editor-content // 编辑器容器
        |-- node-signal //信号节点（服务端提供的信号树列表）
        |-- node-stratrgy // 规则节点（计算节点）
    |-- core        // 核心代码
        |
        |-- basic // 抽象的基础组件
        |-- comps  // 继承 baisc的核心组件库
            |
            |-- line // 连线系统组件
            |-- svg-canvs // svg处理的组件（目前没有用到，计划提供连线过程中的动画效果之类的）
        |-- node-mathc // 空组件
    |-- directicves // 指令,画板容器指令，提供组件挂载容器
    |-- providers   // 服务

```
# 元素对象数据结构

```javascript
const comp = {  // 元素对象
      "uniqueId":20,
      "linkElementConfigId":null,
      "linkConfigId":0,
      "elementId":0,
      "positionTop":100,
      "positionLeft":100,
      "expression":"5",
      "nodeDTOs":[      //触点
        {
          "uniqueId": 10000,
          "nodeId": null,
          "linkElementConfigId": null,
          "nodeDirection": "right", // 出
          "nodeType": "custom",
          "nodeIndex": 1,
          "nodeTag": null,
          "expression": null,
          "segmentDTOs": [] // 连线
        },
        {
          "uniqueId": 10001,
          "nodeId": null,
          "linkElementConfigId": null,
          "nodeDirection": "left",
          "nodeType": "custom",
          "nodeIndex": 1,
          "nodeTag": null,
          "expression": null,
          "segmentDTOs": []
        },
      ]
    }

```