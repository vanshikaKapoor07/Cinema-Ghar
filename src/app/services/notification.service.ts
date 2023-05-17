import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastrService : ToastrService
  ) {}

  showSuccess = (message: string, title?: string) => {
    this.toastrService.success(message, title || '')
  }
}
