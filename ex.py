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
            all_things = task.find('div', class_="Link Link_wrap Link_pseudo ConstructorForm-TopicName ConstructorForm-TopicName_type_default Link_pseudoBlack")
            
            if all_things:

                name_of_theme = all_things.find('u', class_ = 'Link-U Link_wrap-U Link_pseudo-U Link_pseudoBlack-U' )
                #save_file(file_name = b.text + '.html', content = all_thing)

                #os.mkdir(b.text)
                          
                for link_in_podtheme in task:
                    if not link_in_podtheme:
                        print('Link is not found') 
                        continue

                    podthemes = soup.find('div', class_ = 'ConstructorForm-TopicSubs')  
                    
                    link = task.find('a', class_ = 'Link Link_black')
                    print(link) 

                    if podthemes:

                        mypath = "./Темы/"
                       # for theme in os.listdir(mypath):

                       #     c = task.find('a', class_ = 'Link Link_black')
                        #    print(c)
                            




def save_file(file_name, content): 

    with open(file_name, 'w') as file:

        file.write(str(content)) 



if __name__ == "__main__":
    get_answer()
