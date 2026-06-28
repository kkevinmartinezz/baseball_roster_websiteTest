import requests
from bs4 import BeautifulSoup

def get_roster(team):
    url = f"https://www.mlb.com/{team}/roster/40-man"
    # url = f"https://www.mlb.com/yankees/roster/40-man"
    print(url)
    
    response = requests.get(url)
    print(response)
    
    if response.status_code == 200: #TODO: NEED to fix, MLB changed layout of website a bit. This code used to work on older version
        soup = BeautifulSoup(response.content, 'html.parser')
        fourty_man_roster = soup.find_all('div', 'players').find('info', )
        print(fourty_man_roster)
        

def main():
    get_roster("yankees")
    
if __name__ == "__main__":
    main()