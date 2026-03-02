from rest_framework import viewsets, permissions
from .models import Salarie
from .serializers import SalarieSerializer
from .permissions import IsRHOrAdmin


class SalarieViewSet(viewsets.ModelViewSet):
    serializer_class = SalarieSerializer

    def get_queryset(self):
        user = self.request.user

        # RH ou ADMIN → accès à tous les salariés
        if user.salarie.role in ["RH", "ADMIN"]:
            return Salarie.objects.all()

        # Sinon → accès uniquement à son propre profil
        return Salarie.objects.filter(user=user)

    def get_permissions(self):
        if self.action in ["list", "destroy"]:
            permission_classes = [IsRHOrAdmin]
        else:
            permission_classes = [permissions.IsAuthenticated]

        return [permission() for permission in permission_classes]
