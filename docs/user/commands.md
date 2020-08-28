---
id: commands
title: Commands
sidebar_label: Commands
---

## M-Commands

| Command Name   | Syntax in Terminal   | Parameters  | Description    |
| -------------- | -------------------- | ----------- | -------------- |
| M00            | M00 or m00           | none        | Program stops, spindle, coolant and feed stops. |
| M02            | M02 or m02           | none        | Program ends. |
| M03            | M03 or m03           | none        | Spindle on, in clockwise or right rotation. |
| M04            | M04 or m04           | none        | Spindle on, in anticlockwise or left rotation. |
| M05            | M05 or m05           | none        | Spindle stops. |
| M08            | M08 or m08           | none        | Coolant on. |
| M09            | M09 or m09           | none        | Coolant off. |
| M13            | M13 or m13           | none        | Spindle on in clockwise rotation and coolant on. |
| M14            | M14 or m14           | none        | Spindle on in anticlockwise rotation and coolant on. |

## G-Commands

| Command Name   | Syntax in Terminal   | Parameters  | Description    |
| -------------- | -------------------- | ----------- | -------------- |
| G00            | G00 or g00           | none        | Raid traverse motion, the mill runs faster |
| G01            | G01 or g01           | X, Y        | Mill cuts a line, linear interpolation. |
| G02            | G02 or g02           | X, Y, I, J  | Mill cuts a circular arc in clockwise circle interpolation. |
| G03            | G03 or g03           | X, Y, I, J  | Mill cuts a circular arc in anticlockwise circle interpolation. |
| G28            | G28 or g28           | none        | Mill returns to set homepoint. |

