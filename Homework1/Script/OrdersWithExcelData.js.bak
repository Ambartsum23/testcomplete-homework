function OrdersWithExcelData()
{
  TestedApps.Orders.Run();
  Project.Variables.ExcelData.Reset();
  for(; !Project.Variables.ExcelData.IsEOF();)
  {
  
    Aliases.Orders.Main.Menu.ClickItem(4, false);

    Aliases.Orders.OrderForm.Group.Customer.SetText(Project.Variables.ExcelData.Value("customerName"));
    Aliases.Orders.OrderForm.Group.Street.SetText(Project.Variables.ExcelData.Value("street"));
    Aliases.Orders.OrderForm.Group.City.SetText(Project.Variables.ExcelData.Value("city "));
    Aliases.Orders.OrderForm.Group.State.SetText(Project.Variables.ExcelData.Value("state"));
    Aliases.Orders.OrderForm.ButtonOK.ClickButton();
    Project.Variables.ExcelData.Next();
  }

  Aliases.Orders.Main.Close();

  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}