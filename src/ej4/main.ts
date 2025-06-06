import { IUser } from "./user";

/** Example 4 Tipos compuestos */

// declaración de tipos
type ResultType = "OK" | "KO";

// tipos compuestos
let res: undefined;
console.log(typeof res);

let result1: ResultType = "OK";
let result2: "OK" | "KO" = "OK";
let isActivated: boolean | undefined | null = null;

// tipo 'any'
let aUser: IUser; // se desaconseja el uso de any todo lo posible
let myJson: unknown;

aUser = {
    Id: 1234,
    UserCode: "user",
    Name: 'Jorge Galindo Peña',
    IsAdmin: false,
    IsActive: true,
    LastLogin: '202505529'// si no añadimos un campo, no pasa nada ¿?
} as IUser; // int myNumero = (int)"1";

console.log(aUser.Deleted); // ¿undefined?
// console.log(aUser.CualquierCosa); // ¿undefined?

// uso de interfaces
let user1: IUser = {
    Id: 1111,
    UserCode: "user1",
    Name: 'User1 User1 User1',
    IsAdmin: false,
    IsActive: true,
    LastLogin: '202505529',
    Deleted: false,
} as IUser;
let user2: IUser = {
    Id: 2222,
    UserCode: "user2",
    Name: 'User2 User2 User2',
    IsAdmin: false,
    IsActive: true,
    LastLogin: '202505529',
    Deleted: false,
} as IUser;
let user3: IUser = {
    Id: 3333,
    UserCode: "user3",
    Name: 'User3 User3 User3',
    IsAdmin: false,
    IsActive: true,
    LastLogin: '202505529',
    Deleted: false,
} as IUser;

let users: IUser[] = [] as IUser[];
users.push(user1);
users.push(user2);
users.push(user3);

const deletedUsers = users.filter((u) => u.Deleted);
deletedUsers.forEach((u) => console.log(`Usuario con id ${u.Id} está borrado`))




