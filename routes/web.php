<?php
use App\Http\Controllers\Api\{QuestionController, UserController,ScoreController, UserSession};

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

Route::get('/forgot-password-validate/{token}', [UserController::class, 'forgotPasswordValidate'])->name('forgot-password-validate');
