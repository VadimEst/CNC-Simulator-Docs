---
id: ui_right
title: "UI_Right"
sidebar_label: "UI_Right"
---

:::info
@package de.timonwei.cnc.ui.parts
:::

The public class **UI_Right** provides the structure for the right side of the UserInterface.


## Methods

### UI_Right(UserInterface ui)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **UI_Left**      |    ui: UserInterface         | Creates an instance of VBox |

### init()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **UI_Left**      |            | Initiates all buttons for the right side of the UI |

### addCommand(MillCommand processedCommand, String executionTime)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **addCommand**      |    processedCommand: MillCommand, executionTime: String         | Adds a command to the command table |

### clearCommands()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **clearCommands**      |            | Removes all commands from the command table |

### readTerminalInput(TextField commandTerminal)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **readTerminalInput**      |    commandTerminal: TextField        | Extracts the commands from the UI text field |

