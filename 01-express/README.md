# setup

- npm init -y
- npm i nodemon --save-dev
- npm i express

# configure

- package.json

```json
  "scripts": {
    "start": "nodemon server"
  },
```

- create folder public
- create /public/index.html
- create server.js

# express - server.js

```javascript
const express = require('express')

const PORT = 8081
const app = express()
app.use(express.static('public'))

app.listen(PORT)
```

 - npm run start