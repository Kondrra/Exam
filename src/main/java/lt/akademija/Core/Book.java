package lt.akademija.Core;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Book implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private String title;
    private String image;
    private String author;
    private double numberofpages;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String description) {
        this.author = author;
}

    public double getNumberofpages() {
        return numberofpages;
    }

    public void setNumberofpages(double numberofpages) {
        this.numberofpages = numberofpages;
    }


    @Override
    public String toString() {
        return String.valueOf(id);
    }
}



