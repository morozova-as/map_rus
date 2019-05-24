# Импорт необходимых модулей
import csv,sys,os

import sys
import csv

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
from map.models import Manufacturer
from map.models import CorrectPlace

# Считываем CSV-файл
data = csv.reader(open(r"C:\Users\60068508\Documents\miem\mkr\map_prod\result_bd.csv", encoding='utf-8'), delimiter=',')

for row in data:
    if row[1] != 'name':
        g = Goods()
        g.num = row[0]
        g.name = row[1]
        g.origin_place = row[2]
        g.new_place = row[3]
        g.rh_name = row[4]
        g.specification = row[5]
        g.rh_address = row[6]
        g.rh_country = row[7]
        g.actual = row[9]
        g.url = row[10]
        g.save()
