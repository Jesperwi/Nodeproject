import { Schema, model } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt';
/**
 * movieSchema making the structure for the movie api that can be requested later.
 */
let movieSchema = Schema({
    Title:{type: String, required: true},
    Description: {type: String, required: true},
    Genre: {
        Name: String,
        Description: String
    },
    Director: {
        Name: String,
        Bio: String
    },
    Actors: [String],
    ImagePath: String,
    Featured: Boolean
});
/** 
 * userSchema that will create the user in the users collection api
 * @param {string} Username will be created
 * @param {string} Password will be created
 * @param {string} Email will be created
 * @param {string} Birthday will be created
 * @param {string} FavoriteMovies will be created
 */
let userSchema = Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavoriteMovies: [{ type: Schema.Types.ObjectId, ref: 'Movie'}]
});
/**
 * 
 * @param {string} password will be hashed for security reasons.
 */
userSchema.statics.hashPassword = (password) => {
    return hashSync(password, 10);
};
/**
 * 
 * @param {string} password this function validates if its right or not.
 */
userSchema.methods.validatePassword = function(password) {
    return compareSync(password, this.Password);
};
/** Making the collections throught the mongoose model. */
let Movie = model('movies', movieSchema);
let User = model('users', userSchema);

const _Movie = Movie;
export { _Movie as Movie };
const _User = User;
export { _User as User };

