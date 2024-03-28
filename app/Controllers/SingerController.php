// app/Http/Controllers/SingerController.php

namespace App\Http\Controllers;

use App\Models\Singer;

class SingerController extends Controller
{
    public function index()
    {
        $singers = Singer::all();
        return response()->json($singers);
    }
}
