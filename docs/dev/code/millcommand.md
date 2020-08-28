---
id: millcommand
title: "MillCommand"
sidebar_label: "MillCommand"
---

:::info
@package de.timonwei.cnc.workspace.commands;
:::

The abstract class **MillCommand** provides the basic structure for every type of mill command.

## Methods

### MillCommand()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **MillCommand**      |             | Creates an instance of MillCommand. |


### MillCommand(String[] args)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **MillCommand**      | args: String[]            | Creates an instance of MillCommand. |


### removeLetters(String[] args)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `String[]`       | **removeLetters**      |  args: String[]           | Removes all letters from the incoming String. |


### calculate(Mill mill, boolean insertAtCurrentIndex)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **calculate**      | mill: Mill, insertAtCurrentIndex: boolean | Basic structure for calculating positions. |


### onExecution()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **onExecution**      |             | Structure for actions taken, when the command is executed. |


### addToMill(Mill mill, CommandCoordinates coords, boolean insertAtCurrentIndex)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **addToMill**      | mill: Mill, coords: CommandCoordinates, insertAtCurrentIndex: boolean | Adds the command to the mill. |


### addToMill(Mill mill, boolean insertAtCurrentIndex)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **addToMill**      | mill: Mill, insertAtCurrentIndex: boolean | Adds the command to the mill. |


### toString()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `String`       | **toString**      |  | Creates a readable String of the class. |


### check(MillPosition pos)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `boolean`       | **check**      | pos: MillPosition | Checks if the calculated position is visible on the milled surface. |


### getInitialValue(Value v)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `double`       | **getInitialValue**      | v: Value | Gets the initial values of the command. |


### setEndPosition(double x, double y)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **toString**      | x: double, y: double | Sets the end position to x and y for further processing. |


### Value()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `enum`       | **Value**      |  | Contains values for x, y, i, j. |


### setRoot(Mill mill, boolean insertAtCurrentIndex)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **setRoot**      | mill: Mill | Sets the root position of the command. |