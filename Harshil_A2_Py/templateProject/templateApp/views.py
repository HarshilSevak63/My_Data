from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def demo_view(request):
    context={
        'name':'Jhon',
        'age':50,
        'numbers':[1,2,3,4,5],
        'show_numbers':True,
    }
    return render(request,'demotemplate.html',context)