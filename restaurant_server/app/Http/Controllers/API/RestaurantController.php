<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function store(Request $request)
    {
        $restaurant = new Restaurant;
        $restaurant->name = $request->input('name');
        $restaurant->description = $request->input('description');
        $restaurant->address = $request->input('address');
        $restaurant->image = $request->input('image');
        $restaurant->save();

        return response()->json([
            'status' => 200,
            'message' => 'Restaurant created Successfully',
        ]);
    }
}
