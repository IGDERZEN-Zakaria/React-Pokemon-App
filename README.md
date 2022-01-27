# URL

https://zack-s-pokedex.web.app/

# React-Pokemon-App

Install dependencies 
# npm install

Run json-server 
# json-server --watch src/models/db.json --port=3002
Or
# npm run start:api

Run Server
# npm run start

build project
# npm run build

test the build
# serve -s build


Firebase steps : 
# npm install -g firebase-tools
# firebase --version
# firebase login

$$    Allow Firebase to collect CLI usage and error reporting information? Yes
$$    ? Paste authorization code here:  { Authorization code  }

# firebase init

$$    ? Are you ready to proceed? Yes
$$    ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. 
        Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
$$    ? Please select an option: Use an existing project
$$    ? Select a default Firebase project for this directory:  { Project name  }
$$    ? What do you want to use as your public directory? build
$$    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes$
$$    ? Set up automatic builds and deploys with GitHub? No
$$    ? File build/index.html already exists. Overwrite? No

# firebase deploy

