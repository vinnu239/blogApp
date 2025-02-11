# blogApp
Blogapp using Reactjs,Java and SQL

#Create new Aws secret access keys inside IAM and this keys contain ID and keys which helps to create Secree keys in the Github for specific repo

navigate to IAM user 
slect the IAM yser(if yiu want to use same IAM user if already exists) 
click on the that IAM user and naviga te security details 
Under "Access keys", click on "Create access key".
Choose the appropriate option for how you will use the access key (e.g., Command Line Interface (CLI)).
Optionally, add a tag to help identify the key.
Click "Next" and then "Create access key".

Path to create Secre acces keys which helps for .yml file
setting --> secreate and variables --> actions --> new repo secret   ( crete 2 keys with Access ID and Access key)

// Hosting an application

We can host an application using multiple ways here we are using AWS amplify( we can use S3 and cloudfront as well for that one check mfe repo)

After you are pushing your code to github 
Go to Aws and search for Amplify
select the respective storage for repo for our case we will go with gitHUb
choose the repo which you want to deploy
and click on next 
after sucessful completion its starts deployement provides domain name where our can visible




