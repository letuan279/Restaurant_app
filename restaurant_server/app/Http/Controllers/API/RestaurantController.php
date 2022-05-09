<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function index(){
        $restaurants = Restaurant::all();
        return response()->json([
            'status' => 200,
            'restaurants' => $restaurants,
        ]);
    }

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

    public function update(Request $request, $id){
        $restaurant = Restaurant::find($id);
        if($restaurant){
            $restaurant->name = $request->input('name');
            $restaurant->description = $request->input('description');
            $restaurant->address = $request->input('address');
            $restaurant->image = $request->input('image');
            $restaurant->update();

            return response()->json([
                'status'=>200,
                'message'=>'Restaurant updated successfully',
                'restaurant'=>$restaurant,
            ]);
        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>'Restaurant not found',
            ]);
        }

    }

    public function destroy($id){
        $restaurant = Restaurant::find($id);
        if($restaurant){
            $restaurant->delete();

            return response()->json([
                'status'=>200,
                'message'=>'Restaurant deleted successfully',
                'restaurant'=>$restaurant,
            ]);
        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>'Restaurant not found',
            ]);
        }
    }


}
