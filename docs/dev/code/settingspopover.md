---
id: settingspopover
title: "SettingsPopover"
sidebar_label: "SettingsPopover"
---

:::info
@package de.timonwei.cnc.ui
:::

The abstract class **SettingsPopover** provides user interface for the settings window [Settings](/docs/user/functionality#4-settings).


## Public Methods

### SettingsPopover(UserInterface ui)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **SettingsPopover**      |    ui: UserInterface     | Creates an instance of SettingsPopover. |

### showSettings()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **showSettings**      |       | Shows the settings window. |

### closeSettings()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **closeSettings**      |       | Closes the settings window. |

### createScene()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `Scene`       | **createScene**      |       | Creates the settings scene. |

### initTiles()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **initTiles**      |       | Initializes the tiles needed for the settings scene. |

### importFile()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **importFile**      |       | Imports a `Settings` file from a file directory. |

### exportFile()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **exportFile**      |       | Exports a `Settings` file to a file directory. |

### saveValues()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **saveValues**      |       | Saves the customized settings for the program to execute. |

### updateSettingsValue()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **updateSettingsValue**      |       | Updates the settings values displayed in the window. |

