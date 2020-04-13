import {ApplicationConfig} from '@loopback/core';
import {OpenApiSpec} from '@loopback/rest';
import {FnFApplication} from './application';

export {FnFApplication};

export async function main(options: ApplicationConfig = {}) {
  const spec: OpenApiSpec = {
    openapi: '3.0.0',
    info: {
      title: 'LoopBack Application v2',
      version: '1.0.2',
    },
    paths: {},
    security: [
      {
        BearerAuth: ['BearerAuth'],
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer"
        }
      }
    },
  };
  const app = new FnFApplication(options);

  app.api(spec)
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
