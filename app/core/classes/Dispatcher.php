<?php

namespace app\core\classes;

final class Dispatcher
{

	private string $_templatesPath;
	private string $_cssPath;
	private string $_jsPath;

	private const APP_CONTROLLERS_PATH = '/app/controllers/';

	public function __construct()
	{

		$this->_templatesPath = $_SERVER['DOCUMENT_ROOT'] . '/resources/templates/';
		$this->_cssPath = $_SERVER['DOCUMENT_ROOT'] . '/static/css/';
		$this->_jsPath = $_SERVER['DOCUMENT_ROOT'] . '/static/js/';

	}

	public function process()
	{
		header("Content-Type: text/html; charset=utf-8");
		exit($this->getPage());
	}

	private function getPage()
	{

		$routes = include 'routes/pages.php';

		if (!isset($routes[$_SERVER['REQUEST_URI']])) {
			return '404';
		}

		$route = $routes[$_SERVER['REQUEST_URI']];

		return $this->render($route['page'], $route['css'], $route['js'], $route['title']);

	}

	private function render(string $page, array $cssPaths, array $jsPaths, string $title)
	{
		return file_get_contents($this->_templatesPath . $page);
	}

}