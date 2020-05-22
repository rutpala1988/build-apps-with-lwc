public with sharing class OpportunityController {
    public OpportunityController() {

    }
    @AuraEnabled(cacheable=true)
    public  static List<Opportunity> getOpportunities(String  acctId){
        return [SELECT Id,Name,Account.Name,Amount,StageName from Opportunity WHERE Account.Id=:acctId];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id,Name from Account where Id In (Select AccountId from Opportunity ) limit 10];
        
    }
}