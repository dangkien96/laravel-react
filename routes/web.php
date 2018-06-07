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
Route::get('admin/login', 'Auth\LoginController@showLoginForm')->name('login')->middleware('guest');
Route::post('admin/login', 'Rest\LoginCtrl@postLogin')->name('postLogin')->middleware('guest');
Route::get('admin/logout', 'Rest\LoginCtrl@logout')->name('logout')->middleware('auth');


Route::group(['prefix' => 'admin'], function() {
    Route::get('/users', "RootControler@index")->name('admin.users');
    Route::get('/categories', "RootControler@index")->name('admin.categories');
});


Route::group(['prefix' => 'admin/rest'], function() {
    Route::get('/categories', "Rest\CategoryCtrl@listCategory");
});
