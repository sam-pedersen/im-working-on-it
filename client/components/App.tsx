import { useHobbies, Hobby } from '../hooks/useHobbies';

function App() {
  const { data, error } = useHobbies();

  return (
    <div className="app">
      <h1>I'm Working On It!</h1>
      <ul>
        {data && data.map((hobby: Hobby) => (
          <li key={hobby.id}>{hobby.name}</li> {/* Map through hobby objects */}
        ))}
      </ul>
    </div>
  );
}

export default App;
