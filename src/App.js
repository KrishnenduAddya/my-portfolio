import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';

function App() {

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>
    }
    ]);

    return (
      <div>
          <RouterProvider router={appRouter}/>
      </div>
    )
}

export default App;
