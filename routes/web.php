<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


//matches localhost:8888/lumen/public/
$router->get('/', function () use ($router) {
    return $router->app->version();
});

<?php

$router->get('/api/singers', 'SingerController@index');
$router->get('/api/singers/{id}', 'SingerController@show');
$router->post('/api/singers', 'SingerController@store');
$router->put('/api/singers/{id}', 'SingerController@update');
$router->delete('/api/singers/{id}', 'SingerController@destroy');













