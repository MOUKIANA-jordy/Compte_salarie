from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Pointage
from .serializers import PointageSerializer
from apps.users.permissions import IsOwnerOrRH

class PointageViewSet(viewsets.ModelViewSet):
    queryset = Pointage.objects.all()
    serializer_class = PointageSerializer
    permission_classes = [IsAuthenticated, IsOwnerOrRH]

    def get_queryset(self):
        user = self.request.user
        if user.role in ["RH", "ADMIN"]:
            return Pointage.objects.all()
        return Pointage.objects.filter(salarie=user)

