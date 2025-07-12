from django.db import models

class Book(models.Model):
    title=models.CharField(max_length=300)
    author=models.CharField(max_length=100)
    price=models.IntegerField()
    published_date=models.DateField()
    
    def __str__(self):
        return self.title