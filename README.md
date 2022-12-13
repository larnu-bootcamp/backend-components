# backend-components

## tabla de contenido

- [sobre el proyecto](#)
- [iniciar](#iniciar)
  - [lista de comandos](#lista-de-comandos)
- [Estructura de archivos](#estructura-de-archivos)

## iniciar

### lista de comandos

  para iniciar el proyecto ejecutamos
  ```
    npm run dev
  ```

## Thunder-Client

## Estructura de archivos

```
  .
  └→ docs
  |  └→ docs.yaml
  |
  └→ img
  |  └→ dbDiagram.jpg
  |
  └→ src
  |  └→ config
  |  |
  |  └→ controllers
  |  |  └→ auth.controllers.ts
  |  |  └→ notification.controllers.ts
  |  |
  |  └→ entity
  |  |  └→ Notification.ts
  |  |  └→ User.ts
  |  |
  |  └→ middleware
  |  |  └→ notification.ts
  |  |  |  └→ notificationProgrammer.ts
  |  |  |  └→ sendNotification.ts
  |  |  |
  |  |  └→ errorHandle.ts
  |  |  └→ token.ts
  |  |
  |  └→ routers
  |  |  └→ auth.ts
  |  |  └→ notification.ts
  |  |
  |  └→ services
  |  |  └→ firebase
  |  |     └→ keys
  |  |     └→ firebase.config.ts
  |  |     └→ message.ts
  |  |
  |  └→ app.ts
  |  └→ data-source.ts
  |  └→ index.ts
  |
  └→ thunder-test
  |  └→ thunder-collection.json
  |  └→ thunderActivity.json
  |  └→ thunderclient.json
  |  └→ thunderCollection-.json
  |  └→ thunderEnvironment-.json
  |
  └→ .env_sample
  └→ .eslintignore
  └→ .eslintrc.js
  └→ .gitignore
  └→ .prettierignore
  └→ .prettierrc
  └→ package.json
  └→ README.md
  └→ tsconfig.md

```
