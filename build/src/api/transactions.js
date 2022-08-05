import axios from 'axios';
import { NcuCoinDistributor , NCUCoin , Canteen , FoodNFT ,AchievementNFT ,  } from 'common/constants';

export const getUserTransactions = async (address) => {
    try {
      console.log(address);

      const response = await Promise.all(
          axios.get(`https://api.ghostnet.tzkt.io/v1/accounts/${address}/operations?target=${NcuCoinDistributor}`),
          axios.get(`https://api.ghostnet.tzkt.io/v1/accounts/${address}/operations?target=${NCUCoin}`),
          axios.get(`https://api.ghostnet.tzkt.io/v1/accounts/${address}/operations?target=${Canteen}`),
          axios.get(`https://api.ghostnet.tzkt.io/v1/accounts/${address}/operations?target=${FoodNFT}`),
          axios.get(`https://api.ghostnet.tzkt.io/v1/accounts/${address}/operations?target=${AchievementNFT}`),
      );    

      transactions = [];

    for(var i = 0 ; i< response.length; i++){
        for(var j =0 ; j< response[i].data.length ; j++){
            if(response[i].data[j].type === "transaction")
            transactions.push({time : response[i].data[j].timestamp , hash : response[i].data[j].hash , entrypoint : response[i].data[j].parameter.entrypoint});
        }

    }

    transactions.sort((a, b) => {
        return a.time - b.time;
    });

    console.log(transactions);

      return {
        success: true,
        transactions,
      };
    } catch (error) {
      return {
        success: false,
        transactions: [],
        error: error,
      };
    }
  };