---
id: mill
title: "Mill"
sidebar_label: "Mill"
---

:::info
@package de.timonwei.cnc.workspace
:::

The class **Mill** is the class in charge of visualizing all calculated positions and handles the command execution.

## Methods

### Mill(UserInterface ui, Tool loadedTool, int width, int height)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **Mill**      | ui: UserInterface, loadedTool: Tool, width: int, height: int | Creates an instance of Mill. |


### setHome(Vector2<Double\> home)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **setHome**      |  | Sets the home position of the mill. |


### start()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **start**      |  | Starts milling. |


### stop()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **stop**      |  | Stops milling. |


### runMillLoop()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **runMillLoop**      |  | Runs the mill loop that draws all positions. |


### drawModel(GraphicsContext gc)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `synchronized void`       | **drawModel**      | gc: GraphicsContext | Draws all the points. |


### getNextPoint()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `MillPosition`       | **getNextPoint**      |  | Returns the next point that should be visualized by the mill. |


### addCommandCoordinates(CommandCoordinates coordinates, boolean insertAtCurrentIndex)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **addCommandCoordinates**      | coordinates: CommandCoordinates, insertAtCurrentIndex: boolean | Adds a CommandCoordinates object to the mill. |


### enqueueProgram(MillCommand command)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **enqueueProgram**      | command: MillCommand | Adds a program loaded from filesystem to the mill. |


### loadProgram(Queue<MillCommand\> programQueue)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **loadProgram**      | programQueue: Queue<MillCommand\> | Starts milling. |