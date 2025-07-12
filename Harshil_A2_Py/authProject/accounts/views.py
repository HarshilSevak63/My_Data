# from django.shortcuts import render,redirect
# from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth import login,logout,authenticate
# from django.contrib import messages

# def home(request):
#     return render(request,'home.html')

# def signup(request):
#     if request.method == 'POST':
#         form=UserCreationForm(request.POST)
#         if form.is_valid():
#             user=form.save()
#             login(request,user)
#             messages.success(request,'Signup successfull')
#             return redirect('login')
#     else:
#         form=UserCreationForm()
#     return render(request,'signup.html',{'form':form})

# def user_login(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         print(f"Trying to authenticate user: {username}")  # Debugging

#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             messages.success(request, 'Login successful')
#             return redirect('home')
#         else:
#             messages.error(request, 'Invalid Credentials')
#             print("Authentication failed")  # Debugging
#     return render(request, 'login.html')

#     if request.method=='POST':
#         username=request.POST['username']
#         password=request.POST['password']
#         user=authenticate(request,username=username,password=password)
#         if user is not None:
#             login(request,user)
#             messages.success(request,'login successfull')
#             return redirect('home')
#         else:
#             messages.error(request,'Invalid Credentials')
#     return render(request,'login.html')

# def user_logout(request):
#     logout(request)
#     # return redirect('login')
#     return render(request,'logout.html')\


from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages

def home(request):
    return render(request, 'home.html')

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Signup successful')
            return redirect('home')  # Redirect to home instead of login
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print("POST data:", request.POST)

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'Login successful')
            return redirect('home')
        else:
            messages.error(request, 'Invalid Credentials')
            return redirect('login')
            print("Authentication failed")
    return render(request, 'login.html')

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'Login successful')
            return redirect('home')
        else:
            messages.error(request, 'Invalid Credentials')
    return render(request, 'login.html')

def user_logout(request):
    logout(request)
    return redirect('login')  # Or: render(request, 'logout.html')
