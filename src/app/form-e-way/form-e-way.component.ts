import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { error } from '@angular/compiler/src/util';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { Router } from '@angular/router';
// import { DatePipe } from '@angular/common';
// import { ewaybillData } from '../form-e-way/ewaybill.model';
import { Ewaybilldata} from '../models/ewaybilldata.model'
import { from } from 'rxjs';



@Component({
  selector: 'app-form-e-way',
  templateUrl: './form-e-way.component.html',
  styleUrls: ['./form-e-way.component.scss']
})
export class FormEWayComponent implements OnInit {
  ewaybillData: Ewaybilldata = new Ewaybilldata;

  EwayForm:FormGroup;
  public submitResponse:any;
  public errorMesssage=""
  public successMessage=""
  public stateData:any=[
    {
      "state_name":"Andaman and Nicobar Islands",
         "state_code":35
    
    },
    {
      "state_name":"Andhra Pradesh",
         "state_code":28
         
    },
    {
      "state_name":"Andhra Pradesh (New)",
         "state_code":37
         
    },
    {
      "state_name":"Arunachal Pradesh",
         "state_code":12
         
    },
    {
      "state_name":"Assam",
         "state_code":18
         
    },
    {
      "state_name":"Bihar",
         "state_code":10
         
    },
    {
      "state_name":"Chandigarh",
         "state_code":4
         
    },
    {
      "state_name":"Chattisgarh",
         "state_code":22
         
    },
    {
      "state_name":"Dadra and Nagar Haveli",
         "state_code":26
         
    },
    {
      "state_name":"Daman and Diu",
         "state_code":25
         
    },
    {
      "state_name":"Delhi",
         "state_code":7
         
    },
    {
      "state_name":"Goa",
         "state_code":30
         
    },
    {
      "state_name":"Gujarat",
         "state_code":24
         
    },
    {
      "state_name":"Haryana",
         "state_code":6
         
    },
    {
      "state_name":"Himachal Pradesh",
         "state_code":2
         
    },
    {
      "state_name":"Jammu and Kashmir",
         "state_code":1
         
    },
    {
      "state_name":"Jharkhand",
         "state_code":20
         
    },
    {
      "state_name":"Karnataka",
         "state_code":29
         
    },
    {
      "state_name":"Kerala",
         "state_code":32
         
    },
    {
      "state_name":"Lakshadweep Islands",
         "state_code":31
         
    },
    {
      "state_name":"Madhya Pradesh",
         "state_code":23
         
    },
    {
      "state_name":"Maharashtra",
         "state_code":27
         
    },
    {
      "state_name":"Manipur",
         "state_code":14
         
    },
    {
      "state_name":"Meghalaya",
         "state_code":17
         
    },
    {
      "state_name":"Mizoram",
         "state_code":15
         
    },
    {
      "state_name":"Nagaland",
         "state_code":13
         
    },
    {
      "state_name":"Odisha",
         "state_code":21
         
    },
    {
      "state_name":"Pondicherry",
         "state_code":34
          
    },
    {
      "state_name":"Punjab",
         "state_code":3
         
    },
    {
      "state_name":"Rajasthan",
         "state_code":8
         
    },
    {
      "state_name":"Sikkim",
         "state_code":11
         
    },
    {
      "state_name":"Tamil Nadu",
         "state_code":33
         
    },
    {
      "state_name":"Telangana",
         "state_code":36
         
    },
    {
      "state_name":"Tripura",
         "state_code":16
         
    },
    {
      "state_name":"Uttar Pradesh",
         "state_code":9
         
    },
    {
      "state_name":"Uttarakhand",
         "state_code":5
         
    },
    {
      "state_name":"West Bengal",
         "state_code":19
         
    }
    
  ]
  public number:number;
  userModel={supplyType:"O",subSupplyType:"1",subSupplyDesc:"", docType:"", docDate:"", fromGstin:"", fromTrdName:"",fromAddr1:"",
  fromAddr2:"GROUND FLOOR OSBORNE ROAD",fromPlace:"", fromPincode:this.number,actFromStateCode:this.number, fromStateCode:this.number, toGstin:"", toAddr1:""
  ,toAddr2:"Dasarahosahalli", toPlace:"", toPincode:this.number, actToStateCode:this.number, toStateCode:this.number, transactionType:4, 
  dispatchFromGSTIN:"29AAAAA1303P1ZV", dispatchFromTradeName:"ABC Traders", shipToGSTIN:"29ALSPR1722R1Z3",shipToTradeName:"XYZ Traders",  otherValue:this.number, totalValue:this.number,cgstValue:0,
  sgstValue:0, igstValue:this.number,cessValue:this.number,cessNonAdvolValue:this.number, totInvValue:68358, 
 transDocNo:"", transMode:"", transDistance:"",transDocDate:"", vehicleNo:""  , vehicleType:"",itemList:[{
    productName:"",productDesc:"", hsnCode:this.number, quantity:this.number, qtyUnit:"",cgstRate:this.number,sgstRate:0,igstRate:this.number,cessRate:this.number,cessNonAdvol:this.number,taxableAmount:this.number        
  }]

    
 
 


}
customErrorMessages: ErrorMessage[] = [
  {
    error: 'required',
    format: (label, error) => `${label.toUpperCase()} required!`
  }, {
    error: 'pattern',
    format: (label, error) => `${label.toUpperCase()} DOESN'T LOOK RIGHT...`
  }
];
  constructor(private myservice:MyService, private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
   
    this.createForm()
    this.myservice.first().subscribe(res=>{
      console.log("success")
      console.log(res)
    
    })
  


  }



    createForm() {

      this.EwayForm = new FormGroup({
   
        supplyType: new FormControl('', [
          Validators.required,
        ]),
          subSupplyType:new FormControl('', [
            Validators.required,
          ]),
          // subSupplyDesc:new FormControl('', [
          //   Validators.required,
          // ]),
          docType: new FormControl('', [
            Validators.required,
          ]),
          docNo:new FormControl('', [
            Validators.required,
          ]),
          docDate: new FormControl('', [
            Validators.required
          ]),
          fromGstin: new FormControl('', [
            Validators.required,
          ]),
          fromTrdName:new FormControl('', [
            Validators.required,
          ]),
          fromAddr1: new FormControl('', [
            Validators.required,
          ]),
          // fromAddr2:new FormControl('', [
          //   Validators.required,
          // ]),
          fromPlace: new FormControl('', [
            Validators.required,
          ]),
          fromPincode: new FormControl('', [
            Validators.required,
          ]),
          // actFromStateCode:new FormControl('', [
          //   Validators.required,
          // ]),
          fromStateCode: new FormControl(null, [
            Validators.required,
          ]),
          toGstin: new FormControl('', [
            Validators.required,
          ]),
          toTrdName: new FormControl('', [
            Validators.required,
          ]),
          toAddr1: new FormControl('', [
            Validators.required,
          ]),
          // toAddr2: new FormControl('', [
          //   Validators.required,
          // ]),
          toPlace: new FormControl('', [
            Validators.required,
          ]),
          toPincode: new FormControl('', [
            Validators.required,
          ]),
          // actToStateCode: new FormControl('', [
          //   Validators.required,
          // ]),
          toStateCode: new FormControl(null, [
            Validators.required,
          ]),



          // transactionType:new FormControl('', [
          //   Validators.required,
          // ]),
          // dispatchFromGSTIN:new FormControl('', [
          //   Validators.required,
          // ]),
          // dispatchFromTradeName:new FormControl('', [
          //   Validators.required,
          // ]),
          // shipToGSTIN:new FormControl('', [
          //   Validators.required,
          // ]),
          // shipToTradeName: new FormControl('', [
          //   Validators.required,
          // ]),
          otherValue: new FormControl(null, [
            Validators.required,
          ]),
          totalValue: new FormControl(null, [
            Validators.required,
          ]),
          // cgstValue: new FormControl('', [
          //   Validators.required,
          // ]),
          sgstValue: new FormControl(null, [
            Validators.required,
          ]),
          igstValue: new FormControl(null, [
            Validators.required,
          ]),
          cessValue:new FormControl(null, [
            Validators.required,
          ]),
          cessNonAdvolValue: new FormControl(null, [
            Validators.required,
          ]),
          // totInvValue: new FormControl('', [
          //   Validators.required,
          // ]),
          transporterId:new FormControl('', [
            Validators.required,
          ]),
          transporterName: new FormControl('', [
            Validators.required,
          ]),
          transDocNo: new FormControl('', [
            Validators.required,
          ]),
          transMode: new FormControl('', [
            Validators.required,
          ]),
          transDistance: new FormControl('', [
            Validators.required,
          ]),
          transDocDate: new FormControl('', [
            Validators.required,
          ]),
    
          vehicleNo: new FormControl('', [
            Validators.required,Validators.required,Validators.minLength(7)
          ]),
          vehicleType:new FormControl('', [
            Validators.required,
          ]),
          // itemList:new FormControl('', [
          //   Validators.required,
          // ]),
          productName: new FormControl('', [
            Validators.required,
          ]),
          productDesc: new FormControl('', [
            Validators.required,
          ]),
          hsnCode: new FormControl(null, [
            Validators.required,
          ]),
          quantity: new FormControl(null, [
            Validators.required,
          ]),
          qtyUnit:new FormControl('', [
            Validators.required,
          ]),
          cgstRate:new FormControl(null, [
            Validators.required,
          ]),
          // sgstRate: new FormControl('', [
          //   Validators.required,
          // ]),
          igstRate:new FormControl(null, [
            Validators.required,
          ]),
          cessRate:new FormControl(null, [
            Validators.required,
          ]),
          cessNonAdvol: new FormControl(null, [
            Validators.required,
          ]),
          taxableAmount:new FormControl(null, [
            Validators.required,
          ]),
    

      
      })

    // this.EwayForm = this.fb.group({
    //   supplyType: ['',Validators.required],
    //   subSupplyType: ['',Validators.required],
    //   subSupplyDesc:['', Validators.required],
    //   docType: ['',Validators.required],
    //   docNo: ['',Validators.required],
    //   docDate: ['',Validators.required],
    //   fromGstin: ['',Validators.required],
    //   fromTrdName: ['',Validators.required],
    //   fromAddr1: ['',Validators.required],
    //   fromAddr2: ['',Validators.required],
    //   fromPlace: ['',Validators.required],
    //   fromPincode: [null,Validators.required],
    //   actFromStateCode: ['',Validators.required],
    //   fromStateCode: ['',Validators.required],
    //   toGstin: ['',Validators.required],
    //   toTrdName: ['',Validators.required],
    //   toAddr1: ['',Validators.required],
    //   toAddr2: ['',Validators.required],
    //   toPlace: ['',Validators.required],
    //   toPincode: ['',Validators.required],
    //   actToStateCode: ['',Validators.required],
    //   toStateCode: ['',Validators.required],
    //   transactionType: ['',Validators.required],
    //   dispatchFromGSTIN: ['',Validators.required],
    //   dispatchFromTradeName: ['',Validators.required],
    //   shipToGSTIN: ['',Validators.required],
    //   shipToTradeName: ['',Validators.required],
    //   otherValue: ['',Validators.required],
    //   totalValue: ['',Validators.required],
    //   cgstValue: ['',Validators.required],
    //   sgstValue: ['',Validators.required],
    //   igstValue: ['',Validators.required],
    //   cessValue: ['',Validators.required],
    //   cessNonAdvolValue: ['',Validators.required],
    //   totInvValue: ['',Validators.required],
    //   transporterId: ['',Validators.required],
    //   transporterName: ['',Validators.required],
    //   transDocNo: ['',Validators.required],
    //   transMode: ['',Validators.required],
    //   transDistance: ['',Validators.required],
    //   transDocDate: ['',Validators.required],

    //   vehicleNo: ['',Validators.required],
    //   vehicleType: ['',Validators.required],
    //   itemList: ['',Validators.required],
    //   productName: ['',Validators.required],
    //   productDesc: ['',Validators.required],
    //   hsnCode: ['',Validators.required],
    //   quantity: ['',Validators.required],
    //   qtyUnit: ['',Validators.required],
    //   cgstRate: ['',Validators.required],
    //   sgstRate: ['',Validators.required],
    //   igstRate: ['',Validators.required],
    //   cessRate: ['',Validators.required],
    //   cessNonAdvol: ['',Validators.required],
    //   taxableAmount: ['',Validators.required],

    // });
  }

  submit(){

    console.log(this.stateData[0].state_code+this.stateData[0].state_code)

   var obj={
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
    }]
    }
    console.log(this.userModel)
    this.myservice.submit1(this.userModel)
    .subscribe(res=>{
      this.submitResponse=res
      console.log(this.submitResponse)
      if(this.submitResponse.status==0){
        this.errorMesssage="Something went wrong..."
       
      }else if(this.submitResponse.status==1){
        this.successMessage="Submitted Successfullly......."

        console.log("SUCCESS")
      }



      // this.router.navigate(['/billsystem'])

    })
    
    
   
  }
  onChangeFromState(data){
    console.log(data)
    this.userModel.fromStateCode=data;
    this.userModel.actFromStateCode=data;
    console.log(this.userModel.fromStateCode, this.userModel.actFromStateCode)
  }

  onChangeToState(data){
    console.log(data)
    this.userModel.toStateCode=data;
    this.userModel.actToStateCode=data;
    console.log(this.userModel.toStateCode, this.userModel.actToStateCode)
  }
  

}
