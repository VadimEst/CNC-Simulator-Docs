---
id: userinterface
title: "UserInterface"
sidebar_label: "UserInterface"
---

:::info
@package de.timonwei.cnc.ui
:::

The public class **UserInterface** provides the basic structure for the UserInterface.


## Methods

### UserInterface()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `constructor`       | **UserInterface**      |             | Creates an instance of Stage |

### resizeCanvas()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **resizeCanvas**      |             | Resizes the already existing Drawing Canvas or creates a new one if no Drawing Canvas exist |

### createDrawingCanvas()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **createDrawingCanvas**      |             | Creates a Drawing Canvas |

### createScene()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `Scene`       | **createScene**      |             | Creates and sets a new Scene |

### importProgram()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`      | **importProgram**      |             | Imports a program from a json file |

### updatePosition()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **updatePosition**      |    v: Vector2<Double\>    | Updates the current position on the right side of the UI |

### updateSpindleState(Tool.SpindleState state)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **updateSpindleState**      |    state: Tool.SpindleState   | Updates the spindle status on the right side of the UI |

### updateTemperatureCoolantState()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **updateTemperatureCoolantState**      |           | Updates the temperature status on the right side of the UI |

### fadeTemperature()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **fadeTemperature**      |           | Lets the temperature fade |

### startIdle()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **startIdle**      |           | Starts the IdleTimer |

### stopIdle()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **stopIdle**      |           | Stops the IdleTimer |

### updateMillSpeed(double value)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **updateMillSpeed**      |   value: double        | Updates the mill speed |

### updateCoolantStatus(boolean isCoolant)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`       | **updateCoolantStatus**      |   isCoolant: boolean        | Updates the image if the coolant status |

### calcSizeFactor()
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `double`       | **calcSizeFactor**      |          | Calculates the size factor for the user´s screen |

### addProcessedCommand(MillCommand processedCommand, String executionTime)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `void`| **addProcessedCommand** | processedCommand: MillCommand, executionTime: String | Adds processed command with its execution time to the table |