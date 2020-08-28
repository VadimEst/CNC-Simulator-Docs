---
id: settingsparser
title: "SettingsParser"
sidebar_label: "SettingsParser"
---

:::info
@package de.timonwei.cnc.service
:::

The class **SettingsParser** provides the functions for importing and exporting settings files from and to json.


## Public Methods

### SettingsParser(SettingsPopover settings)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **SettingsParser**      |     settings: SettingsPopover        | Creates an instance of SettingsParser. |

### readSettings()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `static void`       | **readSettings**      |             | Reads settings from the `settings.json` file. |

### readSettings(File file)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `static void`       | **readSettings**      |   file: File           | Reads settings from a variable file. |

### writeSettings()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `static void`       | **writeSettings**      |             | Writes settings to the `settings.json` file. |

### writeSettings(File file)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `static void`       | **writeSettings**      |   file: File           | Writes settings to a variable file. |