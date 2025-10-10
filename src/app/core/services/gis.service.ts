import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiEndpoints} from "../api/api-endpoints";
import {Kyc} from "./kyc.service";
import {AuthService} from "./auth.service";
import {ApiService} from "../api/api.service";

@Injectable({providedIn: 'root'})
export class GisService {
    constructor(private apiService: ApiService) {}

    searchLocation(searchText?: string, page: number = 0, size: number = 10): Observable<any> {
        return this.apiService.post<Kyc>(ApiEndpoints.GIS_SEARCH, { page,size,searchText });
    }
}