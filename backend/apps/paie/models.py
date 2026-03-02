from django.db import models
from apps.users.models import Salarie
from apps.demandes.models import Demande

class Paie(models.Model):
    TYPE_CHOICES = [
        ("SALAIRE", "Salaire"),
        ("ACOMPTE", "Acompte"),
        ("AVANCE", "Avance"),
        ("CET", "Paiement CET"),
        ("HEURES_SUP", "Heures sup"),
        ("FICHE_PAIE", "Fiche de paie"),
        ("CALENDRIER_PAIE", "Calendrier de paie"),
    ]

    salarie = models.ForeignKey(Salarie, on_delete=models.CASCADE, related_name="paiements")
    demande = models.OneToOneField(Demande, on_delete=models.SET_NULL, null=True, blank=True)
    type_paiement = models.CharField(max_length=50, choices=TYPE_CHOICES)
    montant = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    date_paiement = models.DateField()
    preuve_pdf = models.FileField(upload_to="paiements/", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.get_type_paiement_display()} - {self.salarie}"
