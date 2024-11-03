<?php

namespace App\Http\Controllers;

use App\Models\UserSession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


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

}
