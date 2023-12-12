<?php

$rfidSEO = '6560a8e12dda985864d91316';
$urlSEO = 'site';
$authToken = "VWxSSklFVnRjSEpsYzJGeWFXRnMtYldGMGFHVjFjdz09LU5tRmhORFUzWWpRNU5UTTFNamd4TURBMVlUZzFPV05tWm1GbU5ERm1ZakE9LVFtbGxibVZ6ZEdGeVVsUkpJRVZ0Y0hKbGMyRnlhV0ZzYldGMGFHVjFjdz09LQ==";
$urlServer = "";
if (strpos($_SERVER['HTTP_HOST'] . "/" . $_SERVER['REQUEST_URI'], "bienclube") !== false || strpos($_SERVER['HTTP_HOST'] . "/" . $_SERVER['REQUEST_URI'], "boreal") !== false) {
    $urlServer = 'https://bienclube.com.br:8080/webservice/api/Bienestar/Site/SEO/site';
} else {
    $urlServer = 'https://rtiempresarial.com.br:8080/staging/api/Bienestar/Site/SEO/site';
}
$ch = curl_init($urlServer);
curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Authorization: ' . $authToken,
        'Content-Type: application/x-www-form-urlencoded'
    ),
    CURLOPT_POSTFIELDS => "biencode={'empresa':'" . $rfidSEO . "', 'urlpage' :'" . $urlSEO . "'}"));
$response = curl_exec($ch);
curl_close($ch);
if (strpos($response, "javax.servlet.ServletException")) {
    $response = "";
    echo $response;
} else {
    echo $response;
}
?>
