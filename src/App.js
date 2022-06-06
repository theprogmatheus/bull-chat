// import styles
import './App.css';

// import hooks
import { useState } from 'react';

// import components
import LoadScreen from './components/loadingScreen/LoadingScreen';
import Auth from './components/auth/Auth';

function App() {


  const [loading, setLoading] = useState(null);



  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Auth setLoading={setLoading} />

      {(loading !== null) && <LoadScreen message={loading} />}
    </div>
  );
}

export default App;
