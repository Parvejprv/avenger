/*
    Challenge:- Banking System 
*/

package bankingsystem;

import java.util.Scanner;

/*
 * @author  :   Parvej Alam
 * email    :   parvejprv1@gmail.com
 */
/*
Note:- This is the Banking System simple console based management.
*/

class Account{
    private String accNo;
    private String name;
    private String address;
    private String phno;
    private String dob;
    private double balance;
    
    // Constructor
    public Account(String accNo, String name, String address, String phno, String dob, double balance){
        this.accNo = accNo;
        this.name = name;
        this.address = address;
        this.phno = phno;
        this.dob = dob;
        this.balance = balance;
    }
    
    // Getter 
    public String getAccountNumber(){return accNo;}
    public String getAccountHolderName(){return name;}
    public String getAddress(){return address;}
    public String getPhoneNumber(){return phno;}
    public String getDateOfBirth(){return dob;}
    public double getBalance(){return balance;}
    
    
    // Setter
    public void setBalance(double balance){this.balance = balance;}
    
    // Account Details method
    @Override
    public String toString(){
        return "Account Details: \n" +
                "\nAccount Number: " + accNo +
                "\nAccount Holder Name: " + name +
                "\nAddress: " + address +
                "\nPhone Number: " + phno +
                "\nDate of Birth: " + dob +
                "\nBalance: " + balance 
                ;
    }
}

class SavingAccount extends Account{
    
    // Constructor
    public SavingAccount(String accNo, String name, String address, String phno, String dob, double balance) {
        super(accNo, name, address, phno, dob, balance);
    }
    
    // method to deposit money
    public  void deposit(double amount){
        if(amount  > 0){
            // add the amount to the balance
            setBalance(getBalance() + amount);
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }
    
    // Method to withdraw the amount, Enter the amount that
    public void withdraw(double amount){
        if(amount >0 && amount <= getBalance()){
            setBalance(getBalance() - amount);
            System.out.println("Withdrawn: " + amount + " Successfully.");
        } else {
            System.out.println("Invalid or insufficient funds for withdrawn");
        }
    }
    
    // Method for fixed deposit
    public void fixedDeposit(double amount, int years){
        if(amount > 0){
            double interestRate = 0.05;     // example ke liye
            double maturityAmount = amount * Math.pow(1 + interestRate, years);
            System.out.println("Fixed Deposit of " + amount + " for " + years + " years with mature of " + maturityAmount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    // Method to liquidate a fixed deposit (simplified)
    public void liquidate(){
        System.out.println("Fixed deposit liquidated.");
    }
    
}


class LoanAccount extends Account{
    
    private double loanAmount;
    
    public LoanAccount(String accNo, String name, String address, String phno, String dob, double balance, double loanAmount){
        super(accNo, name, address, phno, dob, balance);
        this.loanAmount = loanAmount;
    }
    
    // Method to pay EMI
    public void payEMI(double emiAmount){
        // total EMI count
        // paid EMI
        // paid EMI
        
        // when should a person able to pay EMI, if emiAmount is greater than 0, and emiAmount is less than loanAmount
        if(emiAmount > 0 && emiAmount <= loanAmount){
            loanAmount -= emiAmount;
            System.out.println("Paid EMI: " + emiAmount);
            System.out.println("Remaining Loan Amount: " + loanAmount);
        } else {
            System.out.println("Invalid EMI amount"); 
        }
    }
    
    // Method to top up loan
    public void topUpLoan(double topUpAmount){
        if(topUpAmount > 0){
            loanAmount += topUpAmount;
            System.out.println("Loan topped up by: " + topUpAmount);
            System.out.println("New Loan Amount: " + loanAmount);
        } else {
            System.out.println("Invalid top-up amount");
        }
    }
    
    // Getter
    public double getLoanAmount(){
        return loanAmount;
    }
    
    // Setter
    public void setLoanAmount(double loanAmount){
        this.loanAmount = loanAmount;
    }
    
    @Override
    public String toString(){
        return super.toString() + 
                "\nLoan Amount: " + loanAmount;
    }
    
}


public class BankingSystem {
        private static Scanner sc = new Scanner(System.in);
        private static SavingAccount savingAccount;
        private static LoanAccount loanAccount;
        
    public static void main(String[] args) {
       
        boolean exit = false;
        
        while(!exit){
            System.out.println("\nBanking System Menu");
            System.out.println("\n1.  Create Saving Account");
            System.out.println("\n2.  Create Loan Account");
            System.out.println("\n3.  Deposit in Saving Account");
            System.out.println("\n4.  Withdraw from SavingAccount");
            System.out.println("\n5.  Fixed Deposit in Saving Account");
            System.out.println("\n6.  Liquidate Fixed Deposit");
            System.out.println("\n7.  Pay EMI for Loan Account");
            System.out.println("\n8.  Top Up Loan Account");
            System.out.println("\n9.  Desplay Saving Account Details");
            System.out.println("\n10. Desplay Loan Account Details");
            System.out.println("\n11. Exit");
            System.out.println("\nChoose an option: ");

            
            int choice = sc.nextInt();
            sc.nextLine();      // Cosume newline after integer
            
            switch(choice){
                case 1:
                    // Creating a Saving Account of the Account Holder
                    createSavingAccount();
                    break;
                case 2: 
                    // Creating a Loan Account of the Account Holder
                    createLoanAccount();
                    break;
                case 3:
                    // Deposit, here we have to check if the saving account is not null
                    if(savingAccount != null){
                        System.out.println("Enter amount to deposit: ");
                        double depositAmount = sc.nextDouble();
                        savingAccount.deposit(depositAmount);
                        System.out.println("Amount " + depositAmount + " deposited to " + savingAccount + " Successfully");
                    } else {
                        System.out.println("No Saving Account found. Please create one first.");
                    }
                    break;
                case 4:
                    // Withdraw, amount from saving account
                    if(savingAccount != null){
                        System.out.println("Enter amount to withdraw: ");
                        double withdrawAmount = sc.nextDouble();
                        savingAccount.withdraw(withdrawAmount);
                        System.out.println("Amount " + withdrawAmount + " withdraw from " + savingAccount + " Successfully");
//                        System.out.println("");
                    } else {
                        System.out.println("No Saving Account found. Please create one first.");
                    }
                    break;
                case 5:
                    // Fixed deposit for saving account
                    if(savingAccount != null){
                        System.out.println("Enter amount for fixed deposit: ");
                        double fixedDepositAmount = sc.nextDouble();
                        System.out.println("Enter number of years: ");
                        int years = sc.nextInt();
                        savingAccount.fixedDeposit(fixedDepositAmount, years);
                        System.out.println("Amount " + fixedDepositAmount + " for " + years + " was fixed deposited from your account " + savingAccount + " Successfully.");
                        // Remaining balance
                    } else {
                        System.out.println("No Saving Account found. Please create one first.");
                    }
                    break;
                case 6:
                    // Liquidate for saving account
                    if(savingAccount != null){
                        savingAccount.liquidate();
                    } else {
                        System.out.println("No Saving Account found. Please create one first.");
                    }
                    break;
                case 7:
                    // Check for payEMI
                    if(loanAccount != null){
                        System.out.println("Enter EMI amount to pay: ");
                        double emiAmount = sc.nextDouble();
                        loanAccount.payEMI(emiAmount);
                        System.out.println("Amount " + emiAmount + " paid from your account " + savingAccount + " as an EMI, Successfully");
                    } else {
                        System.out.println("No Loan Account found. Please create one first.");
                    }
                    break;
                case 8:
                    // Top Up Amount
                    if(loanAccount != null){
                        System.out.println("Enter amount to top up loan: ");
                        double topUpAmount = sc.nextDouble();
                        loanAccount.topUpLoan(topUpAmount);
                        System.out.println("Amount " + loanAccount + " top up amount for your account " + savingAccount + " Successfully");
                    } else {
                        System.out.println("No Loan Account found. Please create one first.");
                    }
                    break;
                case 9:
                    // Display Saving Account Details
                    if(savingAccount != null){
                        System.out.println(savingAccount);
                    } else {
                        System.out.println("No Saving Account found. Please create one first.");
                    }
                    break;
                case 10:
                    // Display Loan Account Details
                    if(loanAccount != null){
                        System.out.println(loanAccount);
                    } else {
                        System.out.println("No Loan Account found. Please create one first.");
                    }
                    break;
                case 11:
                    // Exit
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid option. Please try again.");
                    
            }
        }
  
    }
    
    
    // Method to createSavingAccount
    private static void createSavingAccount(){
        // Let's take input for the Saving Account
        System.out.println("Enter Account Number: ");
        String accNo = sc.nextLine();
        
        System.out.println("Enter Account Holder Name: ");
        String name = sc.nextLine();
        
        System.out.println("Enter Address: ");
        String address = sc.nextLine();
        
        System.out.println("Enter Phone Number: ");
        String phno = sc.nextLine();
        
        System.out.println("Enter Date of Birth: ");
        String dob = sc.nextLine();
        
        System.out.println("Enter Balance: ");
        double balance = sc.nextDouble();
        
        
        
        savingAccount = new SavingAccount(accNo, name, address, phno, dob, balance);
        System.out.println("Saving Account created successfully.");
    }
    
    
    // Method to createLoanAccount
    private static void createLoanAccount(){
        // Let's take input for the Loan Account
        System.out.println("Enter Account Number: ");
        String accNo = sc.nextLine();
        
        System.out.println("Enter Account Holder Name: ");
        String name = sc.nextLine();
        
        System.out.println("Enter Address: ");
        String address = sc.nextLine();
        
        System.out.println("Enter Phone Number: ");
        String phno = sc.nextLine();
        
        System.out.println("Enter Date of Birth: ");
        String dob = sc.nextLine();
        
        System.out.println("Enter Balance: ");
        double balance = sc.nextDouble();
        
        System.out.println("Enter Loan Amount: ");
        double loanAmount = sc.nextDouble();
        
        
        
        loanAccount = new LoanAccount(accNo, name, address, phno, dob, balance, loanAmount);
        System.out.println("Loan Account created successfully.");
    }
    
}