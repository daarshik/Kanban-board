// server.ts
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const app = express();
const port = process.env.PORT || 3000;

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'Your API',
    version: '1.0.0',
    description: 'Your API description',
  },
  host: 'localhost:3000', // Update with your host
  basePath: '/', // Base path for your API
};

// Options for the swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./routes/*.ts'], // Path to your API route files
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
