<?php
  error_reporting("E_ALL");
    header("Content-Type: application/json");
    include __DIR__."/vendor/autoload.php";
    
    $api= new \Sovit\TikTok\Api(array(/* config array*/));

    if($_GET["a"]=="sh"){
    
  $result= $api->getChallengeFeed($_GET["id"]);
  $data = json_encode($result,JSON_PRETTY_PRINT);
  echo $data;
}


    if($_POST["a"]=="get"){
        
    //$challenge=$api->getChallenge("foryourpage");
    $result= $api->getChallengeFeed($_POST["kw"]);
  //  echo json_encode($result,JSON_PRETTY_PRINT);
 
    $results = array();

   
    for($i=0; $i<count($result->items); $i++){
     
    array_push($results,array("videoId"=>$result->items[$i]->id,"id"=>$result->items[$i]->author->uniqueId,"cover"=>$result->items[$i]->video->cover));
    }


    echo json_encode($results,JSON_PRETTY_PRINT);
  }

else{

$result = $api->getVideoByUrl("https://www.tiktok.com/@sublimevr/video/6662671231927454981");
$downloader=new \Sovit\TikTok\Download();
$downloader->url($result->items[0]->video->playAddr,"video-file",'mp4');
  
  echo $result->items[0]->video->playAddr;

  }



    ?>

    