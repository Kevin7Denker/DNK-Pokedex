import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Style/Home'


const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp