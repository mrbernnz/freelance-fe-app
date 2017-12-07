import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'

import { Proposal } from './proposal'

@Injectable()
export class ProposalService {
  constructor( private http: Http) {}

  getProposals(): Observable<Proposal[]> {
    return this
      .http
      .get(this.proposalsURL)
      .map((res: Response) => <Proposal[]>res.json())
      .catch(this.handleError)
  }

  getProposal(id: number) {
    return this.http.get(`${this.proposalsURL}/${id}`)
  }

  createProposal(proposal) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    })
    let options = new RequestOptions({headers})
    return this
      .http
      .post(this.proposalsURL, JSON.stringify(proposal), {headers})
      .map((res: Response) => res.json())
  }

  private proposalsURL = 'http://localhost:4301/proposals'

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
