from cgitb import html, text
from posixpath import dirname
import re
from bs4 import BeautifulSoup
import requests
import os

URL = 'https://ege.sdamgia.ru/test?id=43210295&nt=True&pub=False&print=true'

def get_html():
    response = requests.get(url=URL)
    with open("test_3.html", "w+") as file:
        file.writelines(response.text)
        print('1')

def get_answer():
    with open("test_3.html", "r") as file:
        html = file.read()
        soup = BeautifulSoup(html, "lxml")
        all = soup.find_all("div", class_="prob_maindiv")
        i = 1
        for taskanswer in all:
            if not taskanswer:
                print('Task is not found')
                continue

            a = taskanswer.find('p', class_ = 'left_margin')
            c = taskanswer.find('div', class_ = 'answer')
            d = a, c
            #print(d)
            
            save_file(file_name = str(i) + '.html',content = d)
            i = i + 1
            



def save_file(file_name, content): 

    with open(file_name, 'w') as file:

        file.write(str(content)) 

if __name__ == "__main__":
    get_answer()
