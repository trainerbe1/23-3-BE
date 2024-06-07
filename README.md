# Cookbook 2.0

Install the dependencies:

```bash
$ npm install
```

Use the command below to generate the database:

```bash
$ npx prisma db push
```

Use the command below to generate the ORM:

```bash
$ npx prisma generate
```

Use the command below to generate the documentation at project startup and run in development:

```bash
$ npm run dev
```

Use the command below to start the project without generating the documentation:

```bash
$ npm start
```

Run the project and access the documentation at:

[http://localhost:3000/swagger](http://localhost:3000/swagger)