interface Partner {
  GID: string;
  Surname: string;
  FirstName: string;
  Tel1: string;
  EMail: string;
}

interface UserPerms {
  isElectricalEngineer: boolean;
  isSeniorElectricalEngineer: boolean;
  isOrderProcessor: boolean;
  isSeniorOrderProcessor: boolean;
  isPrueffeldPruefer: boolean;
  isAssembly: boolean;
  isLvAssembly: boolean;
  isCC: boolean;
  isSeniorCC: boolean;
  isParisExtLVAssembly: boolean;
  isParisExtElecEngineer: boolean;
  isParisAdmin: boolean;
  isParisFinalTester: boolean;
}

export interface UserModel {
  Partner: Partner;
  UserPerms: UserPerms;
}
