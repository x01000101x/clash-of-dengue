<?php

namespace App\Http\Controllers\Api;

use App\Models\{Question};
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;



class QuestionController extends Controller
{
    public function getQuestions()
    {
        try{
            $question = Question::get();

            return response()->json([
                'status' => true,
                'response' => $question
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getQuestionId($id)
    {
        try{
            $user = Question::where('id', $id)->first();

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

    public function PostQuestion(Request $request)
    {
        try{

            $validateQuestion = Validator::make($request->all(),
            [
                'category_id' => 'required',
                'session_id' => 'required',
                'question' => 'required',
                'option_a' => 'required',
                'option_b' => 'required',
                'option_c' => 'required',
                'option_d' => 'required',
                'option_e' => 'required',
                'answer' => 'required',
                'point' => 'required',
            ]);

            if($validateQuestion->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                    'errors' => $validateQuestion->errors()
                ], 401);
            }

            $question = Question::create([
                'category_id' => $request->category_id,
                'session_id' => $request->session_id,
                'question' => $request->question,
                'option_a' => $request->option_a,
                'option_b' => $request->option_b,
                'option_c' => $request->option_c,
                'option_d' => $request->option_d,
                'option_e' => $request->option_e,
                'answer' => $request->answer,
                'point' => $request->point,
                'time' => $request->time
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Question Created Successfully',
                'data' => $question
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
