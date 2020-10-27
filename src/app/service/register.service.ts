import { Injectable } from '@angular/core'
import { userdataModel } from '../userData/userdata.model'
import { from } from 'rxjs';
@Injectable({

    providedIn: 'root'
})
export class RegisterService {
    public userdataModelArr: Array<userdataModel> = [];
    public loginCheck : boolean = true
    constructor() {

    }

    AddUserData(data: userdataModel): boolean {
        let cheflag = 'N'
        if (this.userdataModelArr.length > 0) {
            this.userdataModelArr.forEach(element => {
                if (element.userName.toUpperCase() == data.userName.toUpperCase())
                    cheflag = 'Y'
            });
            if (cheflag == 'N') {
                this.userdataModelArr.push(data);
            }
        }
        else {
            this.userdataModelArr.push(data);
            return false;
        }
        return cheflag == 'N' ? false : true;
    }
    editUserData(data: userdataModel){
       let  objIndex = this.userdataModelArr.findIndex((obj => obj.userName == data.userName));
        this.userdataModelArr[objIndex].userName = data.userName
        this.userdataModelArr[objIndex].passWord = data.passWord
        this.userdataModelArr[objIndex].conFirmpassWord = data.conFirmpassWord
        this.userdataModelArr[objIndex].mobileNo = data.mobileNo
        this.userdataModelArr[objIndex].emailid = data.emailid
        this.userdataModelArr[objIndex].file = data.file
    }
}