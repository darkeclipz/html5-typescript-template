# Typescript Template

This is a default template to start creating web apps with Typescript.

## How it is created/used

Steps required to recreate it. If Typescript `tsc` is not installed, this can be done with `npm i -g typescript`. If `npm` is not available, download Node JS.

### 1. Create `tsconfig.json`.

Creat a file `tsconfig.json` in the root directory of your project.
Add the following lines:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "allowJs": false,
    "target": "es5",
    "allowUnusedLabels": false,
    "strict": true,
    "sourceMap": true
  },
  "include": ["./src/**/*"]
}
```

Or type `tsc --init` to create a new `tsconfig.json` file.

### 2. Set up webpack & building

Webpack dependencies can be installed with `npm install -savedev typescript webpack ts-loader source-map-loader`.

Then we create `webpack.config.js`, and paste:

```js
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "./dist/bundle.js",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },

  // Other options...
};
```

Now we can build with `webpack`. To not have a minified source ouput, use

```js
optimization: {
    minimize: false
}
```

### 3. Other

 * To have Typescript output a source map, add `"sourceMap": true`.

For more information, see: https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html.