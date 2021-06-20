import WrongAccountNameException from './thirdparty/wrong-account-name-exception';
import WrongPasswordException from './thirdparty/wrong-password-exception';

const MIN_NAME_LEN = 5;
const MIN_PASSWORD_LEN = 8;

interface Account {
    name: string;
    password: string;
}

export class RegisterAccountAction {
    passwordChecker: unknown;
    accountManager: unknown;

    constructor() {
        this.passwordChecker = null;
        this.accountManager = null;
    }

    register(account: Account): void {
        this.validateAccount(account);
        this.createAccount(account);
    }

    validateAccount(account: Account): void {
        this.validateName(account.name);
        this.validatePassword(account.password);
    }

    validateName(name: string): void {
        if (this.isNameTooShort(name)) {
            throw new WrongAccountNameException(name);
        }
    }

    isNameTooShort(name: string): boolean {
        return name.length <= MIN_NAME_LEN;
    }

    validatePassword(password: string): void {
        if (this.isPasswordTooShort(password) || this.isPasswordNotSecure(password)) {
            throw new WrongPasswordException();
        }
    }

    isPasswordTooShort(password: string): boolean {
        return password.length < MIN_PASSWORD_LEN;
    }

    isPasswordNotSecure(password: string): boolean {
        return (this.passwordChecker!.validate(password) as string !== this.passwordChecker.result.OK as string;
    }

    createAccount(account) {
        this.setupNewAccount(account);
        this.accountManager.createNewAccount(account);
    }

    setupNewAccount(account) {
        this.setupDateOnCreate(account);
        this.setupAddressesOnCreate(account);
    }

    setupDateOnCreate(account) {
        account.setCreatedDate(new Date());
    }

    setupAddressesOnCreate(account) {
        account.setAddresses(this.getAllAccountAddresses(account));
    }

    getAllAccountAddresses(account) {
        const addresses = new Set();
        addresses.add(account.getHomeAddress());
        addresses.add(account.getWorkAddress());
        addresses.add(account.getAdditionalAddress());
        return addresses;
    }

    setAccountManager(accountManager) {
        this.accountManager = accountManager;
    }

    setPasswordChecker(passwordChecker) {
        this.passwordChecker = passwordChecker;
    }
}
