
import { RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import router from './routers/routingLink';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';


function App() {


  return <RouterProvider router={router}></RouterProvider>

}

export default App;
