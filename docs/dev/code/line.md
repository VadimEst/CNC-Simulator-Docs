---
id: line
title: "Line"
sidebar_label: "Line"
---

:::info
@package de.timonwei.cnc.workspace.commands.g
:::

The abstract class **Line** provides the basic functionality for cutting a line.


## Methods

### Line(String[] args)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **Line**      |       args: String[]      | Creates an instance of Line |

### calculate(Mill mill, boolean insertAtCurrentIndex)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **calculate**      |       mill: Mill, insertAtCurrentIndex: boolean      | Calculates the points the mill is cutting |