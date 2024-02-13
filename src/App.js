import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage/LoginPage'
import RequestListingPage from './components/RequestListingPage/RequestListingPage'
import RequestDetailPage from './components/RequestDetailPage/RequestDetailPage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route
              path='/request-listing/:id'
              element={<RequestDetailPage />}
            />
            <Route path='/request-listing' element={<RequestListingPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
