import  { createContext, useEffect, useState } from 'react';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import ComingSoon from './components/ComingSoon';
import { API_KEY } from './Utility';


export const CreateContext = createContext<any>(null);
function App() {
  const [apiData, setApiData] = useState<any>();
  useEffect(() => {
    fetch(API_KEY).then(res => res.json()).then((res) => {
      setApiData(res.users)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <CreateContext.Provider value={apiData}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/post' element={<ComingSoon />} />
          <Route path='/gallary' element={<ComingSoon />} />
          <Route path='/todo' element={<ComingSoon />} />
        </Routes>

      </BrowserRouter>
    </CreateContext.Provider>
  );
}

export default App;
