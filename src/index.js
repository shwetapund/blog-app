import ReactDOM  from "react-dom/client";
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Home from './views/Home/Home';
import Post from './views/Post/Post';
import ReadPost from './views/ReadPost/ReadPost';
import App from './views/App/App';

const root = ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/post',
            element:<Post/>
        },
        {
            path:'/post/read/:id',
            element:<ReadPost/>
        },
        {
            path:'/app',
            element:<App/>
        },
        {
            path:'*',
            element:<h1>404 Not Found</h1>
        }
    ]
)
root.render(
    <>
        <RouterProvider router= {router}/>
    </>
);
