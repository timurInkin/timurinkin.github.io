<?php
    // $data = json_decode(file_get_contents('php://input'))
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $tel = htmlspecialchars(trim($_POST['tel']));
    $rectype = htmlspecialchars(trim($_POST['rectype']));
    $date = htmlspecialchars(trim($_POST['recdate']));
    $message = htmlspecialchars(trim($_POST['message']));

    $tel = "+".$tel;

    $tg_user = '707407552'; // id пользователя в telegram
    $bot_token = '5754041486:AAEmu9TfHVsMF0LssZqzza6TM_E_j7c0Yas'; // токен бота
 
    $text = "Имя: $name \nПочта: $email \nТелефон : $tel \nТип консультации: $rectype \nДата записи: $date \nСообщение: $message";

    $params = array(
        'chat_id' => $tg_user,
        'text' => $text,
    );
 
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot' . $bot_token . '/sendMessage');
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 10);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
    $result = curl_exec($curl);
    curl_close($curl);
    // header('Location: index.html');
?>