const XeroClient = require('xero-node').AccountingAPIClient;


(async function(){
  let xero = new XeroClient(config);

  const result = await xero.invoices.get({'Statuses':'SUBMITTED'});
  console.log(result.Invoices)

  json = result.Invoices
  for(let i=0 ; i < Object.keys(json).length ; i++){
    console.log(json[i].InvoiceID)
    console.log(json[i].Date,json[i].DueDate)
    json[i].Date = json[i].DueDate
    console.log(json[i].Date,json[i].DueDate)
    await xero.invoices.update(json[i])
  }

})();
