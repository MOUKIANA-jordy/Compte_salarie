from django.contrib import admin
from .models import Planning

@admin.register(Planning)
class PlanningAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "salarie",
        "date",
        "type_affichage",
        "heure_debut",
        "heure_fin",
        "commentaire",
    )

    list_filter = (
        "type_journee",
        "date",
    )

    search_fields = (
        "salarie__prenom",
        "salarie__nom",
    )

    ordering = ("-date",)

    # Affichage lisible du type de journée
    def type_affichage(self, obj):
        return obj.get_type_journee_display()
    type_affichage.short_description = "Type de journée"
