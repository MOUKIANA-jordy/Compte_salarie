from django.contrib import admin
from .models import Salarie

@admin.register(Salarie)
class SalarieAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "prenom",
        "nom",
        "matricule",
        "email",
        "poste",
        "etablissement",
        "type_contrat",
        "role",
        "date_debut_contrat",
        "date_fin_contrat",
    )

    list_filter = (
        "type_contrat",
        "role",
        "etablissement",
    )

    search_fields = (
        "prenom",
        "nom",
        "matricule",
        "email",
        "poste",
    )

    ordering = ("nom", "prenom")

    # Affichage lisible du rôle
    def role_affichage(self, obj):
        return obj.get_role_display()
    role_affichage.short_description = "Rôle"

    # Affichage lisible du type de contrat
    def contrat_affichage(self, obj):
        return obj.get_type_contrat_display()
    contrat_affichage.short_description = "Type de contrat"
