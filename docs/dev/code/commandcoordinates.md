---
id: commandcoordinates
title: "CommandCoordinates"
sidebar_label: "CommandCoordinates"
---

:::info
@package de.timonwei.cnc.workspace.commands
:::

The class **CommandCoordinates** is in charge of managing the positions the mill will execute due to a specific command.


## Methods

### CommandCoordinates(MillCommand command)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructur`       | **CommandCoordinates**      |   command: Millcommand          | Creates an instance of CommandCoordinates. |


### getProcessedCommand()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `MillCommand`       | **getProcessedCommand**      |            | Returns the command the instance is associated with |


### size()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `int`       | **size**      |            | Returns number of positions in the instance |


### addPosition(MillPosition position)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **addPosition**      | position: MillPosition           | Adds a position to the instance |


### getNextPosition()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `MillPosition`       | **getNextPosition**      |            | Returns the next position |


### getCurrentPosition()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `MillPosition`       | **getCurrentPosition**      |            | Returns the current position |


### getLastPosition()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `MillPosition`       | **getLastPosition**      |            | Returns the last position |