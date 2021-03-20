export interface IUser {
    token: string;
    username: string;
    email: string;
    userGroups: string;
    loggedIn: boolean;
}