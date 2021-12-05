import { Component, OnInit } from '@angular/core';
import { LinkGroups } from '../../models/footer.model';
import { footerLinks } from '../../constants/footer.constant';

@Component({
  selector: 'dr-footer-links-section',
  templateUrl: './footer-links-section.component.html',
  styleUrls: ['./footer-links-section.component.scss']
})
export class FooterLinksSectionComponent implements OnInit {

  footerList: LinkGroups[];
  constructor() { }

  ngOnInit(): void {
    this.footerList = footerLinks;
  }

}
