const SomeApp = {
    data() {
      return {
        books: [],
        selectedBook: null,
        offers: [],
        offerForm: {}
      }
    },
    computed: {},
    methods: {

        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
       
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postNewOffer(evt) {
            // this.booksForm.bookId = this.selectedBooks.id;        
            
            console.log("Posting!", this.offerForm);
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.offerForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.offerForm = {};
              });
          }
    },
    created() {
        this.fetchBookData();
    }
  
}
  
  Vue.createApp(SomeApp).mount('#SomeApp');