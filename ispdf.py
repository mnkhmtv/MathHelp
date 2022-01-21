from cgitb import html, text
from posixpath import dirname
import re
from bs4 import BeautifulSoup
import requests
import os

URL = 'https://ege.sdamgia.ru/test?id=43128379&nt=True&pub=False&print=true'

def get_html():
    response = requests.get(url=URL)
    with open("test.html", "w+") as file:
        file.writelines(response.text)
        print('1')

def get_answer():
    with open("test.html", "r") as file:
        html = file.read()
        soup = BeautifulSoup(html, "lxml")
        all = soup.find_all("div", class_="nobreak")
        for task in all:
            if not task:
                print('Task is not found')
                continue

            a = task.find('p', class_ = 'left_margin')
            #print(a)
            
            for name in a:
                b = a.split('.')
                save_file(file_name = b[0] + '.html',content = a)
                os.mkdir(a.text)



def save_file(file_name, content): 

    with open(file_name, 'w') as file:

        file.write(str(content)) 

if __name__ == "__main__":
    get_answer()
