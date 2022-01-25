import csv
import os

from cgitb import html, text
from operator import delitem, index
from posixpath import dirname
from tkinter import Listbox
from bs4 import BeautifulSoup
import requests


def get_html(url: str, file_name: str):
    """ Скачивает HTML по URL и сохраняет в file_name
    """
    response = requests.get(url = url)
    with open(file_name, "w+") as file:
        file.writelines(response.text)


def get_answer(file_name: str, theme: str, index: int = 1)->int:
    """ Сохраняет вопрос и ответ в папку темы
        Возвращает индекс файла на котором закончил
        """
    with open(file_name, "r") as file:
        html = file.read()
        soup = BeautifulSoup(html, "lxml")
        all = soup.find_all("div", class_="prob_maindiv")
        
        for taskanswer in all:
            if not taskanswer:
                print('Task is not found')
                continue

            exersice = taskanswer.find('p', class_ = 'left_margin')
            answer = taskanswer.find('div', class_ = 'answer')
            task_file_name: str = './Темы/' + theme + '/' + 'Задача_' + str(index) + '/' + 'Задание_' + str(index) + '.html'
            answer_file_name: str = './Темы/' + theme + '/' + 'Задача_' + str(index) + '/' + 'Ответ_' + str(index) + '.html'
            list_of_dirs: list = list()
            mypath = "./Темы/"
            for dirname in os.listdir(mypath):
                os.mkdir(f'Задача_{index}')
                save_file(file_name = task_file_name,content = exersice)
                save_file(file_name = answer_file_name,content = answer)
            index = index + 1
        return index

def load_urls():
    with open('urls.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        return list(reader)


def save_file(file_name, content): 
    with open(file_name, 'w') as file:
        file.write(str(content)) 


def main():
    files: list = load_urls()
    current_theme_index: int = None
    previous_theme_name: str = None
    for file in files:
        temp_filename = "temp_001.html"
        print('1.Скачиваем HTML по URL: {}'.format(file['url']))
        get_html(url= file['url'], file_name= temp_filename)
        print('HTML сохранен!')    
        print('2. Обрабатываю файл: ' + temp_filename)
        
        if previous_theme_name == file['theme']:
            current_theme_index = get_answer(
                file_name= temp_filename, theme= file['theme'], index= current_theme_index + 1
            )      
        else:
            current_theme_index = get_answer(
                file_name= temp_filename, theme= file['theme']
            )
        previous_theme_name = file['theme']
        
        print(f'Файл обработан!  Добавлено {current_theme_index} задач')
        os.remove(temp_filename)
        print('*'*20)


if __name__ == "__main__":
    # get_answer()
    # load_urls()
    main()