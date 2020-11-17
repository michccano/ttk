<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8" />
        <title>Tiktok Magic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- third party css -->
        <link href="assets/css/vendor/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
        <!-- third party css end -->

        <!-- App css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />
        <link rel="stylesheet" href="assets/js/bootstrap-tagsinput-master/dist/tagsinput.css">
        <style>
 input[type=range] {
-webkit-appearance: none;
margin: 20px 0;
width: 100%;
}
input[type=range]:focus {
outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
width: 100%;
height: 4px;
cursor: pointer;
animate: 0.2s;
background: #03a9f4;
border-radius: 25px;
}
input[type=range]::-webkit-slider-thumb {
height: 20px;
width: 20px;
border-radius: 50%;
background: #fff;
box-shadow: 0 0 4px 0 rgba(0,0,0, 1);
cursor: pointer;
-webkit-appearance: none;
margin-top: -8px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
background: #03a9f4;
}
.range-wrap{
width: 100%;
position: relative;
}
.range-value{
position: absolute;
top: -50%;
}
.range-value span{
width: 30px;
height: 24px;
line-height: 24px;
text-align: center;
background: #03a9f4;
color: #fff;
font-size: 12px;
display: block;
position: absolute;
left: 50%;
transform: translate(-50%, 0);
border-radius: 6px;
}
.range-value span:before{
content: "";
position: absolute;
width: 0;
height: 0;
border-top: 10px solid #03a9f4;
border-left: 5px solid transparent;
border-right: 5px solid transparent;
top: 100%;
left: 50%;
margin-left: -5px;
margin-top: -1px;
}
</style>

    </head>

    <body class="loading" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
        <!-- Begin page -->
        <div class="wrapper">
            <!-- ========== Left Sidebar Start ========== -->
            <div class="left-side-menu">
    
                <!-- LOGO -->
                <a href="index.html" class="logo text-center logo-light">
                    <span class="logo-lg">
                        <img src="assets/images/logo.png" alt="" height="16">
                    </span>
                    <span class="logo-sm">
                        <img src="assets/images/logo_sm.png" alt="" height="16">
                    </span>
                </a>

                <!-- LOGO -->
                <a href="index.html" class="logo text-center logo-dark">
                    <span class="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height="16">
                    </span>
                    <span class="logo-sm">
                        <img src="assets/images/logo_sm_dark.png" alt="" height="16">
                    </span>
                </a>
    
                <?php include("sidebar.php");?>
            <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">
                    <!-- Topbar Start -->
                  <?php include("navbar.php");?>
                    <!-- end Topbar -->
                    
                    <!-- Start Content-->
                    <div class="container-fluid">

                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <form class="form-inline">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="text" class="form-control form-control-light" id="dash-daterange">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text bg-primary border-primary text-white">
                                                            <i class="mdi mdi-calendar-range font-13"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="javascript: void(0);" class="btn btn-primary ml-2">
                                                <i class="mdi mdi-autorenew"></i>
                                            </a>
                                        </form>
                                    </div>
                                    <h4 class="page-title">Create an automated campaign</h4>
                                </div>
                            </div>
                        </div>
                        <!-- end page title -->

                

                
                        <!-- end row -->

                        <div class="row">
                           
                        <div class="col-xl-4 col-lg-4">
                                <div class="card">
                                    <div class="card-body">

                 <div class="form-group mb-3">
      
        <select class="form-control" id="accountslist">
         
        </select>
    </div>

    
      
            <div class="form-group mb-3">
                <label for="example-select">Set Targeting</label>
                <select class="form-control" id="example-select">
                    <option>Target by users</option>
                    <option>Target by hashtags</option>
                    <option>Target by users and hashtags</option>
                   
                </select>
            </div>

            <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label" for="customCheck1">Import from saved hashtags</label>
                      </div>

                 <div class="form-group mb-3">
            
                <select  class="form-control" id="hashtagslist">
                   
                </select>
            </div>


            <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck2">
                    <label class="custom-control-label" for="customCheck2">Use own</label>
                      </div>

                 <div class="form-group mb-3">
                 <textarea class="form-control" id="example-textarea" rows="5"></textarea>
                
            </div>

            <div class="form-group mb-3">
            <button class="btn btn-primary" type="button" id="createcampaign">Create Campaign</button>
        </div>


                                        </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->


                            <div class="col-xl-8 col-lg-8">
                                <div class="card">
                                    <div class="card-body">
                                    <h4 class="header-title mt-5 mt-lg-0">Campaign Settings</h4>
                                    <p class="text-muted font-14">
                                    You can either adjust the speed of the tasks below as per your requirement or enable human behavior to use the built-in algorithm. When human emulated behavior is enabled, all the manual options would be greyed out.
                                                </p>



      <div class="form-group mb-3">
   <form class="form-inline">
    <div class="form-group ">
    <label for="example-range">Likes daily</label>
               
    </div>

    <div class="form-group mx-sm-3">
    <label for="example-range">1</label>
      
</div>


<div class="form-group">
   
    <div class="range-wrap">
    <div class="range-value" id="likesdailyV"></div>
<input id="likesdaily" class="custom-range"  type="range" min="0" max="1000" value="200" step="1">
</div>


</div>

<div class="form-group mx-sm-3">
    <label for="example-range">1000</label>
      
</div>




</form>
</div>

<div class="form-group mb-3">
             
<form class="form-inline">
                      
<div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck3">
                    <label class="custom-control-label" for="customCheck3">Like videos that have at least </label>
                      </div>
                      </form>
                      </div>   

                            
                             

      <div class="form-group mb-3">
   <form class="form-inline">
    <div class="form-group ">
    <label for="example-range" >Follows daily</label>
               
    </div>

    <div class="form-group mx-sm-3">
    <label for="example-range">1</label>
      
</div>


<div class="form-group">
<div class="range-wrap">
    <div class="range-value" id="followsdailyV"></div>
<input id="followsdaily" class="custom-range" type="range" min="0" max="1000" value="200" step="1">
</div>



</div>

<div class="form-group mx-sm-3">
    <label for="example-range">1000</label>
      
</div>


</form>
</div>

<div class="form-group mb-3">
             
<form class="form-inline">
                      
<div class="form-group mx-sm-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck4">
                    <label class="custom-control-label" for="customCheck4">Follow accounts that have at least </label>

                </div>
                <div class="form-group ">
               
    <input data-toggle="touchspin" style="width:50px;" id="followersalready" type="text" value="55">&nbsp;
    <label class="custom-control-label" for="customCheck2">followers already</label>
                    
</div>


                      </form>
                      </div>   



                      <div class="form-group mb-3">
   <form class="form-inline">
    <div class="form-group ">
    <label for="example-range">Unfollows daily</label>
               
    </div>

    <div class="form-group mx-sm-3">
    <label for="example-range">1</label>
      
</div>


<div class="form-group">
  
    <div class="range-wrap">
    <div class="range-value" id="unfollowsdailyV"></div>
<input id="unfollowsdaily" class="custom-range" name="ran"  type="range" min="0" max="1000" value="200" step="1">
</div>

</div>

<div class="form-group mx-sm-3">
    <label for="example-range">1000</label>
      
</div>


</form>
</div>



<div class="form-group mb-3">
             
<form class="form-inline">
                      
<div class="form-group mx-sm-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck8">
                    <label class="custom-control-label" for="customCheck8">Start unfollowing accounts with no interaction after </label>
                    
                
                </div>
                <div class="form-group ">
               
    <input data-toggle="touchspin" style="width:50px;" id="nointeraction" type="text" value="55">&nbsp;
    <label class="custom-control-label" for="">days</label>
                    
</div>


                      </form>
                      </div>   




<div class="form-group mb-3">
   <form class="form-inline">
    <div class="form-group ">
    <label for="example-range">Comments daily</label>
               
    </div>

    <div class="form-group mx-sm-3">
    <label for="example-range">1</label>
      
</div>


<div class="form-group">
<div class="range-wrap">
    <div class="range-value" id="commentsdailyV"></div>
<input id="commentsdaily" class="custom-range" name="ran"  type="range" min="0" max="1000" value="200" step="1">
</div>


</div>

<div class="form-group mx-sm-3">
    <label for="example-range">1000</label>
      
</div>


</form>
</div>



<div class="form-group mb-3">
  
    <label for="example-range">Comments to use</label>
               
    </div>


    <div class="form-group mb-3">
  
  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck5">
                    <label class="custom-control-label" for="customCheck5">Import from comments box</label>
                      </div>

</div>

    <div class="form-group mb-3">
      
      <select class="form-control" multiple id="commentslist">
         
      </select>
  </div>



  <div class="form-group mb-3">
  
  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck6">
                    <label class="custom-control-label" for="customCheck6">Use own</label>
                      </div>

</div>

    <div class="form-group mb-3">
      
    <textarea class="form-control" id="example-textarea" rows="5"></textarea>
                
  </div>



  <div class="form-group mb-3">
  
  <h4 class="header-title mt-5 mt-lg-0">Filters</h4>
             
  </div>

  
  <div class="form-group mb-3">
      <div class="row">
<div class="col-3">
<div class="form-group mb-3">
                <label for="example-select">Gender</label>
                <select class="form-control" id="example-select">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Both</option>
                    
                </select>
            </div>
</div>
<div class="col-3">
<div class="form-group mb-3">
                <label for="example-select">Account Age</label>
                <select class="form-control" id="example-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
</div>
<div class="col-3">
<div class="form-group mb-3">
                <label for="example-select">Post Type</label>
                <select class="form-control" id="example-select">
                    <option>Any</option>
                  
                </select>
            </div>
</div>
</div>
  </div>

  <div class="form-group mb-3">
      <center>OR</center>
</div>

<div class="form-group mb-3">
  
  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="emulatehuman">
                    <label class="custom-control-label" for="emulatehuman">Emulate human behavior</label>
                      </div>

</div>
                                        </div> <!-- end card-body-->


                                </div> <!-- end card-->
                            </div> <!-- end col-->
                     
                        </div>
                        <!-- end row -->









                    </div>
                    <!-- container -->

                </div>
                <!-- content -->


                <div id="standard-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h4 class="modal-title" id="standard-modalLabel">Save HashTags</h4>
                                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                            </div>
                                                            <div class="modal-body">
                                                            <div class="form-group mb-3">
                                                                <label for="simpleinput">Name</label>
                                                                <input type="text" id="hashtag_name" class="form-control">
                                                            </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                
                                                                <button type="button" id="SaveNow" class="btn btn-primary">Save</button>
                                                            </div>
                                                        </div><!-- /.modal-content -->
                                                    </div><!-- /.modal-dialog -->
                                                </div><!-- /.modal -->
            



                <!-- Footer Start -->
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <script>document.write(new Date().getFullYear())</script> © Hyper - Coderthemes.com
                            </div>
                            <div class="col-md-6">
                                <div class="text-md-right footer-links d-none d-md-block">
                                    <a href="javascript: void(0);">About</a>
                                    <a href="javascript: void(0);">Support</a>
                                    <a href="javascript: void(0);">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <!-- end Footer -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        <!-- Right Sidebar -->
        <div class="right-bar">

            <div class="rightbar-title">
                <a href="javascript:void(0);" class="right-bar-toggle float-right">
                    <i class="dripicons-cross noti-icon"></i>
                </a>
                <h5 class="m-0">Settings</h5>
            </div>

            <div class="rightbar-content h-100" data-simplebar>

                <div class="p-3">
                    <div class="alert alert-warning" role="alert">
                        <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                    </div>

                    <!-- Settings -->
                    <h5 class="mt-3">Color Scheme</h5>
                    <hr class="mt-1" />

                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="color-scheme-mode" value="light"
                            id="light-mode-check" checked />
                        <label class="custom-control-label" for="light-mode-check">Light Mode</label>
                    </div>

                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="color-scheme-mode" value="dark"
                            id="dark-mode-check" />
                        <label class="custom-control-label" for="dark-mode-check">Dark Mode</label>
                    </div>

                    <!-- Width -->
                    <h5 class="mt-4">Width</h5>
                    <hr class="mt-1" />
                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="width" value="fluid" id="fluid-check" checked />
                        <label class="custom-control-label" for="fluid-check">Fluid</label>
                    </div>
                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="width" value="boxed" id="boxed-check" />
                        <label class="custom-control-label" for="boxed-check">Boxed</label>
                    </div>

                    <!-- Left Sidebar-->
                    <h5 class="mt-4">Left Sidebar</h5>
                    <hr class="mt-1" />
                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="theme" value="default" id="default-check"
                            checked />
                        <label class="custom-control-label" for="default-check">Default</label>
                    </div>

                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="theme" value="light" id="light-check" />
                        <label class="custom-control-label" for="light-check">Light</label>
                    </div>

                    <div class="custom-control custom-switch mb-3">
                        <input type="radio" class="custom-control-input" name="theme" value="dark" id="dark-check" />
                        <label class="custom-control-label" for="dark-check">Dark</label>
                    </div>

                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="compact" value="fixed" id="fixed-check"
                            checked />
                        <label class="custom-control-label" for="fixed-check">Fixed</label>
                    </div>

                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="compact" value="condensed"
                            id="condensed-check" />
                        <label class="custom-control-label" for="condensed-check">Condensed</label>
                    </div>

                    <div class="custom-control custom-switch mb-1">
                        <input type="radio" class="custom-control-input" name="compact" value="scrollable"
                            id="scrollable-check" />
                        <label class="custom-control-label" for="scrollable-check">Scrollable</label>
                    </div>

                    <button class="btn btn-primary btn-block mt-4" id="resetBtn">Reset to Default</button>

                    <a href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/"
                        class="btn btn-danger btn-block mt-3" target="_blank"><i class="mdi mdi-basket mr-1"></i> Purchase Now</a>
                </div> <!-- end padding-->

            </div>
        </div>

        <div class="rightbar-overlay"></div>
        <!-- /Right-bar -->

        <!-- bundle -->
        <script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app.min.js"></script>

        <!-- third party js -->
        <!-- <script src="assets/js/vendor/Chart.bundle.min.js"></script> -->
        <script src="assets/js/vendor/apexcharts.min.js"></script>
        <script src="assets/js/vendor/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="assets/js/vendor/jquery-jvectormap-world-mill-en.js"></script>
        <!-- third party js ends -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

        <!-- demo app -->
        <script src="assets/js/pages/demo.dashboard-analytics.js"></script>
        <!-- end demo js-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js"></script>
        <script src="assets/js/bootstrap-tagsinput-master/dist/tagsinput.js"></script>
        <script>    

$(document).ready(function(){

    $("#emulatehuman").change(function(){
        var ch = true;

        if($(this).prop('checked')){
            ch = true;
        }
        else{
            ch = false;
        }

        $("#nointeraction").prop( "disabled", ch );
        $("#followersalready").prop( "disabled", ch );
        $("#likesdaily").prop("disabled",ch);
        $("#followsdaily").prop("disabled",ch);
        $("#unfollowsdaily").prop("disabled",ch);
    });
    



    $.get("./system/getsavedusers", function(data, status){

    var num = 1;

    var data = JSON.parse(data);
    for(var i=0; i<data.length; i++){
        $('#accountslist').append("<option>"+data[i].un+"</option>");
    }

    });







    $.get("./system/getcomments", function(data, status){

var num = 1;

var data = JSON.parse(data);

for(var i=0; i<data.length; i++){
    $('#commentslist').append("<option>"+data[i].tc+"</option>");
}

    });


    $.get("./system/getsavedhashtags", function(data, status){

var num = 1;

var data = JSON.parse(data);

for(var i=0; i<data.length; i++){
    $('#hashtagslist').append("<option>"+data[i].tc+"</option>");
}

    });




$("#createcampaign").click(function(){

$.post("http://localhost/tiktok/system/createcampaign",{
likesdaily:$("#likesdaily").val(),
followsdaily:$("#followsdaily").val(),
followersalready:$("#followersalready").val(),
unfollowsdaily:$("#unfollowsdaily").val(),
nointeraction:$("#nointeraction").val()

}).then(function(data){

});

});

   $("#SaveNow").click(function(){
 
    $.post("./system/addhashtag", {
    hn: $("#hashtag_name").val(),
    tt: $("#hashtags").val()
  },
    function(data, status){
        Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
    });


    $("#standard-modal").modal('hide');
  });

});


var tmp4 = ["followsdaily","likesdaily","unfollowsdaily","commentsdaily"];


for(var i=0; i<tmp4.length; i++){

const range = document.getElementById(tmp4[i]),
rangeV = document.getElementById(tmp4[i]+'V'),
setValue = ()=>{
const
newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
newPosition = 10 - (newValue * 0.2);
rangeV.innerHTML = `<span>${range.value}</span>`;
rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
};


range.addEventListener('input', setValue);
  
}

document.addEventListener("DOMContentLoaded", setValue);

        </script>


    </body>

</html>