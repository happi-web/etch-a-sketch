# Etch-A-Sketch Sketchpad

A browser-based sketchpad application inspired by the classic Etch-A-Sketch toy. This project demonstrates DOM manipulation and event handling to create an interactive drawing experience.

## Features

- **Dynamic Grid**: Users can create a customizable grid (up to 100x100 squares).
- **Hover-to-Draw**: Hover over the grid squares to "draw" with a pixelated trail.
- **Random Colors**: Each square changes to a random color when hovered.
- **Reset Functionality**: Clear the grid and reset it to default (16x16 size).
- **Responsive Design**: Grid adapts to the container for consistent square sizes.

## Technologies Used

- **HTML**: For page structure.
- **CSS**: For styling the grid, modal, and buttons.
- **JavaScript**: For DOM interactions and grid customization.

## How to Use

1. Open the `index.html` file in your browser.
2. Use the **"Change Grid Size"** button to set a custom grid size.
3. Hover over the grid squares to draw with a random color trail.
4. Click **"Reset"** to clear the grid and start fresh.

## Project Files

- `index.html`: Main structure of the project.
- `style.css`: Contains styles for the grid, modal, and buttons.
- `script.js`: Handles grid creation, hover effects, and user interactions.

## Screenshots

### Default 16x16 Grid
![Default Grid](#)

### Custom Grid (e.g., 32x32)
![Custom Grid](#)

### Hover Effect
![Hover Effect](#)

> Add screenshots or images here to demonstrate the application.

## How It Works

1. The grid is dynamically created using JavaScript based on user input.
2. Each square changes its background color to a random RGB value when hovered.
3. Buttons provide functionality for grid resizing and resetting.

## Challenges

- Ensuring the grid scales properly within the container.
- Implementing a smooth and consistent hover effect.
- Validating user input to maintain performance for larger grids.

## Future Enhancements

- **Color Picker**: Let users choose their drawing color.
- **Eraser Tool**: Add an option to erase specific squares.
- **Save Feature**: Enable saving the sketch as an image.
- **Mobile Support**: Improve functionality for touchscreens.

## License

This project is open-source under the [MIT License](LICENSE).

## Acknowledgments

This project was inspired by [The Odin Project](https://www.theodinproject.com/)'s curriculum.

---
