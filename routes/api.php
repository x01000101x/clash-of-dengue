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
    Route::patch('/user', [UserController::class, 'updateUser']);

    //Questions API
    Route::get('/question', [QuestionController::class, 'getQuestions']);
    Route::get('/question/{id}', [QuestionController::class, 'getQuestionId']);
    Route::post('/question-session', [QuestionController::class, 'getQuestionSession']);
    Route::post('/question', [QuestionController::class, 'PostQuestion']);


    //Sessions API
    Route::get('/session', [UserSessionController::class, 'getSession']);
    Route::get('/session/{id}', [UserSessionController::class, 'getSessionById']);
    Route::post('/validate-session', [UserSessionController::class, 'validateSession']);



});
//Forgot Password API
Route::get('/forgot-password', [UserController::class, 'forgotPassword']);
Route::post('/forgot-password', [UserController::class, 'forgotPasswordAction']);
Route::post('/forgot-password-validate', [UserController::class, 'forgotPasswordValidateAction']);

//Sessions API
Route::post('/session', [UserSessionController::class, 'PostSession']);

//Auth API
Route::post('/auth/register', [UserController::class, 'createUser']);
Route::post('/auth/login', [UserController::class, 'loginUser']);
