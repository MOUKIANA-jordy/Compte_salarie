import { useEffect, useState } from "react";
import api from "../api/api";

function SalariesScreen() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    try {
      const response = await api.get("salaries/");
      setSalaries(response.data);
    } catch (error) {
      console.error("Erreur chargement salariés");
    }
  };

  return (
    <div>
      <h2>Liste des salariés</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Poste</th>
            <th>Contrat</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map((s) => (
            <tr key={s.id}>
              <td>{s.matricule}</td>
              <td>{s.prenom} {s.nom}</td>
              <td>{s.poste}</td>
              <td>{s.type_contrat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalariesScreen;
