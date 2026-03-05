import { useEffect, useState } from "react";
import api from "../api/axios";

function PaieScreen() {
  const [paiements, setPaiements] = useState([]);

  useEffect(() => {
    api.get("paie/")
      .then(res => setPaiements(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Mes paiements</h2>
      <ul>
        {paiements.map(p => (
          <li key={p.id}>
            {p.type_paiement} - {p.montant}€ - {p.date_paiement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaieScreen;
