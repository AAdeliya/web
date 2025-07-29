import { User} from './models/User';

const user = new User({name: 'Adel', age: 20});


user.set({name: 'Ayana', age: 2007})
console.log(user.get('name'));
console.log(user.get('age'));