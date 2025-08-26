<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', function () {
    return Inertia::render('Login', [
        'test' => 'Hello from Laravel!'
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Landing', [
        'test' => 'Hello from Laravel!'
    ]);
});
