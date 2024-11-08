<?php

namespace App\Http\Controllers;

use App\Models\{User, UserSession};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;


class UserSessionController extends Controller
{
   public function getSession(){
        try{
            $session = UserSession::get();

            return response()->json([
                'status' => true,
                'response' => $session
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
   }

   public function getSessionById($id){
    try{
        $session = UserSession::where('id', $id)->first();

        return response()->json([
            'status' => true,
            'response' => $session
        ], 200);
    }

    catch(\Throwable $th){
        return response()->json([
            'status' => false,
            'message' => $th->getMessage()
        ], 500);
    }}

    public function PostSession(Request $request)
    {
        try{

            $validateSession = Validator::make($request->all(),
            [
                'dateFrom' => 'required',
                'dateTo' => 'required',
            ]);

            if($validateSession->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validateSession->errors()
                ], 401);
            }

            $Session = UserSession::create([
                'dateFrom' => $request->dateFrom,
                'dateTo' => $request->dateTo,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Session Created Successfully',
                'data' => $Session
            ], 200);

        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function validateSession(Request $request){
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

            $validateUserSessionRequest = Validator::make($request->all(),
            [
                'user_id' => 'required',
                'session_id' => 'required'
            ]);

            if($validateUserSessionRequest->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Error Validation',
                    'errors' => $validateUserSessionRequest->errors()
                ], 401);
            }

            $validateUserSession = User::where('id', $request->user_id)->where('session_id', $request->session_id)->first();
            $user = User::where('id', $request->user_id)->first();



            if($validateUserSession == null){
                $updatedFields = [];
                $updatedFields['session_id'] = $request->session_id;
                $user->update($updatedFields);
            }else{
                return response()->json([
                    'status' => false,
                    'message' => 'Maaf anda sudah keluar dari sesi',
                ], 401);
            }

            return response()->json([
                'status' => true,
                'message' => 'Berhasil Masuk Sesi',
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function updateSession(Request $request)
    {
        try{

        $session = UserSession::where('id', $request->id)->first();

        $updatedFields = [];

        if ($request->has('dateFrom') && $request->dateFrom !== $session->dateFrom) {
            $updatedFields['dateFrom'] = $request->dateFrom;
        }

        if ($request->has('dateTo') && $request->dateTo !== $session->dateTo) {
            $updatedFields['dateTo'] = $request->dateTo;
        }

        if (!empty($updatedFields)) {
            $session->update($updatedFields);
        }

        return response()->json([
            'status' => true,
            'message' => 'Updated Successfuly',
            'response' => $session
        ], 200);
    }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function deleteSession(Request $request)
    {
        try {
            $session = UserSession::find($request->id);
            $session->delete();


            return response()->json([
                'message' => 'Berhasil Menghapus Sesi!'
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

}
