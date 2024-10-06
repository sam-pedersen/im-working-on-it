import { useHobbies } from '../hooks/useHobbies'

const Home = () => {
  const { data } = useHobbies()

  return (
    <div className="home">
      <h1>Im Working On It!</h1>
      {data ? (
        data.length > 0 ? (
          <ul>
            {data.map((hobby) => (
              <li key={hobby.id}>
                <h3>{hobby.name}</h3>
                <p>{hobby.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hobbies added yet!</p>
        )
      ) : (
        <p>Loading hobbies...</p>
      )}
    </div>
  )
}

export default Home
