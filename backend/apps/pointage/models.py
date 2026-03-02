from django.db import models
from apps.users.models import Salarie
from datetime import datetime, date, time, timedelta, datetime as dt_datetime

class Pointage(models.Model):
    salarie = models.ForeignKey(Salarie, on_delete=models.CASCADE, related_name="pointages")
    date = models.DateField()
    heure_arrivee = models.TimeField()
    heure_depart = models.TimeField()

    heures_travaillees = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    heures_sup = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    # Nouveau champ pour lier le pointage à la paie
    mois_paie = models.DateField(blank=True, null=True)  # date correspondant à la paie du 28

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        # Calcul automatique des heures travaillées
        if self.heure_arrivee and self.heure_depart:
            delta = (datetime.combine(date.min, self.heure_depart) -
                     datetime.combine(date.min, self.heure_arrivee))
            self.heures_travaillees = round(delta.total_seconds() / 3600, 2)
            self.heures_sup = max(self.heures_travaillees - 8, 0)

        # Détermination du mois de paie
        if not self.mois_paie:
            if self.salarie.type_contrat == "CDI":
                # paie le 28 du mois en cours
                self.mois_paie = date(self.date.year, self.date.month, 28)
            else:
                # vacataires : paie le 28 du mois suivant
                next_month = self.date.replace(day=28) + timedelta(days=30)
                self.mois_paie = date(next_month.year, next_month.month, 28)

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.salarie} - {self.date} : {self.heures_travaillees}h (Paie {self.mois_paie})"

