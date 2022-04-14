function Test2()
{

  TestedApps.Orders.Run();
  Aliases.Orders.MainForm.ToolBar.ClickItem(4, false);
  //Clicks the 'Customer2' object.
  Aliases.Orders.OrderForm.Group.Customer2.Click(47, 12);
  //Enters the text 'Mariami' in the 'Customer2' text editor.
  Aliases.Orders.OrderForm.Group.Customer2.SetText("Mariami");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(46, 0);
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(49, 8);
  //Enters the text 'Laituri' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("Laituri");
  //Clicks the 'City' object.
  Aliases.Orders.OrderForm.Group.City.Click(62, 8);
  //Enters the text 'Tbilisi' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("Tbilisi");
  //Clicks the 'State' object.
  Aliases.Orders.OrderForm.Group.State.Click(93, 3);
  //Enters the text 'St' in the 'State' text editor.
  Aliases.Orders.OrderForm.Group.State.SetText("St");
  //Clicks the 'Zip' object.
  Aliases.Orders.OrderForm.Group.Zip.Click(41, 10);
  //Enters the text '0101' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("0101");
  //Clicks the 'CardNo' object.
  Aliases.Orders.OrderForm.Group.CardNo.Click(201, 12);
  //Enters the text '11122222' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("11122222");
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.Customer2 object equals 'Mariami'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer2, "wText", cmpEqual, "Mariami");
  //Clicks the 'Street' object.
  Aliases.Orders.OrderForm.Group.Street.Click(50, 11);
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.Street object equals 'Laituri'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Street, "wText", cmpEqual, "Laituri");
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.City object equals 'Tbilisi'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.City, "wText", cmpEqual, "Tbilisi");
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.State object equals 'St'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.State, "wText", cmpEqual, "St");
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.Zip object equals '0101'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Zip, "wText", cmpEqual, "0101");
  //Checks whether the 'wChecked' property of the Aliases.Orders.OrderForm.Group.Visa object equals True.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Visa, "wChecked", cmpEqual, true);
  //Checks whether the 'wText' property of the Aliases.Orders.OrderForm.Group.CardNo object equals '11122222'.
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.CardNo, "wText", cmpEqual, "11122222");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Checks whether the 'wItemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 1.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 1);
  //Clicks the '1' subitem of the 'Mariami' item of the 'OrdersView' list view.
  Aliases.Orders.MainForm.OrdersView.ClickItem("Mariami", "1");
  //Clicks the 6 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(6, false);
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  //Checks whether the 'wItemCount' property of the Aliases.Orders.MainForm.OrdersView object equals 0.
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpEqual, 0);
}