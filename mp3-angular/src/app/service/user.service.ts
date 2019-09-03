import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../model/user.module';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    user: any;

    isOkay(): boolean {
        return !!this.user;
    }

    listUser: IUser[];

    private url = "http://localhost:8080/user"

    constructor(private http: HttpClient) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.url}`)
    }

    createUser(post: Partial<IUser>): Observable<IUser> {
        return this.http.post<IUser>(`${this.url}`, post);
    }

}
