var common=require("common")

  function printName(){

      let name=common.getDataFromDb("SELECT top 1 customerName FROM [orders].[dbo].[orders]",["customerName"]);

      Log.Message(name)

    }
