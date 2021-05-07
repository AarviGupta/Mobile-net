Webcam.set({
    width:310,height:300,image_format:'png',png_quality:90,constraints:{
        facingMode:"environment"
    }
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

//to take a snapshot
function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML='<img id="captured_image" src="'+ data_uri +'">';
    });
}
//check the version of ML5
console.log("ml5 version: ",ml5.version);

//to upload the model
classifier=ml5.imageClassifier('MobileNet',modelloaded);

function modelloaded(){
    console.log("modelloaded");
}

//check function
function identify_image(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}

//to fetch the results
function gotresult(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
}
}