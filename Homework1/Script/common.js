﻿function getDataFromDb(queryString,fieldNames){

    Delay(2000);
        var Qry1;
        var results=[];

        Qry1 = ADO.CreateADOQuery();

  Qry1.ConnectionString = "Provider=SQLOLEDB.1;Server=localhost;"  +
   "Database=orders;Uid=testAutomation; Pwd=Testautomation123;"

            Qry1.SQL = queryString;           

        Qry1. Open();

        Qry1.First();

        while (!Qry1.EOF) {

          for(i=0;i<fieldNames.length;i++)

        results.push(Qry1.FieldByName(fieldNames[i]).Value)

        Qry1.Next();

        }
        Qry1.Close();
        return results; 
}

module.exports.getDataFromDb=getDataFromDb
