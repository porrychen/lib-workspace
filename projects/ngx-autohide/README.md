# NgxAutohide

This library is used to automatically hide an Angular Component and open a custom confirmation dialog.

## ⚙️ Installation

```bash
npm install ngx-autohide --save
```
## 📖 Usage

### 1. autoHide
*By default timings is 5000ms(5s)*
```html
<div autoHide>
  No More Information!
</div>
```
*Set timings = 10000ms(10s)*
```html
<div autoHide [timings]="10000">
  No More Information!
</div>
```
### 2. conformation dialog
```javascript
import { NgxConfirmationService } from 'ngx-autohide';

export class SettingsComponent {

  constructor(
    private authService: AuthService,
    private confirmationService: NgxConfirmationService
  ) { }

  onLogOut() {
    // Open confirmation dialog
    const confirmation = this.confirmationService.open({
      title: 'Log out',
      icon: {
        name: 'information',
        color: "primary"
      },
      message: 'Are you sure that you want to log out?',
      actions: {
        confirm: {
          label: 'Yes',
          color: 'primary'
        },
        cancel: {
          label: 'No'
        }
      },
      disableClose: false
    });

    // logout after confirmed
    confirmation.afterClosed().subscribe((result) => {
      if (result === 'confirmed') {
        // call service logout method
        this.authService.logout();
        location.reload();
      }
    })
  }
}
```

## ☀️ License
[MIT]
