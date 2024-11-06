<?php

namespace App\Http\Controllers\Api;

use App\Models\{Score, User};
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ScoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getScores()
    {
        try{
            $score = Score::get();

            return response()->json([
                'status' => true,
                'response' => $score
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function getScoreById($id)
    {
        try{
            $score = Score::where('score_id', $id)->first();

            return response()->json([
                'status' => true,
                'response' => $score
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function updateScore($id)
    {
        try{
            $score = Score::where('score_id', $id)->first();

            $correct = request('is_correct');

            $newScore = intval(request('score')) - intval($score->total_score);

            if($correct == "Y"){
                $newScore = intval(request('score')) + intval($score->total_score);

                $isCorrect = 1 + intval($score->correct_answer);

                $score->update([
                    'total_score' => strval($newScore),
                    'correct_answer' => strval($isCorrect),
                ]);
            }else{
                    $newScore = intval($score->total_score) - intval(request('score'));
                    $isCorrect = 1 + intval($score->false_answer);


                    if($newScore < 0){
                        $newScore = 0;
                    }

                $score->update([
                    'total_score' => strval($newScore),
                    'false_answer' => strval($isCorrect)
                ]);

            }

            return response()->json([
                'status' => true,
                'response' => $score
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getHighScore()
    {
        try{
            $score = User::leftJoin('scores', 'users.id', '=', 'scores.score_id')
            ->select('users.*','scores.*')->orderBy('scores.total_score', 'desc')->get();

            return response()->json([
                'status' => true,
                'response' => $score
            ], 200);
        }
        catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }



    // public function updateScore($id)
    // {
    //     try{
    //         $score = Score::where('score_id', $id)->first();

    //         $correct = request('is_correct');

    //         $newScore = intval(request('score')) - intval($score->total_score);



    //         if($correct == "Y"){
    //             $newScore = intval(request('score')) + intval($score->total_score);

    //             $isCorrect = 1 + intval($score->correct_answer);

    //             $score->update([
    //                 'total_score' => strval($newScore),
    //                 'correct_answer' => strval($isCorrect),
    //             ]);
    //         }else{
    //                 $newScore = intval($score->total_score) - intval(request('score'));
    //                 $isCorrect = 1 + intval($score->false_answer);


    //                 if($newScore < 0){
    //                     $newScore = 0;
    //                 }

    //             $score->update([
    //                 'total_score' => strval($newScore),
    //                 'false_answer' => strval($isCorrect)
    //             ]);

    //         }

    //         return response()->json([
    //             'status' => true,
    //             'response' => $score
    //         ], 200);
    //     }
    //     catch(\Throwable $th){
    //         return response()->json([
    //             'status' => false,
    //             'message' => $th->getMessage()
    //         ], 500);
    //     }
    // }

}
