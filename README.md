# Math Expression Evaluator

A simple plugin for [Galar](https://github.com/vinewZ/galar) that evaluates mathematical expressions dynamically.
The app listens to input events, processes the expression, and displays the result in real-time.

## Features
Everything supported by [MathJS Evaluate](https://mathjs.org/docs/expressions/syntax.html)

## How it Works
The app listens for an input change event, which updates the expression.
It uses the evaluate function from the mathjs library to compute the result.
The :calc prefix can be used to denote a mathematical expression.
The result of the expression is displayed alongside the expression in the app’s UI.

## Installation
Copy the contents of ```plugin``` into your Galar project's ```/plugins/``` directory.

```$HOME/.config/galar/plugins/ on Linux)```

You can also change the cmd to initialize the plugin by editing the /plugins/calc/plugin.json file.
