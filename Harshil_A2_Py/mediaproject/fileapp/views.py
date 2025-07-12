from django.contrib import messages
from django.shortcuts import redirect, render

from mediaproject.fileapp.forms import FileUploadForm

def fileupload(request):
    if request.method=='POST':
        form=FileUploadForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request,'File uploaded successfully')
            return redirect('fileupload')
    else:
        form=FileUploadForm()
    return render(request,'upload.html',{'form':form})
