from bs4 import BeautifulSoup
import requests


URL = "https://ege.sdamgia.ru/test?theme=73&print=true"
XPATH = "#body918442 > p"


def get_html():
    response = requests.get(url=URL)
    with open("filename.html", "w+") as file:
        file.writelines(response.text)



def parse():
    with open("filename.html", "r") as file:
        html = file.read()
        soup = BeautifulSoup(html, "lxml")
        all = soup.find_all("div", class_="prob_maindiv")
        for task in all:
            p = task.find("p")

        print(p)


if __name__ == "__main__":
    parse()