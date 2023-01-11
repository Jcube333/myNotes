# myNotes
> Command Line Note Taking Application with a great Color Theme.  
Perform Create, Read, Update{Coming Soon}, Delete and List Operations on Notes using CLI.

![](header.png)

## Installation

in Terminal/PowerShell

```sh
git clone https://github.com/Jcube333/myNotes.git
```

```sh
npm insatll
```


## Usage example

See all the possible commands you can execute with the app.
```sh
node app.js --help
```

![Screenshot 2023-01-11 at 12 32 06 PM](https://user-images.githubusercontent.com/73747890/211739324-0a27adf3-71f1-4e6f-9e97-56b7e5261ae8.png)

## Adding a Note
```sh
node app.js add --title="ToDo" --body="Programming, Gym, Classes"
```
![Screenshot 2023-01-11 at 12 40 10 PM](https://user-images.githubusercontent.com/73747890/211740620-de4dc1e1-27b7-420e-9dc2-7d24c5c77495.png)

## Removing a Note
```sh
node app.js remove --title="ToDo"
```
![Screenshot 2023-01-11 at 12 40 58 PM](https://user-images.githubusercontent.com/73747890/211740756-e4d8fe7f-858a-48ca-b743-0561f955c198.png)

## Listing all Notes
```sh
node app.js list
```
![Screenshot 2023-01-11 at 12 44 15 PM](https://user-images.githubusercontent.com/73747890/211741281-db310129-16f3-44ba-a25b-81e16298813e.png)

## Reading a Note
```sh
node app.js read --title="ToDo2"
```
![Screenshot 2023-01-11 at 12 47 05 PM](https://user-images.githubusercontent.com/73747890/211741774-020a26e2-2881-425c-99dd-2a69fb7c9af4.png)


## Release History

* 1.1.0
    * The first proper release
    * Added support for listing files and reading them
    * Added styles with appealing color schemes
* 1.0.0
    * Added functionalities for adding and removing a note

## Contributors

Jaimin Judal – jaiminjagdish@gmail.com



## Contributing

1. Fork it (https://github.com/Jcube333/myNotes.git)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
