<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('backend.index');
});

Route::group(['prefix' => 'admin'], function() {
    Route::get('/users', "RootControler@index")->name('admin.users');
    Route::get('/categories', "RootControler@index")->name('admin.categories');
});

Route::group(['prefix' => 'backend/rest'], function() {
    //user

    Route::get('/user', "Rest\UserCtrl@listUser");
    Route::get('/user/{id}', "Rest\UserCtrl@getRecordUser");
    Route::post('/user', "Rest\UserCtrl@insertUser");
    Route::post('/user/{id}', "Rest\UserCtrl@updateUser");
    Route::post('/userSelf/{id}', "Rest\UserCtrl@updateUserSelf");
    Route::delete('/user/{id}', "Rest\UserCtrl@deleteUser");
});
// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
