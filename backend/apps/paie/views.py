from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Paie
from .serializers import PaieSerializer
from apps.users.permissions import IsOwnerOrRH

class PaieViewSet(viewsets.ModelViewSet):
    queryset = Paie.objects.all()
    serializer_class = PaieSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrRH]

    def get_queryset(self):
        user = self.request.user
        if user.role in ["RH", "ADMIN"]:
            return Paie.objects.all()
        return Paie.objects.filter(salarie=user)
