package lt.akademija.Core;

public class CreateBook {
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
}
