<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RestaurantController extends Controller
{
    public function getNickNameByResId($id){
        $restaurant = Restaurant::find($id);
        if(!$restaurant) return response()->json(['name' => "not found 1"]);
        $user = User::find($restaurant->user_id);
        if($user) return response()->json(['name' => $user->name]);
        return response()->json(['name' => "not found 2"]);
    }

    public function getRestaurant(Request $request) {
        $restaurants = Restaurant::where('user_id', $request->user()->getId())->get();

        return response()->json([
            'status' => 200,
            'restaurants' => $restaurants,
            'user_request' => $request->user()->getId()
        ]);
    }

    public function getRestaurants(){
        $restaurants = Restaurant::all();
        if(!$restaurants) $restaurants = []; 
        return response()->json([
            'status' => 200,
            'restaurants' => $restaurants,
        ]);
    }

    public function store(Request $request)
    {
        $upload_file = $request->file('image')->store('images');

        $restaurant = new Restaurant;
        $restaurant->user_id = $request->user()->getId();
        $restaurant->name = $request->input('name');
        $restaurant->description = $request->input('description');
        $restaurant->address = $request->input('address');
        $restaurant->image = $request->input('image');
        $restaurant->image = $upload_file;
        $restaurant->save();

        return response()->json([
            'status' => 200,
            'message' => 'Restaurant created Successfully',
            'restaurant' => $restaurant
        ]);
    }

    public function update(Request $request, $id){
        $restaurant = Restaurant::find($id);
        if($restaurant){
            if($restaurant->user_id !== $request->user()->getId()){
                return response()->json([
                    'status' => 401,
                    'message' => "Unauthorized"
                ]);
            }

            // Store new image
            $upload_file = $request->file('image')->store('images');
            // Delete previous image
            Storage::delete($restaurant->image);

            $restaurant->name = $request->input('name');
            $restaurant->description = $request->input('description');
            $restaurant->address = $request->input('address');
            $restaurant->image = $upload_file;
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

    public function destroy(Request $request, $id){
        $restaurant = Restaurant::find($id);
        if($restaurant){
            if($restaurant->user_id !== $request->user()->getId()){
                return response()->json([
                    'status' => 401,
                    'message' => "Unauthorized"
                ]);
            }

            // delete odd image
            Storage::delete($restaurant->image);

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
