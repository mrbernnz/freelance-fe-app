import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { ProposalService } from './proposal.service'
import { Proposal } from './proposal'

@Component({
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: [ 'proposal-show.component.css' ],
  providers: [ ProposalService ]
})

export class ProposalShowComponent implements OnInit {
  id: number
  routeId: any

  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: Http
  ) {}

  @Input()
  proposal: Proposal

  ngOnInit(): void {
    let proposalRequest = this
      .route
      .params
      .flatMap((params: Params) => {
        return this.proposalService.getProposal(+params['id'])
      })
    proposalRequest.subscribe(res => this.proposal = res.json())
  }
}
