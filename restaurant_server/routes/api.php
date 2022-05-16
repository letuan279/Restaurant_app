<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\RestaurantController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);  
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/auth', [AuthController::class, 'checkUser']);   
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::get('/get-restaurant', [RestaurantController::class, 'getRestaurant']);
    Route::get('/get-restaurants', [RestaurantController::class, 'getRestaurants']);
    Route::post('/add-restaurant', [RestaurantController::class, 'store']);
    Route::put('/update-restaurant/{id}', [RestaurantController::class, 'update']);
    Route::delete('/delete-restaurant/{id}', [RestaurantController::class, 'destroy']);
});