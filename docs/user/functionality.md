---
id: functionality
title: Functionality
sidebar_label: Functionality
---

To understand the program and it's functionalities we recommend you to read this page with all
functions and user interface elements described. The mill is divided into the mill itself and the spindle. The spindle is the drill head of the mill, which will cut the actual program. It has to be cooled.

# User interface functions and window regions


## Left Side Bar

### Import Program Button

To import an existing program, you can click the 'Import Program' Button. A file chooser will appear and you can browse to your program file. It is mandatory the file to be a .json file. The standard directory is your documents folder for quick access. A dialog will appear on selecting a none .json file. 

### Start Program Button

To start your imported program press this button. It will automatically set your mill up and begin with the first command in the program. If no program is loaded the file chooser will appear and an program file can be selected and loaded into the simulator.

### Stop Program Button

To stop / pause the program press this button. This button will not delete the programm out of the simulator. You can resume the program by pressing the 'Start Program' Button. 

### Restart Program Button

To restart the program while it is running press this button. It will reset the program to the first command and relaunch it.

### Clear Program Button

To delete or clear the program currently loaded in the simulator press this button. It will fully wipe out the queues for the loaded or running program and reset the mill.

## Mill Workspace

The biggest section of the simulator is the workspace section in the middle. Here, the mill will be working and cutting program or user commands entered in the command terminal. The areas are indicated as following:

* Red: Mill
* Green: Mill Home Point
* Grey: Non Milled Area
* Black: Milled Area

![Mill Workspace](/img/screenshot/workspace.png)

## Right Side Section

### Mill Position

This tile displays the current mill position while a program is running. It is readable by interpreting the first number as x-coordinate and the second number as y-coordinate. 

### Spindle Status

This tile displays the current spindle status of the mill. The status can be:

* stopped
* right rotation (clockwise)
* left rotation (anticlockwise)

Furthermore, it is possible to read here, if the mill is currently rotating or not.

### Spindle Temperature

This tile displays the current spindle temperature. The temperature is fully simulated and updated live. There is a graph in the middle of the tile. Furthermore there is the actual temperature displayed as a number and a gauge indicator around the two mentioned indicators.

### Spindle Speed

This tile displays the current spindle speed. It's range goes from 0 to 10 meters per minute. a blue threshold indicates the speed limit of the uncooled spindle and the start of the section where the spindle is cooled. 

### Coolant Status

This tile displays the current coolant status. There are two symbols indicating the current status:

* Red flame -> no coolant
* Blue water drips -> coolant

### Settings Button

This tile is the button to get to the settings dialog. By clicking the tile, the settings window opens. For further information about the settings, go to [Settings](#settings)

### Command Table

This table logs the processed and currently processing commands. It sorts the commands chronological and displays the execution time of every single command as well as the command which was executed. 

### Command Terminal

![Command Terminal](/img/screenshot/terminal.png)

This terminal is for manual command input to the simulator. By typing the in [Commands](#commands) explained commands correctly it is possible to manually control the mill and cut custom forms on the fly. It is also possible to insert commands into a running program to edit it. Furthermore, it is possible to pause and stop the mill in emergency situations like it is possible with the buttons. When typing an invalid or not existing command a dialog indicates this. It is mandatory to type in the commands correctly.

## Settings

