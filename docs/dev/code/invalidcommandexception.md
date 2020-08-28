---
id: invalidcommandexception
title: "InvalidCommandException"
sidebar_label: "InvalidCommandException"
---

:::info
@package de.timonwei.cnc.service.exceptions
:::

The class **InvalidCommandException** extends Exception and provides a custom exception for invalid entered commands in the terminal.


## Public Methods

### InvalidCommandException(String cmdName)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **InvalidCommandException**      |      cmdName: String        | Creates an instance of InvalidCommandException. |

### getMessage()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `String`       | **getMessage**      |       | Returns the exception message. |