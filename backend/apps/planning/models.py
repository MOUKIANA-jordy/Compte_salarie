from django.db import models
from apps.users.models import Salarie


class Planning(models.Model):

    TYPE_JOURNEE = [
        ("BUREAU", "Bureau"),
        ("TELETRAVAIL", "Télétravail"),
        ("CONGE", "Congé"),
        ("ABSENCE", "Absence"),
        ("VACATION", "Vacation"),
        ("FORMATION", "Formation"),
    ]

    salarie = models.ForeignKey(
        Salarie,
        on_delete=models.CASCADE,
        related_name="plannings"
    )

    date = models.DateField()
    heure_debut = models.TimeField(blank=True, null=True)
    heure_fin = models.TimeField(blank=True, null=True)

    type_journee = models.CharField(
        max_length=20,
        choices=TYPE_JOURNEE,
        default="BUREAU"
    )

    commentaire = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ("salarie", "date")
        ordering = ["-date"]

    def __str__(self):
        return f"{self.salarie} - {self.date} ({self.type_journee})"
