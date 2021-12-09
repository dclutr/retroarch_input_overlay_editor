# retroarch_input_overlay_editor
Create retroarch input overlays in browser

## Running

Option 1: Github pages: https://dclutr.github.io/retroarch_input_overlay_editor/

Option 2. Local: Download/Clone the repository and click on index.html

**For mobile devices, some additional apps may be required. It is probably better to just use Github pages. For my android device, I had to use 3 apps, Material Files *(me.zhangai.android.files)*, Open in browser *(ru.gelin.android.browser.open)*, Styx Browser *(com.jamal2367.styx)*. There is also one another app needed that is one of the F-Droid stores I downloaded these apps from. I used Foxy Droid. Aurora Droid is probably the best option due to the repositories already configured in it**

## Editor Menus

1. Override menu is used to set the resolutions, either by selecting presets from dropdowns or checking the Custom Size checkbox and manually entering values.
    
2. Overlay menu has two dropdowns, 'Property' and 'Action'.
  
	* 'Property' dropdown > 'active' generates a list of checkboxes showng which overlays are 'active'
  
	* 'Action' dropdown > 'move' sets the action performed on touching on the screen to 'move' 

3. Other buttons: Download ↓,Toggle Fullscreen ◱ and Redraw Properly ⟳

## Example: Moving

Make overlays active > Select them > Move them

Step 1. Property dropdown > Active

Step 2. Click on overlays in the list to make them active

Step 3. Property dropdown > Selected

Step 4. Click on overlays in the list to select them
 
Step 5. Action dropdown > Move

Step 6. Click on the screen area to move the selected

Hopefully this is not too convoluted :P
  
## Other less important properties other than 'active' and 'selected' that can be changed

* clickable - Overlays that are just decoration should have 'clickable' false, for example: analog stick backgrounds are not clickable by default

* movable - Overlays that should follow ones touches should have 'movable' true, for example: analog sticks are movable by default

* radial - overlays that have round hitboxes as opposed to rectangular hitboxes should have 'radial' true, for example: a, b, x, y and analog sticks are radial by default
  
*Note: anything that is movable will be exported as radial to avoid issues*

## What are these colors in the editor?

A recent obsession with the 'Solarized' color scheme

## The way I got it to work on my Android phone :

1. Installed the following apps

	* Material Files *(me.zhangai.android.files)*
  
	* Open in browser *(ru.gelin.android.browser.open)*
  
	* Styx Browser *(com.jamal2367.styx)*
  
2. Gave Material Files and Styx Browser access to Storage in Settings 

3. Found editor.html using the file manager 'Material Files', opened with 'Open in Browser' and selected 'Styx Browser'

Probably just use the Github Pages link

## What would I want to change in the editor

Well I recently used the overlay editor inbuilt in PPSSPP, that sure was fun. If I spend any more time on this I probably would want to make something that works straight in Retroarch, to make the effort worth it. How? I don't know. For now this is good enough for me. A project for another day maybe
