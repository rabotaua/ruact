![dependencies](https://david-dm.org/rabotaua/ruact.svg) ![dev-dependencies](https://david-dm.org/rabotaua/ruact/dev-status.svg)

# React StarterKit

Sample playground for react project

To start a new project your would like to:

```sh
git clone https://github.com/rabotaua/ruact myapp
cd myapp
rm -rf .git
git init
npm install
npm start:timer
```

The main purpose is to get [react-hot-loader](https://github.com/gaearon/react-hot-loader) work out of the box.

Samples taken from (react-hot-boilerplate)[https://github.com/gaearon/react-hot-boilerplate/tree/next] in conjunction with (react-boilerplate)[https://github.com/mxstbr/react-boilerplate] and (create-react-app)[https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html].

The main difference between this one and bazillion of other starter kits is that:

- we are wanting react hot loader
- we need 1+ apps inside repository

Note: if create react app project will accept latest patches from react hot loader then there is literally no need in this boilerplate.

## WebStorm notes

- Set up "JavaScript language version" to "React JSX" (File \ Settings... \ Languages & Frameworks \ JavaScript)
- Turn off "Unterminated statement" inspection at (File \ Settings... \ Editor \ Inspections \ JavaScrtip \ Code style issues \ Unterminated statement)
- Turn off "Method can be static" inspection at (File \ Settings... \ Editor \ Inspections \ JavaScrtip \ General \ Method can be static)
- Enable eslint at File \ Settings... \ Languages & Frameworks \ JavaScript \ Code Quality Tools \ ESLint
- Download and enalbe react and react-dom libraries from File \ Settins... \ JavaScripts \ Libraries

## TODO

### Style lint

make [rules](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md) decisions

### Redux, Router

Inject and provide sample for redux and router

### Babel plugins

```
"env": {
	"development": {
		"plugins": ["react-hot-loader/babel"]
	},
	"production": {
		"plugins": [
			"transform-react-remove-prop-types",
			"transform-react-constant-elements",
			"transform-react-inline-elements"
		]
	}
}

"babel-plugin-transform-class-properties": "6.*",
"babel-plugin-transform-react-constant-elements": "6.*",
"babel-plugin-transform-react-inline-elements": "6.*",
"babel-plugin-transform-react-remove-prop-types": "0.*",
```


## Update packages

`npm install -g npm-check-updates` globally installs `ncu` command

`ncu` will list available updates

`ncu -u` will install them

## Libraries

### Tests

ava is chosen for its concurrency, react and es6 out of the box support

[ava](https://github.com/avajs/ava) - runner
[react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html) - allow write unit tests for react components (as site says toke a look at *enzyme*)
[enzyme](http://airbnb.io/enzyme/) - makes *react-addons-test-utils* usable by adding jQuery like sugar
[jsdom](https://github.com/tmpvar/jsdom) - render into memory instead of phantomjs or chrome
[nyc](https://github.com/istanbuljs/nyc) - coverage
