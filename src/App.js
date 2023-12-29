import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import Home from './modules/Home/Home';
import Login from './modules/Login/Login';
import About from './modules/About/About';
import Basket from './modules/Basket/Basket';
import Faq from './modules/Help/Faq';
import Contact from './modules/Help/Contact';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import NotFound from './modules/NotFound/NotFound';
import MangaList from './modules/MangaList/MangaList';
import MangaDetails from './modules/MangaList/MangaDetails';
import MangaListLayout from './layouts/MangaListLayout';
import { MangaDetailsLoader, MangaListDataLoader } from './modules/MangaList/MangaLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="MangaList" element={<MangaListLayout />}>
        <Route
          index 
          element={<MangaList />}
          loader={MangaListDataLoader}
        />
         <Route 
          path=":id" 
          element={<MangaDetails />}
          loader={MangaDetailsLoader}
        />
      </Route>

      <Route path="Login" element={<Login />} />
      <Route path="Basket" element={<Basket />} />
      <Route path="About" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
