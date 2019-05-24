# Импорт необходимых модулей
import csv,sys,os
from django.core import serializers

csv.field_size_limit(sys.maxsize)

# Указываем путь до папки проекта Django в котором находится файл settings.py
project_dir = r"C:\Users\60068508\Documents\miem\mkr\map_prod\map_prod"

# Добавляем в переменную sys.path путь до проекта Django
sys.path.append(project_dir)

# Определяем переменную с настройками Django
os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

# Импортируем модуль Django
import django

# Загружаем настройки Django
django.setup()

# Импортируем модель Post
from map.models import Place
from map.models import Goods
# from map.models import Manufacturer
# from map.models import CorrectPlace
import os.path

objs = Goods.objects.all()
for i in objs:

    if i.num in [662]:
        arr = ['.png', '.jpg', '.jpeg']
        path = i.name.replace('"', '').replace("'", '').replace("«", '').replace('»', '')
        for r in arr:
            file_path = "media/imgs/" + path + r
            if os.path.exists(file_path):
                i.img = "imgs/" + path + r
                i.save()
                print(i.img)

    # i.img = ""
    # i.save()
    # print(i.img)
