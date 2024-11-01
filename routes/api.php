<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{UserController,ScoreController};

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/auth/test', [UserController::class, 'test']);
    Route::post('/auth/logout', [UserController::class, 'logoutUser']);
    Route::get('/score', [ScoreController::class, 'getScores']);
    Route::get('/score/{id}', [ScoreController::class, 'getScoreById']);

});


Route::post('/auth/register', [UserController::class, 'createUser']);
Route::post('/auth/login', [UserController::class, 'loginUser']);
