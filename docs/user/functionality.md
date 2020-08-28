---
id: functionality
title: Functionality
sidebar_label: Functionality
---

To understand the program and it's functionalities we recommend you to read this page with all
functions and user interface elements described. The mill is divided into the mill itself and the spindle. The spindle is the drill head of the mill, which will cut the actual program. It has to be cooled.

# User interface functions and window regions

## 1. Left Side Button Bar

![Left Button Bar](/img/screenshot/leftBar.png)

### 1.1 Import Program Button

To import an existing program, press the 'Import Program' Button. A file chooser will appear and you can browse to your program file. It is mandatory the file to be a .json file. The standard directory is your documents folder for quick access. A dialog will appear on selecting a none .json file. 

### 1.2 Start Program Button

To start your imported program press this button. It will automatically set your mill up and begin with the first command in the program. If no program is loaded the file chooser will appear and an program file can be selected and loaded into the simulator.

### 1.3 Stop Program Button

To stop / pause the program press this button. This button will not delete the programm out of the simulator. You can resume the program by pressing the 'Start Program' Button. 

### 1.4 Restart Program Button

To restart the program while it is running press this button. It will reset the program to the first command and relaunch it.

### 1.5 Clear Program Button

To delete or clear the program currently loaded in the simulator press this button. It will fully wipe out the queues for the loaded or running program and reset the mill.

## 2 Mill Workspace

The biggest section of the simulator is the workspace section in the middle. Here, the mill will be working and cutting program or user commands entered in the command terminal. The areas are indicated as following:

* Red: Mill
* Green: Mill Home Point
* Grey: Non Milled Area
* Black: Milled Area

![Mill Workspace](/img/screenshot/workspace.png)
![Mill Workspace with Mill](/img/screenshot/workspaceWithMill.png)

## 3. Right Side Section

![Right Section](/img/screenshot/rightSection.png)

### 3.1 Mill Position

This tile displays the current mill position while a program is running. It is readable by interpreting the first number as x-coordinate and the second number as y-coordinate. 

### 3.2 Spindle Status

This tile displays the current spindle status of the mill. The status can be:

* stopped
* right rotation (clockwise)
* left rotation (anticlockwise)

Furthermore, it is possible to read here, if the mill is currently rotating or not.

### 3.3 Spindle Temperature

This tile displays the current spindle temperature. The temperature is fully simulated and updated live. There is a graph in the middle of the tile. Furthermore there is the actual temperature displayed as a number and a gauge indicator around the two mentioned indicators.

### 3.4 Spindle Speed

This tile displays the current spindle speed. It's range goes from 0 to 10 meters per minute. a blue threshold indicates the speed limit of the not cooled spindle and the start of the section where the spindle is cooled. 

### 3.5 Coolant Status

This tile displays the current coolant status. There are two symbols indicating the current status:

* Red flame -> no coolant
* Blue water drips -> coolant

### 3.6 Settings Button

This tile is the button to get to the settings dialog. By clicking the tile, the settings window opens. For further information about the settings, go to [Settings](#settings)

### 3.7 Command Table

This table logs the processed and currently processing commands. It sorts the commands chronological and displays the execution time of every single command as well as the command which was executed. 

![Command Table](/img/screenshot/tableWithCommands.png)

### 3.8 Command Terminal

![Command Terminal](/img/screenshot/terminal.png)

This terminal is for manual command input to the simulator. By typing the in [Commands](user/commands) explained commands correctly it is possible to manually control the mill and cut custom forms on the fly. It is also possible to insert commands into a running program to edit it. Furthermore, it is possible to pause and stop the mill in emergency situations like it is possible with the buttons. When typing an invalid or not existing command a dialog indicates this. It is mandatory to type in the commands correctly.

## 4. Settings

![Left Bar](/img/screenshot/settingsLeftBar.png)

### 4.1 Import Settings Button (Left Bar)

To import an existing CNC-Simulator settings file press this button. A file chooser appears and makes it possible to select the settings file. If a wrong file is selected, a dialog notifies the error. 

### 4.2 Export Settings Button (Left Bar)

To export the current customized settings to a json file press this button. A file chooser appears and makes it possible to select the saving location on the computer. The file format will be JSON. This file can bi imported with the [Import Settings Button](#import-settings-button-left-bar) and sets the settings like they were saved in this file.

### 4.3 Save Settings Button (Left Bar)

To save the current settings press this button. This button closes the settings window and applies the saved settings. It is possible to reopen the settings and customize them again.

### 4.4 Discard Settings Button (Left Bar)

To discard the current settings press this button. It discards the current entered settings and restores the last saved settings. 

### 4.5 Restore Default Settings Button(Left Bar)

To restore the default settings press this button. It discards the current entered and last saved settings and restores the settings to the simulators default settings:

![Settings](/img/screenshot/settings.png)

### 4.6 Speed Slider

To adjust the standard speed of the mill change the position of the slider in the range of 4 to 8. The slider value is completely free between this two ranges.

### 4.7 Speed Adjustments With and Without Coolant

To adjust the standard cutting speed with or without coolant change the values in the specific input boxes.

### 4.8 Home Point 

To adjust the home point of the mill change the values in the x and y input field in the settings window. After saving the mill will automatically set the home point to this coordinates.

### 4.9 Color Picker Section

To adjust the colors of:

* Home
* Mill
* Workspace
* Milled Area

click on the specific color picker and choose the preferred color. After saving the settings the colors will change in the workspace.