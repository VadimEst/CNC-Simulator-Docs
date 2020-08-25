---
id: scoping
title: Scoping
sidebar_label: Scoping Document
---

## Graphical interface (in Java FX)

- Workspace GREY
- Drill/mortising machine RED
- Milled area BLACK
- Home GREEN
- Current Position, spindle status (On/Off + sense of rotation), coolant status, speed

## Commands

### Execution of single commands
  - Automatic counting of commands
  - Checking a command before execution (checking the following command while the first is being executed)
### Execution of multiple commands
  - Manual counting of the commands by the user
  - Checking the whole command set before the first execution
  - Input? Textarea/Import via JSON/XML
### Possibility to pause current command or cancel command set
### G-Commands (Way-functions)
  - G00: Verfahrbewegung im Eilgang (only without drilling/milling possible)
  - G01: straight (linear) Interpolation
  - G02: feed with circular arc, clockwise (circle Interpolation)
  - G03: feed with circular arc, anticlockwise
  - G28: return to HOME position
### M-Commands (Control-functions)
  - M00: programme stop (spindle, coolant, Vorschub aus)
  - M02: programme end
  - M03: spindle on: clockwise (right)
  - M04: spindle on: anticlockwise (left)
  - M05: spindle stop
  - M08: coolant on
  - M09: coolant off
  - M13: spindle on, clockwise and coolant on
  - M14: spindle on, anticlockwise and coolant on

## Data

- Workspace: 1400mm x 1050mm
- HOME-position at 0/0
- Cutting speed:
  - Without coolant 2m/min
  - With coolant 3m/min
- Moving speed: 4-8m/min
- Tool diameter: 15mm
- weight: 89kg without tool

## Programm Taschenkontur

- N10 M03
- N20 M08
- N30 G01 X0 Y0
- N40 G02 X0 Y10 I0 J5
- N50 G01 X10 Y10
- N60 G02 X10 Y0 I0 J-5
- N70 G28
- N80 M00

## Settings of the mortising machine with a local file (XML or JSON)

- Cutting Speed (with/without coolant)
- HOME-position
- Colour

## Enclosing

- Focus on 2D
- 5/34 Way-functions
- 5(9)/21 Control-functions

## Documentation

- Source text signature (Who did what)
- Developer documentation (incl. UML-classdiagramm)
- User documentation (incl. screenshots)

## Handing in

- Source code (according to demands)
- Documentation
- Programme as package / installation assist
