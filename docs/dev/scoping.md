---
id: scoping
title: Scoping
sidebar_label: Scoping Document
---

## Grafische Oberfläche (in Java FX)

- Arbeitsfläche GRAU
- Bohrer/Fräskopf ROT
- Gefräste Fläche SCHWARZ
- Home GRÜN
- Aktuelle Position, Spindelstatus (An/Aus + Drehrichtung), Kühlmittelstatus, Geschwindigkeit

## Befehle

### Ausführen einzelner Befehle
  - Automatische Nummerierung der Befehle
  - Prüfung eines Befehls vor der Ausführung (Prüfung des Folgebefehls während dem Fräsvorgang)
### Ausführen mehrerer Befehle
  - Manuelle Nummerierung der Befehle durch Benutzer
  - Prüfung des gesamten Befehlssatzes vor der ersten Ausführung
  - Eingabemöglichkeit? àTextfeld/Import via JSON/XML
### Möglichkeit aktuellen Befehl zu pausieren oder Befehlsabarbeitung abzubrechen
### G-Befehle (Wegfunktionen):
  - G00: Verfahrbewegung im Eilgang (nur ohne Bohren/Fräsen möglich)
  - G01: Geraden (Linear) Interpolation
  - G02: Vorschub mit Kreisbogen, im Uhrzeigersinn (Kreis Interpolation)
  - G03: Vorschub mit Kreisbogen, gegen den Uhrzeigersinn
  - G28: HOME Position anfahren
### M-Befehle (Schaltfunktionen):
  - M00: Programmhalt (Spindel, Kühlmittel, Vorschub aus)
  - M02: Programm Ende
  - M03: Spindel Ein: Im Uhrzeigersinn (Rechtslauf)
  - M04: Spindel Ein: Gegen den Uhrzeigersinn (Linkslauf)
  - M05: Spindel Stopp
  - M08: Kühlmittel Ein
  - M09: Kühlmittel Aus
  - M13: Spindel Ein, Rechtslauf und Kühlmittel Ein
  - M14: Spindel Ein, Linkslauf und Kühlmittel Ein

## Daten

- Arbeitsfläche: 1400mm x 1050mm
- HOME-Position bei 0/0
- Schnittgeschwindigkeit:
  - Ungekühlt 2m/min
  - Gekühlt 3m/min
- Fahrgeschwindigkeit: 4-8m/min
- Werkzeugdurchmesser: 15mm
- Gewicht: 89kg ohne Werkzeug

## Programm Taschenkontur

- N10 M03
- N20 M08
- N30 G01 X0 Y0
- N40 G02 X0 Y0 I0 J5
- N50 G01 X10 Y10
- N60 G02 X10 Y0 I0 J-5
- N70 G28
- N80 M00

## Einstellungen der Fräsmaschine übe reine lokale Datei (XML oder JSON)

- Schnittgeschwindigkeit (mit/ohne Kühlung)
- HOME-Position
- Farben der Oberflächenelemente (siehe Grafische Oberfläche)

## Abgrenzung

- Fokus auf 2D
- 5/34 Wegfunktionen
- 5(9)/21 Schaltfunktionen

## Dokumentation

- Quelltextsignatur mit Zuordnung der Leistung jedes Studierenden je Methode
- Entwicklerdokument (inkl. UML-Klassendiagramm)
- Anwenderdokumentation (inkl. Ausschnitten aus der Anwendung)

## Abgabe

- Quellcode (gemäß Anforderungen)
- Dokumentation
- Programm als Paket / mit Installationsassistent