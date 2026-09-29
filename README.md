# baseball_roster_websiteTest
Following this tutorial: https://www.youtube.com/watch?v=ApF5MHh3GUI&amp;list=PL9wJZ0yah4GHhmD7WBlIMX44sG9i-qwtu  To learn more about how to make a Front/Back-end work together.


## Packages needed:
Install Node.js: https://nodejs.org/en/download/current

## Activating virtual environment
Run following lines of code to open a virtual enviornment:

``python3 -m venv venv``

``source venv/bin/activate``

After activating you may begin installing packages:

``pip install flash``

``pip install requests``

``pip install beautifulsoup4``

To run site run following command: ``flask run -p 8080``

## Now you may begin to create API

We will be utilizing flask: https://flask.palletsprojects.com/en/stable/quickstart/#a-minimal-application

## Create a REACT app
to create a REACT app run the following in terminal (For front end use; thus, be in frontend directory):
``npx create-react-app app``
 
 To run REACT app run following in terminal (first be in "/app" directory created from step above):
 ``npm start``

 ## Front end CSS styling
 For the purposes of the video tutorial we install Semantic UI through this site: https://react.semantic-ui.com/usage
 (FYI: Since this uses older version of react, I had to search up what the errors were for installing the semantic-ui-react, thus found out I had to install it using the following in /frontend/:
 
 ``npm install semantic-ui-react semantic-ui-css --legacy-peer-deps``
 
 ``npm install react@18 react-dom@18``)

 We do this by running following code in /frontend/ directory: ``https://react.semantic-ui.com/usage``
 
 And also by adding this following line to our app.js file: ``import 'semantic-ui-css/semantic.min.css'``

 In shorthand this helps create a basic layout for us so we don't have to learn/mess around too much with CSS or HTML code. (Side note, I already know how to mess with these, may come back and edit the current code to mess around with how the front end looks like).

After this we go back to the website for semantic UI and go to the modules tab and pick one. For this case we will be using the dropdown module. 
  
<!-- React-semantics kept giving an error. Thus, instead of following video tutorial for inserting a dropdown through https://react.semantic-ui.com/usage, we instead used the following site: https://www.npmjs.com/package/react-dropdown

From here we first install react-dropdown (which is what we will use for selecting the team): ``npm install react-dropdown``

Also include the following code in frontend/app/App.js:

``import Dropdown from 'react-dropdown'``

``import 'react-dropdown/style.css'``

Still used https://react.semantic-ui.com/usage for Button functionality. -->
<!-- And next we just used one of the templates to on the site to create the dropdown.

Next to install button run:

``npm install react-dropdown-button --save`` -->

## Front End reaching into Back End

After including the dropdown as well as Button modules. We now will look into combining the Front End and Back end. We will do this through Axios. (https://axios.rest/pages/getting-started/first-steps.html)

First install axios (not sure if matter but did this in /frontend/app). This will allow us to create a async scenario:

``npm install axios``


Then to allow your data to talk with each other fom different sites (backend -> frontend) by using flask-cors. Download with following (ran in /backend while in venv):

``pip install flask-cors``