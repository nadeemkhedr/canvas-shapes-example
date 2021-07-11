# New planned features

## localStorage based persistence

This shouldn't take anytime, just modify `useShapes` to use a custom `useLocalStorage` hook instead of the `useState`

## Undo/redo

Need to add some sort of state management layer like redux. modify the actions to be dispatch and capture the snapshot of the shapes on each action. This way we can easily rollback to prev actions

## Save to image

Need to render only the shapes on canvas without hover and selected outlines (maybe a 2nd canvas that is hidden), and then convert that to an image and save it
