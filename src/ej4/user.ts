export interface IUser {
    Id: number;
    UserCode: string;
    Name: string;
    IsAdmin: boolean;
    IsActive: boolean;
    LastLogin: string;
    Deleted: boolean;
}