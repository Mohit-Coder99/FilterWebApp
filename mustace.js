noseX = 0;
noseY = 0;

function preload(){
     clown_nose = loadImage('https://i.postimg.cc/yNNrQ3NH/image.png');
}

function setup(){
     canvas = createCanvas(400, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(400,300);
     video.hide();

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function modelLoaded(){
     console.log("PoseNet is Initialized!");
}

function gotPoses(results){

     if(results.length > 0){

          console.log(results);
          console.log("nose X = " + results[0].pose.nose.x);
          console.log("nose Y = " + results[0].pose.nose.y);
 
          noseX = results[0].pose.nose.x-45;
          noseY = results[0].pose.nose.y-15;

     }
}

function draw(){
     image(video, 0, 0, 400, 300);
     image(clown_nose, noseX, noseY, 80, 80);

}

function take_snapshot(){
     save('myfilterimage.png');
}