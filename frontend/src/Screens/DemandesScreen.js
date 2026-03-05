import { useEffect, useState } from "react";
import api from "../api/axios";

function DemandesScreen() {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    api.get("demandes/")
      .then(res => setDemandes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Mes demandes</h2>
      <ul>
        {demandes.map(d => (
          <li key={d.id}>
            {d.type_demande} - {d.statut} - {d.montant_souhaite}€
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemandesScreen;
