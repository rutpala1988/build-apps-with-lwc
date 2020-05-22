import { LightningElement,api, wire,track } from 'lwc';
import getOpportunities  from '@salesforce/apex/OpportunityController.getOpportunities';
const COLS=[{label:'Name',fieldName:'Name',cellAttributes: { alignment: 'left' }},{label:'Account Name',fieldName:'AccountName',cellAttributes: { alignment: 'left' }},{label:'Amount',fieldName:'Amount',type:'currency',cellAttributes: { alignment: 'left' }},{label:'Stage',fieldName:'StageName',cellAttributes: { alignment: 'left' }}];
const prodCols=[{label:'product Id',fieldName :'productId',type:'number',cellAttributes: { alignment: 'left' }},
                {label:'Product Name',fieldName :'productName',wrapText:true,cellAttributes: { alignment: 'left' }},
                {label:'Product Code',fieldName :'productCode',cellAttributes: { alignment: 'left' }},
                {label:'Description',fieldName :'description',wrapText:true,cellAttributes: { alignment: 'left' }},
                {label:'Price',fieldName :'price',type:'currency',cellAttributes: { alignment: 'left' }},
                {label:'Star Rating',fieldName :'starRating',type:'number',cellAttributes: { alignment: 'left' }}];
export default class ShowOppties extends LightningElement {
    @api acctId;
    @track columns=COLS;
    @track opptiesData;
    showProducts=false;
    pCols=prodCols;
    products=[
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6
        }
      ];
  
    @wire(getOpportunities,{acctId:'$acctId'})
    oppties({data,error}){
        if(data){
            let currentData=[];
            data.forEach(row => {
                let rowData={};
                rowData.Name=row.Name;
                rowData.AccountName=row.Account.Name;
                rowData.Amount=row.Amount;
                rowData.StageName=row.StageName;
                rowData.Id=row.Id;
                currentData.push(rowData);
            });
            this.opptiesData=currentData;
        }
        else if(error){
            console.log('Error is'+error);
        }
    }
    handleProductsDisplay(){
        this.showProducts=true;
    }
}