import { LightningElement,wire,track} from 'lwc';
import getAccounts   from '@salesforce/apex/OpportunityController.getAccounts';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import bootstrap from '@salesforce/resourceUrl/bootstrap';
import Jquery from '@salesforce/resourceUrl/Jquery';
export default class MyComponent extends LightningElement {
    @wire(getAccounts)
    accts;
    @track sectionWrapper={};
    @track sectionName;
    @track showoppty;

    handleSectionToggle(event){
        this.sectionName=event.detail.openSections;
        this.sectionWrapper[this.sectionName]=true;
        this.oppty=this.sectionWrapper[this.sectionName];
    }
    handleClickSection(event){
        console.log('Section clicked is'+event.target.name);
        console.log('current section name is'+this.sectionName)
        if(this.sectionName === event.target.name){
            this.sectionWrapper[this.sectionName]=false;
            this.oppty=this.sectionWrapper[this.sectionName];
        }
    }

    // connectedCallback() {
    //     console.log('Inside connected call back');
    //     console.log('boostrap is'+bootstrap);
    //     console.log('Jquery is'+Jquery);
    //     Promise.all([
            
    //         loadScript(this, Jquery),
    //         loadScript(this, bootstrap + '/dist/js/bootstrap.min.js'),
    //         loadScript(this, bootstrap + '/js/dist/collapse.js'),
    //         loadStyle(this, bootstrap + '/dist/css/bootstrap.min.css')
            
    //     ]).then((event ) => {
    //         event.preventDefault();
    //         console.log('Loaded Bootstrap successfully');

    //     }).catch(error =>{
    //         console.log('error occured '+JSON.stringify(error));
    //     });
    // }
}