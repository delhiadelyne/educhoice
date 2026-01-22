import { useEffect, useState } from "react";

function App() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>EduChoice</h1>
      <p>Helping parents choose the right school with confidence.</p>

      <h2>Available Schools</h2>
      {schools.length === 0 ? (
        <p>Loading schools...</p>
      ) : (
        <ul>
          {schools.map((school) => (
            <li key={school.id} style={{ marginBottom: "10px" }}>
              <strong>{school.name}</strong> <br />
              Fees: {school.fees} <br />
              Materials: {school.materials.join(", ")} <br />
              Ranking: {school.ranking} <br />
              Discipline: {school.discipline} <br />
              Smartness: {school.smartness}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
