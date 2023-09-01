# dug-js

## Example Usage

See the following example use cases:
- `examples/concepts.js`
- `examples/studies.js`

## Development

- core `dug-js` code lives in the `src` directory
- test functionality by writing examples in the `examples` directory

`npm-link` makes for easy concurrent local development and testing.
- from root dir: `npm link` will make your local version of this package available globally.
- from the `examples` dir: `npm link dug-js` creates a symlink from `node_modules/dug-js` to the project root.
