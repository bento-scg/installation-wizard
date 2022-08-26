## Installation

Install the packages

```sh
npm install
```

Run server

```sh
npm run start
```

## Docker

Build the image

```sh
docker build -t <youruser>/installation-wizard:${version} .
```
Once done, run the Docker image and map the port to whatever you wish on
your host.

```sh
docker run -d -p 4001:3000 --name=installation-wizard <youruser>/installation-wizard:${version}
```