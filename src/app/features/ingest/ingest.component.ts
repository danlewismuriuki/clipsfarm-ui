// import { Component } from '@angular/core';
// // import { IngestService } from '../../../core/ingest.service';
// import { IngestService } from '../../core/ingest.service';

// @Component({
//   selector: 'app-ingest',
//   templateUrl: './ingest.component.html',
//   styleUrls: ['./ingest.component.scss']
// })
// export class IngestComponent {
//   urls: string = '';
//   batchId: string = '';
//   response: any;

//   constructor(private ingestService: IngestService) {}

//   submitUrls(): void {
//     const urlList = this.urls.split('\n').map(u => u.trim()).filter(u => u);
//     this.ingestService.submitUrls(urlList, this.batchId).subscribe({
//       next: res => this.response = res
//     });
//   }
// }



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IngestService } from '../../core/ingest.service';

@Component({
  selector: 'app-ingest',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './ingest.component.html',
  styleUrls: ['./ingest.component.scss']
})
export class IngestComponent {
  urls: string = '';
  batchId: string = '';
  response: any;
  loading = false;

  constructor(private ingestService: IngestService) {}

  submitUrls(): void {
    const urlList = this.urls
      .split('\n')
      .map(u => u.trim())
      .filter(u => u);

    if (urlList.length === 0) return;

    this.loading = true;

    this.ingestService.submitUrls(urlList, this.batchId).subscribe({
      next: res => {
        this.response = res;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}