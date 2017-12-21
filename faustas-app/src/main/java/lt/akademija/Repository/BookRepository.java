package lt.akademija.Repository;

import lt.akademija.Core.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT p FROM Book p WHERE " +
            "LOWER(p.title) LIKE LOWER(CONCAT('%',?1, '%')) OR " +
            "LOWER(p.description) LIKE LOWER(CONCAT('%',?1, '%'))")
    List<Book> findByTitleOrDescription(String search);
}

