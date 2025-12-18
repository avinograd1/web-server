<?php

try {
	require_once 'vendor/autoload.php';
	(new app\core\classes\Dispatcher())->process();
} catch (Exception $exception) {
	return json_encode([
		'status' => 'ERROR',
		'message' => 'Сервис временно не доступен, попробуйте позже!',
	]);
}