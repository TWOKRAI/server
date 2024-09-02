from django.shortcuts import render

def index(request):
    settings = {
        'drink1': 100,
        'drink2': 200,
        'status': True,
    }
    return render(request, 'index.html', {'settings': settings})

def settings(request):
    settings = {
        'todo1': True,
        'todo2': False,
    }
    return render(request, 'settings.html', {'settings': settings})
