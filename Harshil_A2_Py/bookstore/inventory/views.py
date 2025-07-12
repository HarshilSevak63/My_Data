from django.shortcuts import render,get_object_or_404

from .models import Book

def book_list(request):
    query= request.GET.get("q")
    if query:
        books=Book.objects.filter(title__icontains=query)
    else:
        books=Book.objects.all()
    return render(request,'book_list.html',{'books':books,'query':query})

def book_detail(request,pk):
    book = get_object_or_404(Book,pk=pk)
    return render(request,'book_detail.html',{'book':book})
