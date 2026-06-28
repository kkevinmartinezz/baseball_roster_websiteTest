from flask import Flask
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"

@app.route("/roster/<team>")
def get_roster(team):
    url = f"https://www.mlb.com/{team}/roster/40-man"
    print(url)
    
    response = requests.get(url)
    print(response)
    
    if response.status_code == 200: #TODO: NEED to fix, MLB changed layout of website a bit. This code used to work on older version
        soup = BeautifulSoup(response.content, 'html.parser')
        fourty_man_roster = soup.find('div', 'player').find_all('table', 'roster_table')
        team_roster = []
        print(team)
        print('~~~~~~~~~~~~~~~~~')
        for roster in fourty_man_roster:
            players = roster.find('tbody').find_all('tr')
            for player in players:
                found_player = players.find('td', 'info').find('a')
                team_roster.append(found_player.string)
        return f"<h1>{team_roster}</h1>"
            
