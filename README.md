React StarterKit
================

TODO
----

Check plugins:

```
 "env": {
      "development": {
        "plugins": [
          "react-hot-loader/babel"
        ]
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


Update packages
---------------

`npm install -g npm-check-updates` globally installs `ncu` command

`ncu` will list available updates

`ncu -u` will install them