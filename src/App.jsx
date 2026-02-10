import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';



const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;