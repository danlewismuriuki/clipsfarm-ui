import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from '../../core/jobs.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs: any[] = [];
  loading = false;

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.fetchJobs();
  }

  fetchJobs(): void {
    this.loading = true;
    this.jobsService.listJobs().subscribe({
      next: res => {
        this.jobs = res.jobs;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}