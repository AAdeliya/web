import { User } from './models/User';

const user = new User({name: 'new record', age:20 });

user.set({name: 'NEW NAME', age: 20});
user.set({age: 20});
user.save();