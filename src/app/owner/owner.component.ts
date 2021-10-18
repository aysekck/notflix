import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Movie } from '../movieOwner';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.sass'],
})
export class OwnerComponent implements OnInit {
  constructor(private ownerService: OwnerService) {}

  ngOnInit(): void {}
}
