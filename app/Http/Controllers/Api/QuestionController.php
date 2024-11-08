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

    public function getQuestionSession(Request $request)
    {
        try{
            $question = Question::where('session_id', $request->session_id)->get();

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

    public function updateQuestion(Request $request)
    {
        try{

        $question = Question::where('id', $request->id)->first();

        $updatedFields = [];

        if ($request->has('category_id') && $request->category_id !== $question->category_id) {
            $updatedFields['category_id'] = $request->category_id;
        }

        if ($request->has('session_id') && $request->session_id !== $question->session_id) {
            $updatedFields['session_id'] = $request->session_id;
        }

        if ($request->has('question') && $request->question !== $question->question) {
            $updatedFields['question'] = $request->question;
        }

        if ($request->has('option_a') && $request->option_a !== $question->option_a) {
            $updatedFields['option_a'] = $request->option_a;
        }

        if ($request->has('option_b') && $request->option_b !== $question->option_b) {
            $updatedFields['option_b'] = $request->option_b;
        }

        if ($request->has('option_c') && $request->option_c !== $question->option_c) {
            $updatedFields['option_c'] = $request->option_c;
        }

        if ($request->has('option_d') && $request->option_d !== $question->option_d) {
            $updatedFields['option_d'] = $request->option_d;
        }

        if ($request->has('answer') && $request->answer !== $question->answer) {
            $updatedFields['answer'] = $request->answer;
        }

        if ($request->has('point') && $request->point !== $question->point) {
            $updatedFields['point'] = $request->point;
        }

        if (!empty($updatedFields)) {
            $question->update($updatedFields);
        }

        return response()->json([
            'status' => true,
            'message' => 'Updated Successfuly',
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

    public function deleteSession(Request $request)
    {
        try {
            $session = Question::find($request->id);
            $session->delete();


            return response()->json([
                'message' => 'Berhasil Menghapus Pertanyaan!'
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
