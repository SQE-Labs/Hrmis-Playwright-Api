import { APIRequestContext } from '@playwright/test';
import { RequestBuilder } from './requestBuilder';
import { AssetManagementService } from '../services/assetmanagement.service';

export class ApiClient {
  readonly assets!: AssetManagementService;
  
  constructor(context: APIRequestContext, token: string) {
    const request = new RequestBuilder(context, {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    this.assets = new AssetManagementService(request);
  }
}