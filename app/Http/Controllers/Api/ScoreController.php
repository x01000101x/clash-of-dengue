<?php

namespace App\Http\Controllers\Api;

use App\Models\{Score};
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

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Score $score)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Score $score)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Score $score)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Score $score)
    {
        //
    }
}
