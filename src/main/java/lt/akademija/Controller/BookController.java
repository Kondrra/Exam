package lt.akademija.Controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.akademija.Core.CreateBook;
import lt.akademija.Core.Book;
import lt.akademija.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "Book")
@CrossOrigin(origins = "http://localhost:3000/books")
@RequestMapping(value = "/api")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping(value = "/products")
    @ApiOperation(value = "Take a look at books", notes = "Shows books")
    public List<Book> getBooks(@ApiParam(value = "Search for books")
                               @RequestParam(value = "search", required = false) String search) {
        return bookService.getProducts(search);
    }

    @GetMapping(value = {"/books/{id}", "/admin/books/{id}"})
    @ApiOperation(value = "Get books", notes = "Returns one book")
    public Book getBook(@PathVariable String id) {
        return bookService.getBook(id);
    }

    @PostMapping(value = "/admin/books/new")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create products", notes = "Create a book")
    public void createBook(@RequestBody CreateBook cmd) {
        bookService.createProduct(cmd);
    }

    @PutMapping(value = "/admin/books/{id}")
    @ApiOperation(value = "Update product", notes = "Updates product information")
    public void updateBook(@RequestBody CreateBook cmd, @PathVariable String id) {
        bookService.updateProduct(cmd, id);
    }

    @DeleteMapping(value = "/admin/books/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation(value = "Delete a book", notes = "Delete one book")
    public void deleteProduct(@PathVariable String id) {
        bookService.deleteProduct(id);
    }
}

