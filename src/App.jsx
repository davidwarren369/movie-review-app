import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import styles from'./App.module.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>
          <div className={styles.app}>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
