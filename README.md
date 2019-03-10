# zappy
To run zappy app:
Using docker compose:
	Run the following commands in the folder that contains backend and front end apps:
	> sudo docker-compose build
	// It should run docker-compose.yaml file
	//Please make sure ports 4200, 3010, 27017 are not used
	
Run without docker:
	In the config file, change database URL to be like the following but you Nodejs and MongoDB must be installed:
	mongodb://localhost:27017/zappy
	Then run every app individually:
		zappy: npm start
		zappy-front: npm start
	Then, go to localhost:4200 to view tweets
Remember, you can change twitter account in the config.js file
