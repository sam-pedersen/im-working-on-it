import { useHobbies } from '../hooks/useHobbies.ts'
import Nav from './Nav.tsx'
function App() {
  const { data } = useHobbies()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate </h1>
        {/* <Nav /> */}
        <ul>
          {data && data.map((hobbies) => <li key={hobbies}>{hobbies}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
