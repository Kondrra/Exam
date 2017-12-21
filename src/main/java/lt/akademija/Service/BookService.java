package lt.akademija.Service;

import lt.akademija.Core.CreateBook
import lt.akademija.Core.Book
import lt.akademija.Repository.BookRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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
        return search == null ? productRepository.findAll() : productRepository.findByTitleOrDescription(search);
    }

    @Transactional
    public Product getProduct(@PathVariable String id) {
        return productRepository.getOne(Long.parseLong(id));
    }

    @Transactional
    public void createProduct(@RequestBody CreateProductCmd cmd) {
        Product product = new Product();
        product.setTitle(cmd.getTitle());
        product.setDescription(cmd.getDescription());
        product.setImage(cmd.getImage());
        product.setQuantity(cmd.getQuantity());
        product.setPrice(cmd.getPrice());
        productRepository.save(product);
    }

    @Transactional
    public void updateProduct(@RequestBody CreateProductCmd cmd, @PathVariable String id) {
        Product product = productRepository.getOne(Long.parseLong(id));
        if (product != null) {
            BeanUtils.copyProperties(cmd, product);
            productRepository.save(product);
        }
    }

    @Transactional
    public void deleteProduct(@PathVariable String id) {
        userRepository.findAll().forEach(user -> user.removeProduct(id));
        productRepository.delete(Long.parseLong(id));
    }




}
}
