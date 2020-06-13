---
id: programparser
title: Program Parser
sidebar_label: "Class: Program Parser"
---

:::info
@package de.timonwei.cnc.Workspace
:::


The class **ProgramParser** offers main functionality for using the CNC Simulator with json files. The class is able to import and export JSON files.

## Methods

### readProgramCommands(String filename)
| Return Type   | Method Name            | Parameters                | Description    |
| ------------- | ---------------------- | ------------------------- | -------------- |
| `Queue<MillCommand>` | **readProgramCommands**            | filename: String      | Reads the commands from a given JSON file |

### enqueueProgram(ArrayList<Map.Entry\> commands)
| Return Type   | Method Name            | Parameters                | Description             |
| ------------- | ---------------------- | ------------------------- | ----------------------- |
| `Queue<MillCommand>` | **enqueueProgram**            | commands: ArrayList<Map.Entry\>      | Converts the Map.Entry's to a class and returns a queue for the program execution |


### writeProgramCommands(Queue<MillCommand\> commands)
| Return Type   | Method Name            | Parameters                | Description    |
| ------------- | ---------------------- | ------------------------- | -------------- |
| `void` | **writeProgramCommands**            | commands: Queue<MillCommand\>      | Creates a JSON file from a Queue of MillCommands  |