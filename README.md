# react-native-cs-imdb-api-movie

This is an example of a library to fetch data from Open API Movie Database.

## Installation when published on npm

```sh
npm install react-native-cs-imdb-api-movie
```

## Locally installation

```sh
Just copy the entire folder modules to your root project.
putting "react-native-cs-imdb-api-movie": "link:./modules/cs-imdb-api-movie" on package.json dependencies
execute yarn / npm
```

## Usage

```js
import { getMovies } from "react-native-cs-imdb-api-movie";

// ...

React.useEffect(() => {
  async function loadMovies() {
    const response = await getMovies("hidden");
    console.log(response.data.Search);
  }

  loadMovies();
}, []);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
