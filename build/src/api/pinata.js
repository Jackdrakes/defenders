import axios from 'axios'
import { mintAchievement } from './operations/achievement';


const jsonToPinata = async (json) =>  {

    try {

        const data = JSON.stringify(json);

        var config = {
            method: 'post',
            url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwOGY3NzU0ZC04YjYyLTQ1NDMtYTZjNC04OTg0MzllYTI1OGMiLCJlbWFpbCI6InVkaXQuZHVkZTAxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJjOTgwMDhjY2FkMGE4Mzk4NDY4ZiIsInNjb3BlZEtleVNlY3JldCI6ImI5MjVlOGE5NGYxYWExZGJiOGJkODVhMzc2YWM1Mjc4NDdkYWE0ZDNiZDNhMzdhYWEyZTg0ZTgzYzkwNWQxOWUiLCJpYXQiOjE2NTk2MjI2NjN9.iUZgy5xDnb8c7BD-m3G3dRovNClS4c8nzSoq8u2hb0Q',
            },
            data : data
          };
          
          const res = await axios(config);
          
          console.log(res.data);


        return{
            sucess : true,
        };

    } catch (error) {
        console.log(error);
        return{
            sucess:false,
        };
        
    }

}

export const pinataWrapper = async (wallet, id , obj) =>  {

    try {

        let data = {};

        if(id === 1){
            // certi
            data.name = obj.name;
            data.description = obj.description;
            data.artifactUri = "ipfs://QmYqP7BnS2cPjkzk1QnovUvFw8oW2ZMiGf9X1XjvgNemr8";
            data.displayUri = "ipfs://QmYqP7BnS2cPjkzk1QnovUvFw8oW2ZMiGf9X1XjvgNemr8";
            data.thumbnailUri = "ipfs://QmYqP7BnS2cPjkzk1QnovUvFw8oW2ZMiGf9X1XjvgNemr8";
            data.decimals = 0 ;

            data.attributes= [
                {
                  "name": "Student Name",
                  "value": obj.sName
                },
                {
                  "name": "Position",
                  "value": obj.sPosition
                }
              ];

              data.creators =  [
                "tz1NaGu7EisUCyfJpB16ktNxgSqpuMo8aSEk"
              ];
              data.isBooleanAmount = false;
              data.symbol = "CERT";
              data.rights =  "All right reserved.";
              data.shouldPreferSymbol = true;
        

        }
        else if(id === 2){
            // trophy

            data.name = obj.name;
            data.description = obj.description;
            data.artifactUri = "ipfs://QmQcRYop7CetsFyR6ZCurh7ee3gnFLx574JtANrn8VDy5p";
            data.displayUri = "ipfs://QmQcRYop7CetsFyR6ZCurh7ee3gnFLx574JtANrn8VDy5p";
            data.thumbnailUri = "ipfs://QmQcRYop7CetsFyR6ZCurh7ee3gnFLx574JtANrn8VDy5p";
            data.decimals = 0 ;

            data.attributes = [
              {
                "name": "Student Name",
                "value": obj.sName,
              },
              {
                "name": "Event Name",
                "value": obj.event,
              }
              ,
              {
                "name": "Sport",
                "value": obj.sport,
              }
              ,
              {
                "name": "Position",
                "value": obj.sPosition,
              }
            ];

            data.creators =  [
                "tz1NaGu7EisUCyfJpB16ktNxgSqpuMo8aSEk"
              ];
            data.isBooleanAmount = false;
              data.symbol = "TROPH";
              data.rights =  "All right reserved.";
              data.shouldPreferSymbol = true;

        }else if (id === 3){
            // degree

            data.name = obj.name;
            data.description = obj.description;
            data.artifactUri = "ipfs://QmUDnTrbPT2Wf1h3ynFochYKUFrSHF3fi43NQtyokovrDM";
            data.displayUri = "ipfs://QmUDnTrbPT2Wf1h3ynFochYKUFrSHF3fi43NQtyokovrDM";
            data.thumbnailUri = "ipfs://QmUDnTrbPT2Wf1h3ynFochYKUFrSHF3fi43NQtyokovrDM";
            data.decimals = 0 ;


            data.attributes = [
              {
                "name": "Student Name",
                "value": obj.sName,
              },
              {
                "name": "Course",
                "value": obj.course,
              }
              ,
              {
                "name": "CGPA",
                "value": obj.cgpa,
              }
            ];
            
            data.creators =  [
                "tz1NaGu7EisUCyfJpB16ktNxgSqpuMo8aSEk"
              ];
            data.isBooleanAmount = false;
              data.symbol = "DEG";
              data.rights =  "All right reserved.";
              data.shouldPreferSymbol = true;
        }

        console.log("inside piniat",data);
        const res = await jsonToPinata(data);
        console.log(res);
        // const res2 = mintAchievement(res,wallet)
        return{
            sucess : true,
        };

    } catch (error) {
        console.log(error);
        return{
            sucess:false,
        };
        
    }

}
