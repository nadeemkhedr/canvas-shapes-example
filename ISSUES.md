# Issues

Currently the application has two problems that we need to fix:

- Edge detection, shapes wouldn't move out of canvas bound
- Introducing something like flow or typescript will make the project easier to navigate

- Currently we are redrawing the whole canvas on mouse move, this can be improved in a couple of ways:
  - don't do anything if mouse is not hover/clicking on anything
  - only clear out the affected shapes and redraw them when mouse moves (this is a big task)
