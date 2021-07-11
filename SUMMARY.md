# Project structure

This project breaks into the following main parts:

## `ShapeDrawer`

`ShapeDrawer` is a class (not a component). You will create a `ShapeDrawer` for each shape.

It is responsible for all the drawing logic, and it has the following main functions:

- `draw` draws the shape (rectangle, circle)
- `drawHover` draws the hover on top of the shape
- `drawSelectOutline` outlines when the shape is selected
- `isMouseOver` a utility function that returns true if the mouse is over the shape

### Why separating `ShapeDrawer` to its own class?

Internally `ShapeDrawer` has a file for each shape (`rectangle.js`, `circle.js`). In these files, we provide the above functions to draw and detect the shapes.
This way it's easy to add future shapes. Instead of going through the components, you just need to add your shape here

## `hooks/useShapes`

This is where we store the data and expose all the actions for storing the shapes (in redux, this would replace actions & reducers)
The goal is: if you want to put or modify anything on the canvas, anything in here will be reflected automatically on the canvas

This exposes the array of shapes using `useState` hook, and provides a context that is rendered in `components/App` so all components in the app can access `useShapes` data and actions

## `components/Canvas`

The main component, responsible for rendering the canvas and re-rendering things on change.
To connect canvas to react state and re-render it, this component has a `useEffect` that will always get called on state change/re-render

to activate it, added an `onMouseMove` to the canvas that will set the mouse location to a state variable

This component renders the shapes for the canvas in this order
1- renders all the shapes
2- render the hover state for a shape
3- render all the selected states

Reason: to render the hover any shape to be always on top.

## `hooks/useDraggableShapes`

This hook is used only in `component/Canvas`. This gives shapes the ability to drag and move

## `components/ShapesEditor`

This will be rendered whenever a shape is selected. Through it, you can change the fill color and dimensions of the shapes

`ShapesEditor` reads the selected state from the `useShapes` hook, it will render the list of shapes that has `isSelected=true`

## `components/AddShapesButtons`

These components will add new shapes to the canvas using the `hooks/useShapes`
