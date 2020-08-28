---
id: idletimer
title: "IdleTimer"
sidebar_label: "IdleTimer"
---

:::info
@package de.timonwei.cnc.utility
:::

The class **IdleTimer** provides the timer functionality for the mill.


## Public Methods

### IdleTimer(UserInterface ui)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **IdleTimer**      |             | Creates an instance of IdleTimer. |


### handle(long now)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **handle**      |             | Is executed on every frame and updates the mill. |


### start()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **start**      |             | Starts the timer. |


### stop()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **stop**      |             | Stop the timer. |


### isRunning()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `boolean`       | **isRunning**      |             | Return if the timer is running. |