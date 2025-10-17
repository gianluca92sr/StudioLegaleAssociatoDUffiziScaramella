import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  standalone: true,
  template: `
    <div class="modal fade" id="modalService" data-bs-backdrop="static" data-bs-keyboard="false"  tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ modalBtnCloseText }}</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input({
    required: true
  }) modalTitle!: string;

  @Input({
      required: true
    }) modalBtnCloseText!: string;

}
