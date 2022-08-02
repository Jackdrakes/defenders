import { wallet , tezos , CheckIfWalletConnected} from "./wallet";
import { NcuCoinDistributor } from "../../common/constants";

export const claimDeanListAllowance = async (
    caller
  ) => {
    console.log("insdie")
    try {
      console.log("inside Claim D L");
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }
      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.claimDeanListAllowance().send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

export const claimSemestralAllowance = async (
    caller
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.claimSemestralAllowance().send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

// Admin Functions

export const addStudent = async (
    caller,
    studentAddress,
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.addStudent(studentAddress).send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

export const removeStudent = async (
    caller,
    studentAddress,
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.removeStudent(studentAddress).send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

export const addDeansStudent = async (
    caller,
    studentAddress,
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.addDeansStudent(studentAddress).send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

export const togglePause = async (
    caller
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.togglePause().send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

export const updateAdmin = async (
    caller,
    newAdmin
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.updateAdmin(newAdmin).send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

export const updateAmount = async (
    caller,
    newAmount
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.updateAmount(newAmount).send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

export const updateTime = async (
    caller,
    newTime
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.updateTime(newTime).send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };

export const updateToken = async (
    caller,
    newToken
  ) => {
    try {
     
      const WALLET_RESP = await CheckIfWalletConnected(wallet);
      if (!WALLET_RESP.success) {
        throw new Error('Wallet connection failed');
      }

      const contractInstance = await tezos.contract.at(NcuCoinDistributor);
      const op = await contractInstance.methods.updateToken(newToken).send();
      const hash = await op.confirmation(1);

      return {
        success: true,
        operationId: hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  };
