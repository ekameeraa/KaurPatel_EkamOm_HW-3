<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Book;


class BookController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
         //$books = Book::all();

         $books = Book::join('authors', 'author_id', '=', 'authors.id')->select('books.id','title','published_date','name')->orderBy('published_date', 'desc')->get();


         return response()->json($books);
     }

     public function getOne($id) {
        $book = Book::join('authors', 'author_id', '=', 'authors.id')->select('books.id','title','book_image','published_date','name')->where('books.id', '=', $id)->get();

         return response()->json($book);
     }

     public function save(Request $request) {
        $this->validate($request, [
            'title' => 'required',
            'author_id' => 'required',
            'published_date' => 'required|date',
            'book_image' => 'required'
        ]);
        $book = Book::create($request->all());
        return response()->json($book, 201);
    }
    
    
    
    public function update(Request $request, $id) {
        $book = Book::findOrFail($id);
    
        $this->validate($request, [
            'title' => 'required',
            'author_id' => 'required',
            'published_date' => 'required|date',
            'book_image' => 'required'
        ]);
        $book->update($request->all());
        return response()->json($book);
    }
    
    
    public function delete($id) {
        $book = Book::findOrFail($id);
        $book->delete();
        return response()->json(null, 204);
    }
    
    

}
