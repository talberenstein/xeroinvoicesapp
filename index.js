const XeroClient = require('xero-node').AccountingAPIClient;

const config =  {
  "appType" : "private",
  "consumerKey": "4NJOXVJORY90ATTTEWQ8KNJETGZ6EO",
  "consumerSecret": "CSXUR7VBMKSA97HQA4UWBRQ96092R3",
  "privateKeyPath": "../privatekey.pem"
};

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
