# NgxConfirmation

This library is used to open a custom confirmation dialog.

## ⚙️ Installation

```bash
npm install ngx-confirmation --save
```
## 📖 Usage

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
