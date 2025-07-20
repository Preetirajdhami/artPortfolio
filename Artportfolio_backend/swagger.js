// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Art Portfolio API',
    version: '1.0.0',
    description: 'API documentation for the Art Portfolio project',
    contact: {
      name: "Preeti Rajdhami",
      email: "preetirajdhami@gmail.com",
      url: "https://yourwebsite.com"
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT"
    }
  },
  servers: [
    { url: 'http://localhost:8000' },
    { url: 'https://api.yourdomain.com' }
  ],
  tags: [
    { name: "Admin", description: "Admin authentication and dashboard" },
    { name: "Gallery", description: "Gallery image management" },
    { name: "Commissions", description: "Commission orders" },
    { name: "Contact", description: "Contact form messages" }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};



const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // 👈 Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
