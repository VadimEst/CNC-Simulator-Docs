---
id: tool
title: "Tool"
sidebar_label: "Tool"
---

:::info
@package de.timonwei.cnc.tools
:::

The abstract class **Tool** provides the basic structure required for using tools with the CNC Simulator. This class can be extended to provide custom tools.


## Methods

### Tool(int width, int height)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **Tool**      | width: int, height: int            | Creates an instance of Tool. |


### setMill(Mill mill)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **setMill**      |  mill: Mill           | Sets the mill for which this tool is used. |


### visualizeToolPosition(Vector2<Double\> v)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **visualizeToolPosition**      |  v: Vector2<Double\>           | Returns the current y coordinate |


### getSpeedFactor()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `double`       | **getSpeedFactor**      |             | Returns the speed of the tool. |


### getSpindleState()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `double`       | **getSpindleState**      |             | Returns the current spindle state (stop, left, right) |


### isCoolant()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `boolean`       | **isCoolant**      |             | Returns is the tool is currently under coolant |


### isMove()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `boolean`       | **isMove**      |             | Returns is the tool is currently moving |


### setMove(boolean move)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **setMove**      |  move: boolean           | Sets the movement state of the tool |


### getSize()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `int`       | **getSize**      |             | Returns the tool's size |


### SpindleState()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `enum`       | **SpindleState**      |             | Contains values for left, right, stop |
