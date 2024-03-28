// app/Http/Controllers/AlbumController.php

namespace App\Http\Controllers;

use App\Models\Album;

class AlbumController extends Controller
{
    public function index()
    {
        $albums = Album::all();
        return response()->json($albums);
    }
}
