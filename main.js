leftwristx=0
rightwristx=0
difference=0
nosex=0
nosey=0

function setup(){
    canvas=createCanvas(550,500)
    canvas.position(560,150)

    video=createCapture(VIDEO)
    video.size(550,500)
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
console.log("model is loaded")
}

function gotposes(result){
if(result.length>0){
console.log(result)
nosex=result[0].pose.nose.x
nosey=result[0].pose.nose.y
console.log("nosex ="+nosex+",nosey ="+nosey)

leftwristx=result[0].pose.leftWrist.x
rightwristx=result[0].pose.rightWrist.x
console.log("leftwristx ="+leftwristx+",rightwristx ="+rightwristx)
difference=Math.floor(leftwristx-rightwristx)
console.log("difference ="+difference)
}
}

function draw(){
    background('#e0c91b')
    square(nosex,nosey,difference)
    fill('#12e6e6')
    stroke('#df12e6')
    document.getElementById("result").innerHTML="Width and height of a square is "+difference+"px";
}