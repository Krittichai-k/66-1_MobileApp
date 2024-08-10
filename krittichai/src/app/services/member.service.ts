import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiURL = "http://127.0.0.1/mobile166/member/";

  constructor(private httpClient:HttpClient) { }

  insert(data: any) {
    return this.httpClient.post(this.apiURL + 'insert.php', JSON.stringify(data))
  }

  read() {
    return this.httpClient.get(this.apiURL + 'read.php')
  }

  find(id: any) {
    return this.httpClient.get(this.apiURL + 'find.php?id=' + id)
  }

  delete(id: any) {
    return this.httpClient.delete(this.apiURL + 'delete.php?id=' + id)
  }

  update(id: number, data: any){
    return this.httpClient.put(this.apiURL + 'update.php?id=' + id, JSON.stringify(data))
  }
}
