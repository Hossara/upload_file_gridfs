# Upload file into GridFS using fastify.js
This has been a research and test project for me to find and test different methods of uploading files and actually the best method of uploading files and saving them in GridFs.

I'm using fastify as a server framework and tap as testing framework.

### Build and run
You can use docker to build and test the project. Just run:

```bash
dokcer-compose up -d
```
And then the backend is available with port `8085` and Mongo dashboard with port `8005`.

If you need to test the code, just run:
```bash
dokcer-compose -f docker-compose.test.yaml up
```
And the tap will run some tests and print you the test results.

### Commands
```bash
# To start backend
pnpm start

# To build application
pnpm build

# To test the code
pnpm test

# Run automatically before pnpm build
pnpm prebuild 

# Run automatically before pnpm start
pnpm prestart 
```

### Contributors
- Hossein Araghi
  - [GitHub](https://github.com/hossara)
  - [LinkedIn](https://linkedin.com/in/hossara)
  - [Email](mailto:hossara.dev@gmail.com)
  - [Instagram](https://instagram.com/hossara.dev)

### Donate me

<a href="https://coffeebede.ir/hossara">
  <img src="https://img.shields.io/badge/buy me a coffee-darkgreen.svg?&style=for-the-badge&logo=buymeacoffee&logoColor=white" height=30>
</a>