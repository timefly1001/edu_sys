import json
from django.views.decorators.csrf import csrf_exempt
from . import models
from django.http import JsonResponse


def login(request):
    # print(request.headers)
    data = json.loads(request.body.decode('utf-8'))
    username = data.get('username')
    password = data.get('password')
    # username = request.POST.get("username")
    # password = request.POST.get("password")
    # print(username)
    # print(password)
    try:
        user = models.User.objects.get(username=username)
    except:
        data = {'flag': 'no', "msg": "no to user"}
        return JsonResponse({'request': data})
    if password == user.password:
        data_flag = "yes"
        data_msg = "登陆成功"
        print("登陆成功")
    else:
        data_flag = "no"
        data_msg = "密码输入错误"
    data = {'flag': data_flag, 'msg': data_msg}

    return JsonResponse({'request': data, 'token': '111'})


def get_info(request):
    # username = request.GET.get("username")
    return JsonResponse({'name': 'admin', 'avatar': 'avatar.png'})


def logout(request):
    return JsonResponse({'aaa': 'aaa'})
