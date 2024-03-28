// app/Http/Controllers/SongController.php

namespace App\Http\Controllers;

use App\Models\Song;

class SongController extends Controller
{
    public function index()
    {
        $songs = Song::all();
        return response()->json($songs);
    }
}
