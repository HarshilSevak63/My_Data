from django.shortcuts import redirect, render
from .form import RegistartionForm

def register(request):
    if request.method=='POST':
        form=RegistartionForm(request.POST)
        if form.is_valid():
            return redirect('register_success')
    else:
        form = RegistartionForm()
    return render(request,'register.html',{'form':form})

def register_success(request):
    return render(request,'register_success.html')