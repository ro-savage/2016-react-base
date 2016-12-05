# 2016 React Base

This is a base for developing react apps, originally based on [create-react-app](https://github.com/facebookincubator/create-react-app)

## Table of Contents

- [Technologies](#technologies)
- [Before you start](#before-you-start)
  - [ES6 Javascript Syntax](#es6-javascript-syntax)
  - [npm test](#npm-test)
- [Folder Structure](#directory-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Adding a Stylesheet](#adding-a-stylesheet)
- [Post-Processing CSS](#post-processing-css)
- [Adding Images and Fonts](#adding-images-and-fonts)
- [Using the `public` Folder](#using-the-public-folder)
- [Adding Custom Environment Variables](#adding-custom-environment-variables)
- [Using HTTPS in Development](#using-https-in-development)
- [Generating Dynamic `<meta>` Tags on the Server](#generating-dynamic-meta-tags-on-the-server)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Command Line Interface](#command-line-interface)
  - [Version Control Integration](#version-control-integration)
  - [Writing Tests](#writing-tests)
  - [Testing Components](#testing-components)
  - [Using Third Party Assertion Libraries](#using-third-party-assertion-libraries)
  - [Initializing Test Environment](#initializing-test-environment)
  - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
  - [Coverage Reporting](#coverage-reporting)
  - [Continuous Integration](#continuous-integration)
  - [Disabling jsdom](#disabling-jsdom)
  - [Snapshot Testing](#snapshot-testing)

## Technologies

This project is built using a React/Redux based frame work and uses the core following packages
- [React](https://facebook.github.io/react/) (JS Framework)
- [Redux](http://redux.js.org/) (JS state management)
- [React-Router](https://github.com/ReactTraining/react-router) (SPA Routing)
- [Redux-Saga](https://github.com/yelouafi/redux-saga) (Handling of API / Async calls)
- [Reselect](https://github.com/reactjs/reselect) (Cache internal state queries)
- [Jest](https://facebook.github.io/jest/) (Testing framework)
- [Enzyme](http://airbnb.io/enzyme/) (Testing renderer)
- [PostCSS](http://postcss.org/) (Process CSS before create CSS file)
- [CSS Modules](https://github.com/css-modules/css-modules) (Import name-spaced classes)
- [cssnext](http://cssnext.io/) (Use future syntax of CSS)
- [Webpack](https://webpack.github.io/) (JS Builder and complier)
- [Babel](https://babeljs.io/) (Use ES / ES6 Next JS syntax)
- [React Hot Loader](https://gaearon.github.io/react-hot-loader/) (Auto reload, keeping internal
state)


## Before You Start

Before you start working on this application you should have some knowledge of a few key features.

### ES6 Javascript Syntax
This project is written entirely using ES6 / ES Next features, then complied to ES5 / Browser level.
If you have not been writing code in ES6, you should first read up and follow some tutorials to
understand ES6.
Suggested Reading:
* [es-6features.org](http://es6-features.org/) - Simple examples of ES5 vs ES6 (Highly recommended)
* [Learn harmony](http://learnharmony.org/) - Interactive Lessons for ES6
* [How to learn ES6 links](https://medium.com/javascript-scene/how-to-learn-es6-47d9a1ac2620#
.ka2hmqul6) - Collection of suggested learning links
* [ES6 Indepth by Mozillia](https://hacks.mozilla.org/category/es6-in-depth/) - Dive deep into new
features
* [ES6 in ES5](https://github.com/addyosmani/es6-equivalents-in-es5) - Shows examples of how ES6
features were originally written in ES5.
* [ES6 Katas](http://es6katas.org/) - Practice programming Kata's in ES6

### React Framework
The React Framework is based on the ideas of components and one-way data flow. It takes
inspiration from 'functional programming'. If you haven't used a functional & component based
framework/lanage before then you should follow a couple React tutorials.
Suggested reading:
* [Official React Docs](https://facebook.github.io/react/docs/hello-world.html) - Good quick intro
* [React Fundmentals](https://egghead.io/courses/react-fundamentals) - Free video series
* [SurviveJS - React](http://survivejs.com/react/introduction/) - Deep dive tutorial on react &
webpack

### Redux State Managemnet
Redux is used for state management. It creates a single data store at the top level which is the
single source of truth. All data is then passed down from that single source of truth. Every time
a change occurs, every component recieved the updated data even if nothing has changed for it.
Suggested reading:
* [Getting started with Redux](https://egghead.io/courses/getting-started-with-redux) - Awesome
series. **Watch first**
* [Official docs](http://redux.js.org/) -  Official docs have a great tutorial
* [Full Stack React/Redux](https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) -
Great deep dive into React/Redux
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) - Advanced video course. Highly recommended

### Handling API calls and other async data
Redux Saga is used for handling API calls and other async events, and bring the returned values
intro redux. Saga's are compliated to gasp. I would suggest just looking at the current code and
copying/modifying it and wait until you need to do something new to dive deepering into how
saga's work.

Suggested reading:
* [Offical Saga Docs](https://yelouafi.github.io/redux-saga/docs/introduction/BeginnerTutorial
.html) - Good introduction
* [Redux and Sagas](http://jaysoo.ca/2016/01/03/managing-processes-in-redux-using-sagas/) -
Deeper dive into Sagas
* [Async operations using redux-saga](https://medium.freecodecamp
.com/async-operations-using-redux-saga-2ba02ae077b3#.mcmxsk6i8) - Another dive into redux-saga

### More suggested reading
There is a lot more to learn, the rest can more-or-less be understood by reading this code base.
But if you'd like to learn more. Here are some more suggestions for the tech stack.
(Coming soon)

## Directory Structure
```
├── config                         # Config files for devs and test
│   └── *                          #
├── dist/                          # Built artifacts get put here
├── scripts/                       # npm scripts
│   ├── build.js                   # Build for release <npm run build>
│   ├── start.js                   # Build for dev <npm start>
│   └── test.js                    # Run tests <npm test>
├── src                            # The source code of the application
│   ├── components/                # React components shared across the app
│   │   └── Button/                # React Button used throughout the app
│   │       ├── Button.css         # Styles related directly to the Button
│   │       ├── Button.js          # Button - React Component
│   │       └── readme.md          # Readme on how to use the button
│   ├── features/                  # Components, API, Redux and Sagas by feature
│   │   ├── posts/                 # All app JS files related to posts
│   │   │   ├── PostList/
│   │   │   │   ├── PostList.js    # PostList React Component
│   │   │   │   ├── PostListContainer.js # Container that linked PostList to redux store
│   │   │   │   └── __tests__      # Tests for PostList and PostListContainer
│   │   │   ├── postsActions.js    # post related actions
│   │   │   ├── postsAPI.js        # posts related APIs
│   │   │   ├── postsReducer.js    # posts reducer
│   │   │   ├── postsSagas.js      # posts related sagas
│   │   │   ├── postsSelectors.js  # posts related selectors
│   │   │   ├── Post/              # Post Component
│   │   │   └── PostInput/         # PostInput Component
│   │   └── reactredux/            # All app JS files related to reactredux
│   │   └── users/                 # All app JS files related to users
│   ├── pages/                     # Pages / Routes
│   │   ├── <page name>/           # Name of Page and its components/containers
│   │   ├── RestPage/              # Files relating directly to that page/route
│   │   │   └── RestPage.js        # React Component/Container for the page
│   │   ├── App.js                 # Wrapper for app which adds routers & redux
│   │   └── routes.js              # All the app routes
│   ├── config.css                 # CSS variables for be used across the app
│   ├── configureStore.dev.js      # Store configuation for Dev
│   ├── configureStore.js          # Chooses the correct config based on node env var
│   ├── configureStore.prod.js     # Store config for Prod
│   ├── index.css                  # Global CSS styles (class names left intact)
│   ├── index.js                   # Application entry point
│   ├── reducers.js                # Root reducer that combines all other reducers
│   └── sagas.js                   # Root saga that combines all other sagas
├── package.json                # (self explanatory)
```


Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## React Basics

### Importing a Component

This project setup supports ES6 modules thanks to Babel.<br>
While you can still use `require()` and `module.exports`, we encourage you to use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) instead.

For example:

#### `Button.js`

```js
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // Don’t forget to use export default!
```

#### `DangerButton.js`


```js
import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

Be aware of the [difference between default and named exports](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). It is a common source of mistakes.

We suggest that you stick to using default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.

Learn more about ES6 modules:

* [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
* [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

### Adding a Stylesheet

We use [CSS Modules](https://github.com/css-modules/css-modules) for importing stylesheets. It
will name space all classes so that you will
never have a conflict. Now you can just name classes whatever is best.

#### `Button.css`

```css
.button {
  padding: 20px;
}
```

#### `Button.js`

```js
import React, { Component } from 'react';
import styles from './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // Then you tell react component what class to use
    return <div className={styles.button} />;
  }
}
```

More Reading:
* [What are CSS Modules?](https://css-tricks.com/css-modules-part-1-need/)
* [CSS Modules: Welcome to the future](https://glenmaddern.com/articles/css-modules)
* [Modular CSS with React](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e#.5lghlzj8x)


### PostCSS / cssNext

We use [PostCSS](http://postcss.org/) with the [cssnext](http://cssnext.io/), [imports]
(https://github.com/postcss/postcss-import) and
[auto-prefixers](https://autoprefixer.github.io/) plugins.

- PostCss: Allows us to process the CSS before its made into a CSS file using a series of plugins
- cssnext: Allows us to use css spec features that have not yet been implemented
- imports: Allows us to import other css files
- auto-prefix: Auto applies vendor prefixes to your css

### Adding Images and Fonts

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` an image right in a JavaScript module**. This tells Webpack to include that image in the bundle. Unlike CSS imports, importing an image or a font gives you a string value. This value is the final image path you can reference in your code.

Here is an example:

```js
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default function Header;
```

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack finds all relative module references in CSS (they start with `./`) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.

An alternative way of handling static assets is described in the next section.

### Using the `public` Folder

Normally we encourage you to `import` assets in JavaScript files as described above. This mechanism provides a number of benefits:

* Scripts and stylesheets get minified and bundled together to avoid extra network requests.
* Missing files cause compilation errors instead of 404 errors for your users.
* Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.

However there is an **escape hatch** that you can use to add an asset outside of the module system.

If you put a file into the `public` folder, it will **not** be processed by Webpack. Instead it will be copied into the build folder untouched.   To reference assets in the `public` folder, you need to use a special variable called `PUBLIC_URL`.

Inside `index.html`, you can use it like this:

```html
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```

Only files inside the `public` folder will be accessible by `%PUBLIC_URL%` prefix. If you need to use a file from `src` or `node_modules`, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.

When you run `npm run build`, Create React App will substitute `%PUBLIC_URL%` with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.

In JavaScript code, you can use `process.env.PUBLIC_URL` for similar purposes:

```js
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

Keep in mind the downsides of this approach:

* None of the files in `public` folder get post-processed or minified.
* Missing files will not be called at compilation time, and will cause 404 errors for your users.
* Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.

However, it can be handy for referencing assets like [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest) from HTML, or including small scripts like [`pace.js`](http://github.hubspot.com/pace/docs/welcome/) outside of the bundled code.

### Adding Custom Environment Variables

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By
default you will have `NODE_ENV` defined for you, and any other environment variables starting with
`REACT_APP_`. These environment variables will be defined for you on `process.env`. For example, having an environment
variable named `REACT_APP_SECRET_CODE` will be exposed in your JS as `process.env.REACT_APP_SECRET_CODE`, in addition
to `process.env.NODE_ENV`.

>Note: Changing any environment variables will require you to restart the development server if it is running.

These environment variables can be useful for displaying information conditionally based on where the project is
deployed or consuming sensitive data that lives outside of version control.

First, you need to have environment variables defined. For example, let’s say you wanted to consume a secret defined
in the environment inside a `<form>`:

```jsx
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      </form>
    </div>
  );
}
```

During the build, `process.env.REACT_APP_SECRET_CODE` will be replaced with the current value of the `REACT_APP_SECRET_CODE` environment variable. Remember that the `NODE_ENV` variable will be set for you automatically.

When you load the app in the browser and inspect the `<input>`, you will see its value set to `abcdef`, and the bold text will show the environment provided when using `npm start`:

```html
<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

Having access to the `NODE_ENV` is also useful for performing actions conditionally:

```js
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```

The above form is looking for a variable called `REACT_APP_SECRET_CODE` from the environment. In order to consume this
value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in
a `.env` file.

#### Adding Temporary Environment Variables In Your Shell

Defining environment variables can vary between OSes. It's also important to know that this manner is temporary for the
life of the shell session.

##### Windows (cmd.exe)

```cmd
set REACT_APP_SECRET_CODE=abcdef&&npm start
```

(Note: the lack of whitespace is intentional.)

##### Linux, OS X (Bash)

```bash
REACT_APP_SECRET_CODE=abcdef npm start
```

#### Adding Development Environment Variables In `.env`

>Note: this feature is available with `react-scripts@0.5.0` and higher.

To define permanent environment variables, create a file called `.env` in the root of your project:

```
REACT_APP_SECRET_CODE=abcdef
```

These variables will act as the defaults if the machine does not explicitly set them.<br>
Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

>Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need
these defined as well. Consult their documentation how to do this. For example, see the documentation for [Travis CI](https://docs.travis-ci.com/user/environment-variables/) or [Heroku](https://devcenter.heroku.com/articles/config-vars).

### Using HTTPS in Development

>Note: this feature is available with `react-scripts@0.4.0` and higher.

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using [the "proxy" feature](#proxying-api-requests-in-development) to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

##### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

(Note: the lack of whitespace is intentional.)

##### Linux, OS X (Bash)

```bash
HTTPS=true npm start
```

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

### Running Tests

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner. To prepare for this integration, we did a [major revamp](https://facebook.github.io/jest/blog/2016/09/01/jest-15.html) of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.

#### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

![Jest watch mode](http://facebook.github.io/jest/img/blog/15-watch.gif)

#### Version Control Integration

By default, when you run `npm test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests runs fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a [continuous integration](#continuous-integration) server or if the project is not inside a Git or Mercurial repository.

#### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](http://facebook.github.io/jest/docs/api.html#expect-value).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](http://facebook.github.io/jest/docs/api.html#tobecalled) to create “spies” or mock functions.

#### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using [`shallow()` rendering API](http://airbnb.io/enzyme/docs/api/shallow.html) from [Enzyme](http://airbnb.io/enzyme/). You can write a smoke test with it too:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports [full rendering with `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), and you can also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation](http://airbnb.io/enzyme/) for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

```js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

All Jest matchers are [extensively documented here](http://facebook.github.io/jest/docs/api.html#expect-value).<br>
Nevertheless you can use a third-party assertion library like [Chai](http://chaijs.com/) if you want to, as described below.

#### Initializing Test Environment

If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a `src/setupTests.js` to your project. It will be automatically executed before running your tests.

For example:

##### `src/setupTests.js`
```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
```

#### Focusing and Excluding Tests

You can replace `it()` with `xit()` to temporarily exclude a test from being executed.<br>
Similarly, `fit()` lets you focus on a specific test without running any other tests.

#### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

![coverage report](http://i.imgur.com/5bFhnTS.png)

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

### Continuous Integration

By default `npm test` runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called `CI`. Popular CI servers already set it by default but you can do this yourself too:

#### On CI servers
##### Travis CI

1. Following the [Travis Getting started](https://docs.travis-ci.com/user/getting-started/) guide for syncing your GitHub repository with Travis.  You may need to initialize some settings manually in your [profile](https://travis-ci.org/profile) page.
1. Add a `.travis.yml` file to your git repository.
```
language: node_js
node_js:
  - 4
  - 6
cache:
  directories:
    - node_modules
script:
  - npm test
```
1. Trigger your first build with a git push.
1. [Customize your Travis CI Build](https://docs.travis-ci.com/user/customizing-the-build/) if needed.

#### On your own environment
###### Windows (cmd.exe)

```cmd
set CI=true&&npm test
```

(Note: the lack of whitespace is intentional.)

###### Linux, OS X (Bash)

```bash
CI=true npm test
```

This way Jest will run tests once instead of launching the watcher.

If you find yourself doing this often in development, please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new) to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.

#### Disabling jsdom

By default, the `package.json` of the generated project looks like this:

```js
  // ...
  "scripts": {
    // ...
    "test": "react-scripts test --env=jsdom"
  }
```

If you know that none of your tests depend on [jsdom](https://github.com/tmpvar/jsdom), you can safely remove `--env=jsdom`, and your tests will run faster.<br>
To help you make up your mind, here is a list of APIs that **need jsdom**:

* Any browser globals like `window` and `document`
* [`ReactDOM.render()`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
* [`TestUtils.renderIntoDocument()`](https://facebook.github.io/react/docs/test-utils.html#renderintodocument) ([a shortcut](https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91) for the above)
* [`mount()`](http://airbnb.io/enzyme/docs/api/mount.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

In contrast, **jsdom is not needed** for the following APIs:

* [`TestUtils.createRenderer()`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) (shallow rendering)
* [`shallow()`](http://airbnb.io/enzyme/docs/api/shallow.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

Finally, jsdom is also not needed for [snapshot testing](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html). Longer term, this is the direction we are interested in exploring, but snapshot testing is [not fully baked yet](https://github.com/facebookincubator/create-react-app/issues/372) so we don’t officially encourage its usage yet.

#### Snapshot Testing

Snapshot testing is a new feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output.

### Deployment

### Building for Relative Paths

By default, the app produces a build assuming your app is hosted at the server root.<br>
To override this, specify the `homepage` in your `package.json`, for example:

```js
  "homepage": "http://mywebsite.com/relativepath",
```

This will let the app correctly infer the root path to use in the generated HTML file.
