# zappy
To run zappy app:<br/>
Using docker compose:<br/>
	Run the following commands in the folder that contains backend and front end apps:<br/>
	> sudo docker-compose build<br/>
	// It should run docker-compose.yaml file<br/>
	//Please make sure ports 4200, 3010, 27017 are not used<br/>
	
Run without docker:<br/>
	In the config file, change database URL to be like the following but you Nodejs and MongoDB must be installed:<br/>
	mongodb://localhost:27017/zappy<br/>
	Then run every app individually:<br/>
		zappy: npm start<br/>
		zappy-front: npm start<br/>
	Then, go to localhost:4200 to view tweets<br/>
Remember, you can change twitter account in the config.js file<br/>
