package lt.akademija.Service;

import lt.akademija.Core.CreateBook;
import lt.akademija.Core.Book;
import lt.akademija.Repository.BookRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;


    @Transactional
    public List<Book> getProducts(String search) {
        return search == null ? bookRepository.findAll() : bookRepository.findByTitleOrDescription(search);
    }

    @Transactional
    public Book getBook(@PathVariable String id) {
        return bookRepository.getOne(Long.parseLong(id));
    }

    @Transactional
    public void createProduct(@RequestBody CreateBook cmd) {
        Book book = new Book();
        book.setTitle(cmd.getTitle());
        book.setAuthor(cmd.getAuthor());
        book.setImage(cmd.getImage());
        book.setNumberofpages(cmd.getNumberofpages());
        bookRepository.save(book);
    }

    @Transactional
    public void updateProduct(@RequestBody CreateBook cmd, @PathVariable String id) {
        Book book = bookRepository.getOne(Long.parseLong(id));
        if (book != null) {
            BeanUtils.copyProperties(cmd, book);
            bookRepository.save(book);
        }
    }

    @Transactional
    public void deleteProduct(@PathVariable String id) {
        bookRepository.delete(Long.parseLong(id));
    }


}

