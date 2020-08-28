---
id: terminalreader
title: "TerminalReader"
sidebar_label: "TerminalReader"
---

:::info
@package de.timonwei.cnc.service
:::

The abstract class **TerminalReader** provides the function to read the entered g- and m- commands in the ![Command Terminal](/docs/user/functionality#38-command-terminal).


## Public Methods

### readTerminal(Mill mill, String incoming)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `static void`       | **readTerminal**      |      mill: Mill, incoming: String       | Reads a entered command from the terminal. |

## Private Methods

### addAll(String[] array1, String... array2)
| Return Type   | Method Name   | Parameters  | Description    |
| ------------- | ------------- | ----------- | -------------- |
| `static String[]`       | **addAll**      |       array1: String[], array2: String...       | Reads a entered command from the terminal. |