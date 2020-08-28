---
id: milltimer
title: "MillTimer"
sidebar_label: "MillTimer"
---

:::info
@package de.timonwei.cnc.utility;
:::

The abstract class **Tool** provides the basic structure required for using tools with the CNC Simulator. This class can be extended to provide custom tools.


## Methods

### MilLTimer(Mill mill)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **MillTimer**      | mill: Mill | Creates an instance of MillTimer. |


### handle()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **handle**      |             | Is called on every frame. |


### updateGraphicsContext()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **updateGraphicsContext**      |             | Updates the graphics context. |


### start()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **start**      |             | Starts the timer. |

### stop()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **stop**      |             | Stops the timer. |


### isRunning()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `boolean`       | **isRunning**      |             | Return if the timer is running. |