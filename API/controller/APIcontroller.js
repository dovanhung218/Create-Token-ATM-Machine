const SmartContractDAO = require("./../data/smartContractDAO")
const helper = require('./helper')
exports.withdraw=async function withdraw(req,res){
    try {
        let {address,amount} = req.body;
        if (address===undefined||amount===undefined||amount<=0) {
           return res.status(400).json(helper.APIReturn(101,"Bad request")) 
        }

        console.log("call smartcontract");
        //send token
        let dao = new SmartContractDAO()
        let trans = await dao.withdraw(address,amount)
        console.log(trans);

        return res.status(200).json(helper.APIReturn(0,{
            "to":address,
            "amount":amount,
            "txHash":trans
        },"success"))
    } catch (error) {
        console.log(error);
        res.status(500).json(helper.APIReturn(101,"Somthing is wrong"))
    }
}