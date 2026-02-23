import { Routes } from '@angular/router';
import { ChannelsComponent } from './features/channels/channels.component';
import { IngestComponent } from './features/ingest/ingest.component';
import { JobsComponent } from './features/jobs/jobs.component';


export const routes: Routes = [
  { path: '', redirectTo: '/channels', pathMatch: 'full' },
  { path: 'channels', component: ChannelsComponent },
  { path: 'ingest', component: IngestComponent },
  { path: 'jobs', component: JobsComponent }
];

