# JSAlert

A mini-library to set custom alerts with animations
the library uses [Animate.CSS](https://daneden.github.io/animate.css/)

## Getting Started

```
git clone https://github.com/baraaabdelsalam/JSAlert.git
```

## Author

* **Baraa Abdelsalam** - [LinkedIn](https://www.linkedin.com/in/bara-abdel-salam-081ba589/)


## Steps
1. Add the "main.js" file to your project where it can be located at "js/" folder
```
<script type="text/javascript" src="js/main.min.js"></script>
```
2. Add the "main.css" file to your project where it can be located at "css/" folder
```
<link rel="stylesheet" type="text/css" href="css/main.css">
```
3. Add this div at the end of the body
```
<div id="alertBtns">
	
</div>
```
4. Add this button to make the alert
```
<button 
		data-animate-start="bounceInRight" 
		data-animate-end="bounceOutRight"
		data-content="WinFooz Assignment"
		onclick="makeAlert(this)" 
		class="wf-alert-btn">
		Click Here
</button>
```

## Custom Settings
1. you can use any animation in "data-animate-start" & "data-animate-end" of the animations listed in [Animate.CSS](https://daneden.github.io/animate.css/) but make sure to use the right ones when starting and the right ones on finishing
2. you can use rgb, rgba, hexadecimal and name formats to use the desired color in "data-text-color" & "data-bg-color" 
* default bg-color is black
* default text-color is white
3. write any text you want in "data-content"

## Attributes
1.data-animate-start ( Choose from [Animate.CSS](https://daneden.github.io/animate.css/))
2.data-animate-end ( Choose from [Animate.CSS](https://daneden.github.io/animate.css/) )
3.data-text-color ( Hexadecimal, rgb, rgba, names )
4.data-bg-color ( Hexadecimal, rgb, rgba, names )
5.data-content (text)
6.data-placement (top,left,right)

## Full Featured Example
<button 
		data-animate-start="bounceInRight" 
		data-animate-end="bounceOutRight"
		data-text-color="white"
		data-bg-color="#00bcd4"
		data-placement="right"
		data-content="Top Right Alert"
		data-btn-color = "red"
		data-btn-text-color = "red"
		onclick="makeAlert(this)" 
		class="wf-alert-btn">
		Top Right
</button>

