# react-native-cs-imdb-api-movie

This is an example of a library to fetch data from Open API Movie Database.

## Installation on https://www.npmjs.com/

Obs: not published

```sh
npm install react-native-cs-imdb-api-movie
```

## Local library installation

```sh
Just copy the entire folder modules to your root project.

MyApp
├── node_modules
├── modules                <-- folder for your local libraries
│   └── cs-imdb-api-movie  <-- your local library
├── android
├── ios
├── src
├── index.js
└── package.json

You need to put on package.json

 "dependencies": {
    "react-native-cs-imdb-api-movie": "link:./modules/cs-imdb-api-movie"
  }
execute yarn / npm
```

## Usage

```js
import { fetchMovies } from "react-native-cs-imdb-api-movie";

// ...

React.useEffect(() => {
  async function getMovies() {
    const response = await fetchMovies("hidden");
    console.log(response.data.Search);
  }

  getMovies();
}, []);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
