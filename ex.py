from cgitb import html
from bs4 import BeautifulSoup
import requests


URL = "https://math-ege.sdamgia.ru/"
#XPATH = "#body918442 > p"

def get_html():
    response = requests.get(url=URL)
    with open("page.html", "w+") as file:
        file.writelines(response.text)



def get_answer():
    with open("page.html", "r") as file:
        html = file.read()
        soup = BeautifulSoup(html, "lxml")
        all = soup.find_all("div", class_="ConstructorForm-Row")
        global task
        for task in all:
            
            task = task.find('div', class_="Link Link_wrap Link_pseudo ConstructorForm-TopicName ConstructorForm-TopicName_type_default Link_pseudoBlack")
            print(task)

task = str(get_answer)


def parse(): 

    with open('task.txt', 'w') as file:
        file.writelines(task)

if __name__ == "__main__":
    parse()
