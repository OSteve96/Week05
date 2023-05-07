class Bookss {
    constructor(name) {
        this.name = name;
    }
    /*addBookLists(bookLists) {
        if (bookLists instanceof Book){
            this.name.push(bookLists);
        }else{
            throw new Error (`You can only add an instance of booklist. 
            argument is not acceptable: ${bookLists}`)
        }
    }
*/
    describe(){
        return `The title of the book is ${this.name}`
    }
}

class Menu {
    constructor() {
        this.books = [];

    }

    start() {
        // keep asking the user what they want to do and then doing that thing until they say to stop
        let selection = this.displayMainMenuWindow();
        while(selection !== 'A') {
        switch(selection){
            case 'B' :
                this.createBookLists();
                break;
            case 'C' :
                this.deleteBookLists();
                break;
            case 'D' :
                this.viewBookLists();
                break;
            case 'E' :
                this.displayBookLists();
                break;
                default:
                    selection = 'A';
        }
            selection = this.displayMainMenuWindow();
        }
        alert("Good Night zZzZ!!!")
    }
        displayMainMenuWindow(){
        return prompt(`
        A) back
        B) add a new book name
        C) delete a book name
        D) show the book name in list
        E) display all list
        `);
    }
    displayBookLists(){
        let bookListString = '';
        for (let i=0; 1<this.books.length; i++) {
            bookListString += i+ ') '+ this.books[i].name + '\n';
        }
        alert(bookListString);
    }

    createBookLists(){
        let name = prompt("Enter name for new book: ");
            this.books.push(name);
            return this.displayMainMenuWindow();
        }
    

    viewBookLists(){
         let letter = prompt(" Enter the first letter of the book:  ");
        if (letter !== "D"){
            this.books.length;
            
        }else{
            return this.displayMainMenuWindow();
        }
    }

    deleteBookLists(){
        let index = prompt('Enter the name of book you wish to delete: ');
        if (index > -1 && index < this.books.length) { this.books.splice(index,1);
        
        }return this.displayMainMenuWindow();
    }  
}

let menu = new Menu();
menu.start();