import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsService } from '../../core/channels.service';
// import { NgIf, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels: any[] = [];
  loading = false;

  constructor(private channelsService: ChannelsService) {}

  ngOnInit(): void {
    this.fetchChannels();
  }

  fetchChannels(): void {
    this.loading = true;
    this.channelsService.listChannels().subscribe({
      next: (res) => { this.channels = res; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}