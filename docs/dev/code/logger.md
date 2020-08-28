---
id: logger
title: "Logger"
sidebar_label: "Logger"
---

:::info
@package de.timonwei.cnc.service
:::

The class **Logger** logs commands and errors in log files: `CommandsLog.json` and `ErrorLog.json`.


## Methods

### Logger()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **Logger**      |             | Creates an instance of Logger. |

### logCommand(MillCommand cmd, String executionTime)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **logCommand**      |        cmd: MillCommand,  executionTime: String      | Reads a command and logs it into `CommandsLog.json` file. |

### logError(Exception e)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **logError**      |      e: Exception     | Reads an error and logs it into `ErrorLog.json` file. |

### createDirectory()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **createDirectory**      |           | Creates a new directory. |

### EntryType
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `enum`       | **EntryType**      |           | Contains values for command and error. |