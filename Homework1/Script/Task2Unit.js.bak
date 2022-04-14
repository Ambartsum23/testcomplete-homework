function Test4()
{

  TestedApps.Orders.Run();
  Aliases.Orders.Main.Menu.ClickItem(4, false);
  Aliases.Orders.OrderForm.Group.Customer.SetText("Ambartsum");
  Aliases.Orders.OrderForm.Group.Street.SetText("Laituri");
  Aliases.Orders.OrderForm.Group.City.SetText("Tbilisi");
  Aliases.Orders.OrderForm.Group.State.SetText("Str");
  Aliases.Orders.OrderForm.Group.Zip.SetText("0101");
  Aliases.Orders.OrderForm.Group.CardNo.SetText("0101010");
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  
  
  //Compares the OrdersView2 Stores item with the contents of the control.
  Tables.OrdersView2.Check();
  //Checks whether the 'wItemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.Main.OrdersView, "wItemCount", cmpEqual, 1);
  //Clicks the 6 item of the 'ToolBar' toolbar.
  Aliases.Orders.Main.Menu.ClickItem(6, false);
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  //Checks whether the 'wItemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.Main.OrdersView, "wItemCount", cmpEqual, 0);
  
  Aliases.Orders.MainForm.Close();
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}