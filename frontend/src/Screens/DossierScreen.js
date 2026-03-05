import { useEffect, useState } from "react";
import api from "../api/axios";

function DossierScreen() {
  const [dossier, setDossier] = useState(null);

  useEffect(() => {
    api.get("dossiers/1/")
      .then(res => setDossier(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!dossier) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Dossier RH</h2>
      <p><strong>Adresse :</strong> {dossier.adresse}</p>
      <p><strong>Ville :</strong> {dossier.ville}</p>
      <p><strong>Pays :</strong> {dossier.pays}</p>
      <p><strong>IBAN :</strong> {dossier.iban}</p>
    </div>
  );
}

export default DossierScreen;
