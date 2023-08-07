
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
//switch는 route를 찾음(url을 찾음)
//Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포턴트
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return (<Router>
        <Routes> 
          <Route path="/movie/:id" element={<Detail />}/>
          <Route path="/" element={<Home />} />
        
        </Routes>
  </Router>);
          }

export default App;
