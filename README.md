To run zappy app:<br/>
Using docker compose:<br/>
	<ul>
	<li>Run the following commands in the folder that contains backend and front end apps:
	 sudo docker-compose build</li>
	</ul>
	
	// It should run docker-compose.yaml file<br/>
	//Please make sure ports 4200, 3010, 27017 are not used<br/><br/>
	
Run without docker:<br/>
<ul>
  

	<li>In the config file, change database URL to be like the following but you Nodejs and MongoDB must be installed:
	mongodb://localhost:27017/zappy</li>
  <li>Then run every app individually:</li>
	<li>	zappy: npm start</li>
		<li>zappy-front: npm start</li>
	<li>Then, go to localhost:4200 to view tweets</li>
  </ul>
Remember, you can change twitter account in the config.js file<br/>
