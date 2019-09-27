import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});

userSchema.statics.findByLogin = async function (username, password) {
    let user = await this.findOne({
        username: username,
        password: password
    });
    return user;
}

const User = mongoose.model('User', userSchema);

export default User;