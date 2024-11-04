<?php

namespace App\Http\Controllers\Api;
use App\Models\{PasswordResetToken, User,Score, UserSession};
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;



class UserController extends Controller
{

    public function test()
    {
        try {
            return response()->json([
                'status' => true,
                'message' => 'Hello There!!',
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function createUser(Request $request)
    {
        try {

            $timezone = 'Asia/Jakarta';

            $now = Carbon::now();

            $now->setTimezone($timezone);

                    $records = UserSession::where('dateFrom', '<=', $now)
                    ->where('dateTo', '>=', $now)
                    ->first();
            if($records == null){
                return response()->json([
                    'status' => false,
                    'message' => 'Maaf sesi tidak tersedia',
                    'timeNow' => $now
                ], 401);
            }

            $validateUser = Validator::make($request->all(),
            [
                'name' => 'required',
                'username' => 'required|unique:users',
                'school_name' => 'required',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'school_name' => $request->school_name,
                'password' => Hash::make($request->password),
                'session_id' => $records->id
            ]);

            $user = Score::create([
                'score_id' => $user->id,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User Created Successfully',
                // 'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function loginUser(Request $request)
    {
        try {

            $timezone = 'Asia/Jakarta';

            $now = Carbon::now();

            $now->setTimezone($timezone);

            $records = UserSession::where('dateFrom', '<=', $now)
            ->where('dateTo', '>=', $now)
            ->first();

            if($records == null){
                return response()->json([
                    'status' => false,
                    'message' => 'Maaf sesi tidak tersedia',
                    'timeNow' => $now
                ], 401);
            }

            $validateUser = Validator::make($request->all(),
            [
                'username' => 'required',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Error Validation',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if(!Auth::attempt($request->only(['username', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Username Atau Password Salah.',
                ], 401);
            }

            $user = User::where('username', $request->username)->first();

            return response()->json([
                'status' => true,
                'message' => 'Berhasil Login',
                'user_id' => $user->id,
                'session_id' => $user->session_id,
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function logoutUser()
    {
        try {
            $user = request()->user();
            $user->currentAccessToken()->delete();

            return response()->json([
                'message' => 'Berhasil Logout'
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getUsers()
    {
        try{
            $user = User::get();

            return response()->json([
                'status' => true,
                'response' => $user
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getUserById($id)
    {
        try{
            $user = User::where('id', $id)->first();

            return response()->json([
                'status' => true,
                'response' => $user
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function updateUser(Request $request)
    {
        try{

        $user = User::where('id', $request->id)->first();

        $updatedFields = [];

        if ($request->has('name') && $request->name !== $user->name) {
            $updatedFields['name'] = $request->name;
        }

        if ($request->has('username') && $request->username !== $user->username) {
            $updatedFields['username'] = $request->username;
        }

        if ($request->has('school_name') && $request->school_name !== $user->school_name) {
            $updatedFields['school_name'] = $request->school_name;
        }

        if ($request->has('email') && $request->email !== $user->email) {
            $updatedFields['email'] = $request->email;
        }

        if ($request->has('password') && !empty($request->password)) {
            $updatedFields['password'] = Hash::make($request->password);
        }
        if (!empty($updatedFields)) {
            $user->update($updatedFields);
        }

        return response()->json([
            'status' => true,
            'message' => 'Updated Successfuly',
            'response' => $user
        ], 200);
    }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function forgotPasswordAction(Request $request){
        try{

            $validateEmail = Validator::make($request->all(),
            [
                'email' => 'required|email|exists:users,email',
            ]);

            if($validateEmail->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validateEmail->errors()
                ], 401);
            }

            $token = Str::random(60);

            PasswordResetToken::updateOrCreate(
                [
                    'email' => $request->email
                ],
                [
                    'email' => $request->email,
                    'token' => $token,
                    'created_at' => now(),
                    'updated_at' => now()
                ]
            );

            Mail::to($request->email)->send(new ResetPasswordMail($token));

            return response()->json([
                'status' => true,
                'response' => $request->email
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function forgotPasswordValidate(Request $request, $token){
        try{

            $token = PasswordResetToken::where('token', $token)->first();

            if (!$token){
                return response()->json([
                    'status' => false,
                    'response' => "token tidak valid"
                ], 401);
            }

            return response()->json([
                'status' => true,
                'message' => 'berhasil mengirim link reset password, silahkan cek email anda',
                'response' => $request->email
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function forgotPasswordValidateAction(Request $request){
        try{

            $validateEmail = Validator::make($request->all(),
            [
                'password' => 'required',
            ]);

            if($validateEmail->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validateEmail->errors()
                ], 401);
            }

            $token = PasswordResetToken::where('token', $request->token)->first();

            if (!$token){
                return response()->json([
                    'status' => false,
                    'response' => "Token tidak valid"
                ], 401);
            }

            $user = User::where('email', $token->email)->first();

            if (!$token){
                return response()->json([
                    'status' => false,
                    'response' => "Email tidak terdaftar"
                ], 401);
            }

           $user->update([
            'password' => Hash::make($request->password)
           ]);

           $token->delete();

            return response()->json([
                'status' => true,
                'response' => "Sukses merubah password"
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    }



