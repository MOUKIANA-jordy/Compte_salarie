from django.db import models
from apps.users.models import Salarie
from django.core.exceptions import ValidationError

class Demande(models.Model):
    TYPE_CHOICES = [
        ("ACOMPTE", "Acompte"),
        ("AVANCE", "Avance"),
        ("CET", "Paiement CET"),
        ("HEURES_SUP", "Paiement heures sup"),
    ]

    STATUT_CHOICES = [
        ("EN_ATTENTE", "En attente"),
        ("APPROUVEE", "Approuvée"),
        ("REFUSEE", "Refusée"),
    ]

    salarie = models.ForeignKey(Salarie, on_delete=models.CASCADE, related_name="demandes")
    type_demande = models.CharField(max_length=50, choices=TYPE_CHOICES)
    montant_souhaite = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    statut = models.CharField(max_length=20, choices=STATUT_CHOICES, default="EN_ATTENTE")
    date_demande = models.DateTimeField(auto_now_add=True)
    processed_at = models.DateTimeField(null=True, blank=True)

    def clean(self):
        # Avance uniquement pour les CDI
        if self.type_demande == "AVANCE" and self.salarie.type_contrat != "CDI":
            raise ValidationError("Les avances sont réservées aux salariés CDI.")

    def __str__(self):
        return f"{self.get_type_demande_display()} - {self.salarie}"

