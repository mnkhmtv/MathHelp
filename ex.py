from cgitb import html, text
import re
from bs4 import BeautifulSoup
import requests
import os



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

        for task in all:
            if not task:
                print('Task is not found')
                continue
            a = task.find('div', class_="Link Link_wrap Link_pseudo ConstructorForm-TopicName ConstructorForm-TopicName_type_default Link_pseudoBlack")
            
            if a:

                b = a.find('u', class_ = 'Link-U Link_wrap-U Link_pseudo-U Link_pseudoBlack-U' )
                #save_file(file_name = b.text + '.html', content = a)

                os.mkdir(b.text)
                          
                for subtopic in task:
                    if not subtopic:
                        print('Subtopic is not found') 
                        continue

                    c = subtopic.find('div', class_ = 'ConstructorForm-TopicSubs')     

                    if c:

                        c = task.find('a', class_ = 'Link Link_black')
                        print(c)






def save_file(file_name, content): 

    with open(file_name, 'w') as file:

        file.write(str(content)) 



if __name__ == "__main__":
    get_answer()
