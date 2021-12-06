# retroarch_input_overlay_editor

Problem statement: When creating an input overlay, I do not want to search for values, do pixel mathematics on values and type values manually. Also I do not want to move or scale overlays in pixel values. I want a less precise grid instead, like 32 x 18, on which I can just tap to move and tap to scale

Tech stack: HTML + CSS + JS

## Launching the editor

Click on editor.html to open in a browser ( no-internet required )

*While, I wanted this to be usable on mobile phones, the compatibility might be iffy. Last section talks about the way I got it to work on my Android phone*
 
## Menus

1. Override menu

	* Resolutions can be set via presets selected from dropdowns
    
	* Resolutions can also be entered manually after checking the Custom Size checkbox
    
2. Overlay menu
  
  * There are two dropdowns, 'Property' and 'Action' which works as follows
  
	* If the 'Property' dropdown is set to active, the list of checkboxes below shows which overlays are active and which are not.
  
	* if the 'Action' dropdown is set to move, then touching on the screen area will move overlays

3. Other buttons

	* Download ↓ buttons on the right of each of the Tab buttons show a popup from where the configuration data can be copied
  
	* Toggle Fullscreen and Redraw Properly buttons are on the further right denoted by ◱ and ⟳

## Moving and Scaling

The idea is make an overlay active then select it and then move or scale it

Step 1. Property dropdown > Active

Step 2. Click on overlays in the list to make them active

Step 3. Property dropdown > Selected

Step 4. Click on overlays in the list to select them
 
Step 5. Action dropdown > Move

Step 6. Click on the screen area to move

Hopefully this is not too convoluted :P
  
## Other less important properties other than 'active' and 'selected' that can be changed

* clickable - Overlays that are just decoration should have 'clickable' false

	example: analog stick backgrounds are not clickable by default

* movable - Overlays that should follow ones touches should have 'movable' true

	example: analog sticks are movable by default

* radial - overlays that have round hitboxes as opposed to rectangular hitboxes should have 'radial' true

	example: a, b, x, y and analog sticks are radial by default
  
*Note: anything that is movable will be exported as radial to avoid issues*

## What are these colors in the editor?

A recent obsession with the 'Solarized' color scheme

## The way I got it to work on my Android phone :

1. Installed the following apps

	* Material Files *(me.zhangai.android.files)*
  
	* Open in browser *(ru.gelin.android.browser.open)*
  
	* Styx Browser *(com.jamal2367.styx)*

*They should be available on Aurora Droid store, might be on F-Droid store and Foxy Droid store too*
  
2. Gave Material Files and Styx Browser access to Storage in Settings 

3. Found editor.html using the file manager 'Material Files', opened with 'Open in Browser' and selected 'Styx Browser'

THE END

There is got to be a better way but I ain't finding it
