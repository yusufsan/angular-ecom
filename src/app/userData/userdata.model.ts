export class userdataModel {
    public userName: string;
    public passWord: string;
    public conFirmpassWord: string;
    public emailid: string;
    public mobileNo: string;
    public file : string;
    constructor(userData: any) {
        this.userName = userData.userName == null ? '' : userData.userName;
        this.passWord = userData.passWord == null ? '' : userData.passWord;
        this.conFirmpassWord = userData.conFirmpassWord == null ? '' : userData.conFirmpassWord;
        this.emailid = userData.emailid == null ? '' : userData.emailid;
        this.mobileNo = userData.mobileNo == null ? '' : userData.mobileNo;
        this.file = userData.file == null ? '' : userData.file;
    }
}