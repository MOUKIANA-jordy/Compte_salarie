import { useEffect, useState } from "react";
import api from "../api/axios";

function PointageScreen() {
  const [pointages, setPointages] = useState([]);

  useEffect(() => {
    api.get("pointage/")
      .then(res => setPointages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Pointage</h2>
      <ul>
        {pointages.map(p => (
          <li key={p.id}>
            {p.date} - {p.heures_travaillees}h
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PointageScreen;
