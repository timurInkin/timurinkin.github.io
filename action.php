<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $rectype = $_POST['rectype'];
    $date = $_POST['date'];
    $message = $_POST['message'];

    $tg_user = '707407552'; // id пользователя в telegram
    $bot_token = '5754041486:AAEmu9TfHVsMF0LssZqzza6TM_E_j7c0Yas'; // токен бота
 
    $text = "Имя: $name \nПочта: $email \nТелефон : $tel \nТип консультации: $rectype \nДата записи: $date \nСообщение: $message";
 
// параметры, которые отправятся в api телеграмм
    $params = array(
        'chat_id' => $tg_user, // id получателя сообщения
        'text' => $text, // текст сообщения
    );
 
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, 'https://api.telegram.org/bot' . $bot_token . '/sendMessage'); // адрес api телеграмм
    curl_setopt($curl, CURLOPT_POST, true); // отправка данных методом POST
    curl_setopt($curl, CURLOPT_TIMEOUT, 10); // максимальное время выполнения запроса
    curl_setopt($curl, CURLOPT_POSTFIELDS, $params); // параметры запроса
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
    $result = curl_exec($curl); // запрос к api
    curl_close($curl);
    header('Location: index.html');
?>