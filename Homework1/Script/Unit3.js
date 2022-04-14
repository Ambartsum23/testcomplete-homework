function Test3()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  //Clicks the 4 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(102, 13);
  //Enters the text 'Mariami' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Mariami");
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
  //Clicks the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Click(33, 11);
  //Enters the text '01010' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("01010");
  //Clicks the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Click(193, 7);
  //Enters the text '01010101' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("01010101");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Compares the OrdersView1 Stores item with the contents of the control.
  Tables.OrdersView1.Check();
  //Checks whether the 'wItemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 1);
  //Clicks the 6 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(6, false);
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  //Checks whether the 'wItemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 0);
  //Closes the 'MainForm' window.
  Aliases.Orders.MainForm.Close();
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  //Closes the 'dlgSaveAs' window.
  Aliases.Orders.dlgSaveAs.Close();
  //Closes the 'MainForm' window.
  Aliases.Orders.MainForm.Close();
  //Clicks the 'btnNo' button.
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}