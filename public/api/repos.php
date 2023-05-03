<?php
$version = '0.1';
header('Allow: GET,POST');
header('Content-Type: application/json');
$curl = curl_init("https://api.github.com/repositories")
curl_setopt_array($curl,[
    "Accept: application/vnd.github+json",
    "Authorization: Bearer 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",
    "X-GitHub-Api-Version: 2022-11-28"
    ])

echo(curl_exec($curl))