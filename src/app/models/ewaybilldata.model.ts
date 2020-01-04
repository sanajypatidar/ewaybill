export class Ewaybilldata {
    supplyType:string;
    subSupplyType:string;
    subSupplyDesc:string;
    docType:string;
    docNo:string;
    docDate:string;
    fromGstin:string;
    fromTrdName:string;
    fromAddr1:string;
    fromAddr2:string;
    fromPlace:string;
    fromPincode:number;
    actFromStateCode:number;
    fromStateCode:number;
    toGstin:string;
    toTrdName:string;
    toAddr1:string;
    toAddr2:string;
    toPlace:string;
    toPincode:number;
    actToStateCode:number;
    toStateCode:number;
    transactionType:number;
    dispatchFromGSTIN:string;
    dispatchFromTradeName: string;
    shipToGSTIN:string;
    shipToTradeName:string;
    otherValue: number;
    totalValue:number;
    cgstValue:number;
    sgstValue:number;
    igstValue:number;
    cessValue:number;
    cessNonAdvolValue:number;
    totInvValue:number;
    transporterId:string;
    transporterName:string;
    transDocNo:string;
    transMode:string;
    transDistance:string;
    transDocDate:string;
    vehicleNo:string;
    vehicleType:string;
    itemList:[{
    productName:string;
    productDesc:string;
    hsnCode:number
    quantity:number;
    qtyUnit:string;
    cgstRate:0,
    sgstRate:0,
    igstRate:3,
    cessRate:0,
    cessNonAdvol:0,
    taxableAmount:5609
    }]
}







"supplyType":"O",
"subSupplyType":"1",
"subSupplyDesc":" ",
"docType":"INV",
"docNo":"111-3150",
"docDate":"15/12/2017",
"fromGstin":"29AACCH2364P1Z3",
"fromTrdName":"welton",
"fromAddr1":"2ND CROSS NO 59  19  A",
"fromAddr2":"GROUND FLOOR OSBORNE ROAD",
"fromPlace":"FRAZER TOWN",
"fromPincode":263652,
"actFromStateCode":5,
"fromStateCode":5,
"toGstin":"02EHFPS5910D2Z0",
"toTrdName":"sthuthya",
"toAddr1":"Shree Nilaya",
"toAddr2":"Dasarahosahalli",
"toPlace":"Beml Nagar",
"toPincode":176036,
"actToStateCode":2,
"toStateCode":2,
"transactionType":4,
"dispatchFromGSTIN":"29AAAAA1303P1ZV",
"dispatchFromTradeName":"ABC Traders",
"shipToGSTIN":"29ALSPR1722R1Z3",
"shipToTradeName":"XYZ Traders",
"otherValue": -100,
"totalValue":56099,
"cgstValue":0,
"sgstValue":0,
"igstValue":300.67,
"cessValue":400.56,
"cessNonAdvolValue":400,
"totInvValue":68358,
"transporterId":"05AAACH6188F1ZM",
"transporterName":"",
"transDocNo":"",
"transMode":"1",
"transDistance":"656",
"transDocDate":"",
"vehicleNo":"PVC1234",
"vehicleType":"R",
"itemList":[{
"productName":"Wheat",
"productDesc":"Wheat",
"hsnCode":1001,
"quantity":4,
"qtyUnit":"BOX",
"cgstRate":0,
"sgstRate":0,
"igstRate":3,
"cessRate":0,
"cessNonAdvol":0,
"taxableAmount":5609