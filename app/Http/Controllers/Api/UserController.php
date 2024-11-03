<?php

namespace App\Http\Controllers\Api;
use App\Models\{User,Score, UserSession};
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

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
}
