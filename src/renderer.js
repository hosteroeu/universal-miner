var Docker = require('dockerode');

var docker = new Docker({
  socketPath: '/var/run/docker.sock'
});

docker.listContainers(function(err, containers) {
  console.log(err);
  document.getElementById('list').innerHTML = containers[0].Image;
});
