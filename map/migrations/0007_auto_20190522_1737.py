# Generated by Django 2.2 on 2019-05-22 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0006_goods_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='imgs/'),
        ),
    ]