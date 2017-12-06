import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html'
})

export class PropoalListComponent {
  proposalOne: Proposal = new Proposal(15,
    'Abc Company',
    'http://portfolio.noelsagaille.com',
    'RoR', 150, 120, 14,
    'noel@sagaille.com'
  )
  proposalTwo: Proposal = new Proposal(15,
    'Def Company',
    'http://portfolio.noelsagaille.com',
    'React', 150, 120, 14,
    'noel@sagaille.com'
  )

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo
  ]
}
