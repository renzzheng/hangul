# 한국 Hangul
<div align="center">
  <img width="439" height="110" alt="image" src="https://github.com/user-attachments/assets/ae3f7f09-d671-4198-9f39-c7233959aa02" />
</div>

## A Korean Pop-Up Dictionary and Learning Tool
This browser extension allows you to translate Korean words and phrases by simply hovering over them with the mouse. It also contains useful features for learners of the Korean language.


## Highlights
- Hover over any Korean text to instantly see the English translation.
- Displays romanization (Revised Romanization of Korean) alongside the Korean word.
- Can be turned on and off with a single mouse-click.
- Highlights the word whose translation is displayed in the pop-up window.
- Supports keyboard navigation for moving between words and characters.
- Allows you to add words to a built-in word list, exportable for use in
  [Anki](https://apps.ankiweb.net).


## Installation

### Chrome
Load the extension manually via
chrome://extensions → Enable Developer Mode → Load Unpacked.
*(Chrome Web Store listing coming soon.)*


## How Does It Work?
Once Hangul is installed on your computer you'll see a little icon showing
the Hangul logo near the upper right-hand corner of your browser. By
clicking on this icon you can turn the extension on and off. Click on it and
wait until you see the word "On" displayed in red and white on top of the icon.
This tells you that the dictionary is active. If you want to turn it off again,
just click on the icon again and the red "On" label disappears. So with a
single mouse-click you can activate or deactivate the dictionary.

Once Hangul has been turned on, showing the red "On" label on the icon, you
can go to a web page in Korean and point your mouse at some Korean words.
A pop-up window opens up automatically showing you the translation of the word
you were pointing at.


## What Information Does It Show?
By default, the pop-up window shows the following pieces of information:

- The Korean word you're pointing at with your mouse.
- The romanization of the word (Revised Romanization of Korean).
- The English translation. Sometimes, Hangul finds more than one matching entry in its dictionary. In this case it shows you all of the matching entries.


## What Dictionary Does It Use?
This extension uses data from the 한국어기초사전 (Korean Learner's Dictionary),
provided by the National Institute of Korean Language (국립국어원).

https://krdict.korean.go.kr


## Keyboard Navigation
Some users don't use Hangul to look up individual words, they want to read
an entire paragraph or article. In this case, rather than having to trace all
the words with the mouse, you can use Hangul's built-in keyboard navigation
support: You can move from character to character or from word to word by
pressing keys on your keyboard:

- Pressing <kbd>N</kbd> on the keyboard takes you to the next word.
- Pressing <kbd>B</kbd> takes you back one character.
- Pressing <kbd>M</kbd> moves to the next character. (This is different from 
  pressing <kbd>N</kbd> if you're currently over a word that consists of two or 
  more characters.)
- Sometimes the pop-up window is hiding the text you're looking at. You can move
  it out of the way using <kbd>X</kbd> and <kbd>Y</kbd> on the keyboard (this 
  moves the pop-up window up or down), or hit <kbd>A</kbd> once or twice to move
  it to an altogether different location.


## Built-in Word List
Hangul has a built-in word list feature. You just need to press <kbd>R</kbd>
(short for "remember") on your keyboard and the entry in the currently opened
pop-up window will be added to the built-in word list. To view the list, press
<kbd>Alt</kbd> + <kbd>W</kbd> and it will open in a new tab.


## Can I export the dictionary entries into a spreadsheet or import them into Anki?
Yes, if you want to copy the current dictionary entry, including the Korean word,
romanization, and the English translation, to the clipboard, just hit <kbd>C</kbd>
on the keyboard to copy to the clipboard. When you paste the clipboard into Excel
or an OpenOffice spreadsheet, the individual components of the entry are nicely
put in different columns and rows. From there you can also import them into Anki.
(See the Anki manual for further details.)


## Context Menu Items
When Hangul is enabled, you can right-click on a page to open the browser's
context menu. There will be a menu item for Hangul which you can use to access
a new tab showing a helpful summary of all the keyboard shortcuts. Another
menu item can be used for opening the word list as an alternative to the
<kbd>Alt</kbd> + <kbd>W</kbd> keyboard shortcut.


## Legal
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

---

*This extension is a fork of [Zhongwen](https://github.com/cschiller/zhongwen) by Christian Schiller.*  
*Original copyright © 2025 Christian Schiller. Licensed under GPL-2.0.*  
*Korean dictionary data © 국립국어원 (National Institute of Korean Language) — https://krdict.korean.go.kr*
