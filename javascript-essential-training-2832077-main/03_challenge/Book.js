class Book{
    constructor(
        title,
        author,
        pages,
        publisher,
    ){
        this.title = title
        this.author = author
        this.page = pages
        this.publisher = publisher
        this.buyDate = new Date()
    }
    
    checkDate(){
        const dateString = this.buyDate.toISOString().slice(0,10)
        console.log("The date bought the book: ", dateString)
    }
}

export default Book