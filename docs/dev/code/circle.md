---
id: circle
title: "Circle"
sidebar_label: "Circle"
---

:::info
@package de.timonwei.cnc.workspace.commands.g
:::

The abstract class **Circle** provides the functionality to cut a circle.


## Methods

### G02(String[] args)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **G02**      |       args: String[]      | Creates an instance of Circle |

### calculate(Mill mill, boolean insertAtCurrentIndex)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **calculate**      |       mill: Mill, insertAtCurrentIndex: boolean      | Calculates the points the mill is cutting |