# blogApp
Blogapp using Reactjs,Java and SQL

#How to push a project into gut hub

git -v // verify the git was downloaded in the system in commandPrompt

create a Github account

After creating accout Create a New respository

# Run the below commands in VS code terminal inside project directory one by one

git config --global user.email "Your_Email"

git config --global user.name "Your_Name"

git init

git remote add origin https://github.com/your-username/your-repo.git // https is the url og your created Respotory

git add .

git commit -m "Your commit message"

git push -u origin main

# incase if you face any errors like below try the below commands 

Reolve any merge conflicts

git pull origin main // and try pushing the code

# Error 2

C:\Users\10828446\blogapp> git pull origin main   
From https://github.com/vinnu239/blogApp
 * branch            main       -> FETCH_HEAD
fatal: refusing to merge unrelated histories

git pull origin main --allow-unrelated-histories



