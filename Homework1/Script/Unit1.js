function Test1()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  //Clicks the 4 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(68, 11);
  //Enters the text 'Ambartsum' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Ambartsum");
  //Enters '[Tab]' in the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Keys("[Tab]");
  //Enters the text 'Str' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("Str");
  //Enters '[Tab]' in the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Keys("[Tab]");
  //Enters the text 'Tb' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("Tb");
  //Enters '[Tab]' in the 'City' object.
  Aliases.Orders.OrderForm.Group.City.Keys("[Tab]");
  //Enters the text 'St' in the 'State' text editor.
  Aliases.Orders.OrderForm.Group.State.SetText("St");
  //Enters '[Tab]' in the 'State' object.
  Aliases.Orders.OrderForm.Group.State.Keys("[Tab]");
  //Enters the text '0101' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("0101");
  //Enters '[Tab]' in the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Keys("[Tab]");
  //Enters '[Tab]' in the 'Visa' object.
  Aliases.Orders.OrderForm.Group.Visa.Keys("[Tab]");
  //Enters '[Tab]' in the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Keys("[Tab]");
  //Clicks the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Click(83, 5);
  //Enters the text '000222222' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("000222222");
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.ProductNames object equals 'MyMoney'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wText", cmpEqual, "MyMoney");
  //Checks whether the 'wItemCount' property of the Aliases.Orders.OrderForm.Group.ProductNames object equals 3.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.ProductNames, "wItemCount", cmpEqual, 3);
  //Checks whether the 'wChecked' property of the Aliases.Orders.OrderForm.Group.Visa object equals True.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Visa, "wChecked", cmpEqual, true);
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.Customer object equals 'Ambartsum'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "Ambartsum");
}