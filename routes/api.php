<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\{QuestionController, UserController,ScoreController, UserSession};
use App\Http\Controllers\UserSessionController;

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/auth/test', [UserController::class, 'test']);
    Route::post('/auth/logout', [UserController::class, 'logoutUser']);

    //Scores API
    Route::get('/score', [ScoreController::class, 'getScores']);
    Route::get('/score/{id}', [ScoreController::class, 'getScoreById']);
    Route::post('/score/{id}', [ScoreController::class, 'updateScore']);

    //Users API
    Route::get('/user', [UserController::class, 'getUsers']);
    Route::get('/user/{id}', [UserController::class, 'getUserById']);

    //Questions API
    Route::get('/question', [QuestionController::class, 'getQuestions']);
    Route::get('/question/{id}', [QuestionController::class, 'getQuestionId']);
    Route::post('/question', [QuestionController::class, 'PostQuestion']);


    //Sessions API
    Route::get('/session', [UserSessionController::class, 'getSession']);
    Route::get('/session/{id}', [UserSessionController::class, 'getSessionById']);


});
//Sessions API
Route::post('/session', [UserSessionController::class, 'PostSession']);

//Auth API
Route::post('/auth/register', [UserController::class, 'createUser']);
Route::post('/auth/login', [UserController::class, 'loginUser']);
