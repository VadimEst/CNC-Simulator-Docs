---
id: invalidprogramfileexception
title: "InvalidProgramFileException"
sidebar_label: "InvalidProgramFileException"
---

:::info
@package de.timonwei.cnc.service.exceptions
:::

The abstract class **InvalidProgramFileException** extends Exception and provides a custom exception for invalid commands in program files.


## Public Methods

### InvalidProgramFileException()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **InvalidProgramFileException**      |             | Creates an instance of InvalidProgramFileException. |

### InvalidProgramFileException(String cmdName)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **InvalidProgramFileException**      |    cmdName: String   | Creates an instance of InvalidProgramFileException with a command name. |

### getMessage()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `String`       | **getMessage**      |       | Returns the exception message. |
