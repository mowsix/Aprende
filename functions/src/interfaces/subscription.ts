import {IClass} from "./class.interface";
import {IUser} from "./user.interface";

export interface ISubscription {
    subscriptionId: number;
    subscriptionUser: IUser;
    subscriptionClass: IClass;
}

