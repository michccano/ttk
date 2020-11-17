<?php
    error_reporting("E_ALL");
    header("Content-Type: application/json");

    include __DIR__."/vendor/autoload.php";
    
    $api= new \Sovit\TikTok\Api(array(/* config array*/));

    if($_GET["a"]=="sh"){
    
    $result= $api->getChallengeFeed($_GET["id"]);
   
   // echo json_encode($result,JSON_PRETTY_PRINT);

    $finaltags = array();
    $finalresults = array();

    for($i=0; $i<count($result->items); $i++){
      
      $htags = explode(" ",$result->items[$i]->desc);
      foreach($htags as $ht){
      if (strpos($ht, "bitcoin") !== false) {

        if(!in_array($ht,$finaltags)){
       array_push($finaltags,$ht);
          array_push($finalresults,array("title"=>$ht,"desc"=>"","viewsCount"=>$result->items[$i]->stats->playCount));
      }
          
      }


      //https://mega.nz/file/fI5lWaCZ#uVsekfcTbz9howktwNLpUn_lmGO14GKU7twaVBxlhpk
  }


    }

    echo json_encode($finalresults);

    exit;

}



if($_GET["a"]=="su"){
    
  $result= $api->getChallengeFeed($_GET["id"]);
   
  //echo json_encode($result,JSON_PRETTY_PRINT);

   $finaltags = array();
   $finalresults = array();
   $result1 = array();
   
   for($i=0; $i<count($result->items); $i++){
     
     $htags = explode(" ",$result->items[$i]->desc);

     foreach($htags as $ht){

     if (strpos($ht, "bitcoin") !== false) {

       if(!in_array($result->items[$i]->author->uniqueId,$finaltags)){
        
        array_push($finaltags,$result->items[$i]->author->uniqueId);

        $result1 = $api->getUser($result->items[$i]->author->uniqueId);
      
        array_push($finalresults,array("uniqueId"=>$result->items[$i]->author->uniqueId,"followingCount"=>$result1->stats->followingCount,"followerCount"=>$result1->stats->followerCount,"viewsCount"=>$result1->stats->heartCount));
     

     
      }
         
     }


     //https://mega.nz/file/fI5lWaCZ#uVsekfcTbz9howktwNLpUn_lmGO14GKU7twaVBxlhpk
 }


   }

   echo json_encode($finalresults);
   exit;
  

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

    