![Yarn](https://img.shields.io/badge/yarn-20232A?style=for-the-badge&logo=yarn&logoColor=2C8EBB)
![NPM](https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=NPM&logoColor=#CB3837)
![Node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=Node.js&logoColor=#CB3837)
![express](https://img.shields.io/badge/express-20232A?style=for-the-badge&logo=express&logoColor=#CB3837)
![Socket.io](https://img.shields.io/badge/Socket.io-20232A?style=for-the-badge&logo=Socket.io&logoColor=#CB3837)

# Create a chat function using react.

```code
# install dependencies
npm install

# client localhost:3000
npm run start
or
yarn start

# server localhost:7000
node index.js
```

<br>

## Used Framework.

### Client
1. react-router-dom
2. query-string
3. socket.io-client
4. react-scrill-to-bottom
5. emoji-picker-react

## Server
1. socket.io
2. express

<br>

## Client App.js
```react
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Chat from './components/Chat'
import Join from './components/Join'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Join />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```
<hr>
<br>

### Server index.js
```node.js
const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app)
const io = socketio(server)
server.listen(PORT,()=>console.log(`Server ${PORT} Start`))
```

<hr>
<br>

## React Router v6 바뀐점 알아보기.

- 'switch' 의 네이밍이 Routes로 변경이 되었습니다.
- exact 옵션 삭제
- component 방식 변경 `(component={COM} 및 render={() => <h1>Hello<h1/>}` 삭제)
- path 를 기존의 `path="/Web/:id"` 에서 `path=":id"` 로, 상대경로로 지정    
- 이 외에도, `path="." / path=".."` 등으로 상대경로를 표현한다
```react
ex

<Link to = ".">Home</Link> 
<Link to = "../Login">Login</Link> 
```

- Switch 는 알다시피, 경로가 적합한 처음 한 컴포넌트를 찾아주었는데,
여기서 발생하는 (적합한 url의 순서를 뒤로 지정해주어 발생하는) 버그를 방지합니다.

<br>

## 기존 v5 방식
```react
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <Home />} />
        <Route exact path="/write" component={() => <Write />} />
        <Route component={() => <div>Page Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
}
```
- Switch 를 사용함
- exact로 복수의 라우팅을 막아준다.
- Component={} 내에 arrow function 함수를 사용하여 Component를 전달해준다

<br>

## v6 방식
```react
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import Chat from './components/Chat'
import Join from './components/Join'
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Join />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```
- exact 는 더이상 사용하지 않고 여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 * 을 사용합니다.
- Component 대신 element로 바로 Component를 전달합니다.