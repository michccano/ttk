<?php
/*
    $headers = array(
        "user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36",
        "Content-Type:application/x-www-form-urlencoded"
    );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://tiktok-service-api.herokuapp.com/api/device-register?key=6d380c4911a8f683c910160d7b2d1c4e810039eb');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $resp       = curl_exec($ch);
    curl_close($ch);

    print_r($resp);
        */

    
    function xorEncrypt($data, $key = 5) {
        $xored = '';
        for($i = 0; $i < strlen($data); ++$i) {
            $xored .= bin2hex(chr(ord($data[$i]) ^ $key));
        }

        return $xored;
    }

    $username = "mccano20";
    $email = "mccano@protonmail.com";
    $password = "123wet123";
    $mobile = "";
    $apiHeaders = array(
        "user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36",
        "Content-Type:application/x-www-form-urlencoded"
    );

    $url = "https://api2.musical.ly/passport/user/login/?manifest_version_code=2019092901&app_language=tr&app_type=normal&iid=6848833020142405382&channel=googleplay&device_type=iPhone%20X&language=tr&locale=tr-TR&resolution=768*1184&openudid=926b5dfef248c186&update_version_code=2019092901&ac2=wifi&sys_region=TR&os_api=26&uoo=1&is_my_cn=0&timezone_name=Europe%2FIstanbul&dpi=320&carrier_region=TR&ac=wifi&device_id=6848832236721161733&pass-route=1&mcc_mnc=310260&os_version=8.0.0&timezone_offset=10800&version_code=130211&carrier_region_v2=310&app_name=musical_ly&ab_version=13.2.11&version_name=13.2.11&device_brand=Android&ssmix=a&pass-region=1&device_platform=android&build_number=13.2.11®ion=TR&aid=1233&_rticket=".time()."691&ts=" . time();
    
    $postData = "mix_mode=1&username=" . xorEncrypt($username) . "&email=" . xorEncrypt($email) . "&mobile=" . xorEncrypt($mobile) . "&account=&password=" . xorEncrypt($password) . "&multi_login=0&captcha=";
    $headers = array(
                'User-Agent' => 'okhttp/3.10.0.1',
                'Cookie' => 'odin_tt=0;ttreq=0;install_id=6848833020142405382;',
            );

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://tiktok-service-api.herokuapp.com/api/gorgon-api?key=6d380c4911a8f683c910160d7b2d1c4e810039eb");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    if($postData) {
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "postdata=" . base64_encode($postData) . "&headers=" . base64_encode(json_encode($headers)) . "&url=" . base64_encode($url));
    } else {
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "&headers=" . base64_encode(json_encode($headers)) . "&url=" . base64_encode($url));
    }

    curl_setopt($ch, CURLOPT_HTTPHEADER, $apiHeaders);
    curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');
    $resp       = curl_exec($ch);
    curl_close($ch);

    $respData = json_decode($resp, TRUE);
    print_r($respData);