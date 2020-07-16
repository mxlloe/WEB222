/*function images(title, size, likes) {

    var cats = new images("cats", 100, 200);
    var dogs = new images("dogs", 20, 400);


    this.title = title;
    this.size = size;
    this.likes = likes;
    this.highLikes = function(){
        if (cats.likes > dogs.likes)
        {
            this.likes = cats;
            return this.likes

        }

        else 
        {
            this.likes = dogs;
            return this.likes
        }
        
    }

} */

function images(title, size, likes) {
    this.title = title;
    this.size = size;
    this.likes = likes;
}
