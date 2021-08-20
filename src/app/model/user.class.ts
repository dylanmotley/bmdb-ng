export class User {

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    collectionValue: number;

    constructor(id: number = 0, username: string = '', password: string = '',
        firstName: string = ' ', lastName: string = ' ', phone: string = ' ', 
        email: string = ' ', collectionValue: number = 0) {

        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.collectionValue = collectionValue;
    }
}