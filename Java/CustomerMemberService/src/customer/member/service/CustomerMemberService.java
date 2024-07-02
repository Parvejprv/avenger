/*
    Challange:-  Customer and Member 
    =================================
    This is the challenges for Designing a class with inheritance, where Customer of a CellPhone has some features and services. 
    like:-
    - add a number to Contact
    - call a number or contact
    - send SMS
    - delete a number from contact
    - click a photo from cellphone
    - capture video
    - playing media

Note: Wrtite class for CellPhone, SmartPhone, Customer, and Member ( Let suppose if a customer is a permanent customer he may consider as member and they offers most of feature from our side.
*/


package customer.member.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

/**
 *
 * @author  :   Parvej Alam
 * Email    :   parvejprv1@gmail.com
 * 
 */



// CellPhone class (Parent class)
class CellPhone{
    private String phno;
    private String imie;
    private Map<String, String> contacts = new HashMap<>();
    
    // Getter methods
    public String getPhno(){ return phno; }
    public String getImie(){ return imie; }
    
    // Setter methods
    public void setPhno(String phno){ this.phno = phno; }
    public void setImie(String imie){ this.imie = imie; }
    
    
    // Make a call
    public void call(String number){
        if(contacts.containsValue(number)){
            System.out.println("Calling " + getContactName(number) + " at " + number + "...");
        } else {
            System.out.println("Calling " + number + "...");
        }
        simulateNetworkDelay();
        System.out.println("Call connected.");
    }
    
    // Send a SMS
    public void sms(String number, String message){
        if(contacts.containsValue(number)){
            System.out.println("Sending SMS to " + getContactName(number) + " at " + number + ": " + message);
        } else{
            System.out.println("Sending SMS to " + number + ": " + message);
        }
        
        simulateNetworkDelay();
        System.out.println("SMS sent.");
    }
    
    // Save contact
    public void saveContact(String name, String number){
        contacts.put(name, number);
        System.out.println("Contact " + name + " saved with number " + number);
    }
    
    // Delete contact
    public void deleteContact(String name){
        if(contacts.containsKey(name)){
            contacts.remove(name);
            System.out.println("Contact " + name + " deleted");
        } else {
            System.out.println("Contact " + name + " not found");
        }
    }
    
    // Get contact name
    private String getContactName(String number){
        // run a loop over the map
        for(Map.Entry<String, String> entry : contacts.entrySet()){
            if(entry.getValue().equals(number)) {
                return entry.getKey();
            }
        }
        return "Unknown";
    }
    
    private void simulateNetworkDelay(){
        try{
            Thread.sleep(2000);     // simulates network delay
        } catch(InterruptedException e) {
            e.printStackTrace();
        }
    }
}

// SmartPhone class (Child class)
class SmartPhone extends CellPhone{
    private String mac;
    
    // Getter
    public String getMac(){ return mac; }
    // Setter
    public void setMac(String mac){ this.mac = mac; }
    
    
    // Play media
    public void play(String media){
        System.out.println("Playing " + media);
        simulateMediaPlay();
    }
    
    // Click photo
    public void clickPhoto(){
        System.out.println("Photo clicked");
    }
    
    // Capture video
    public void captureVideo(){
        System.out.println("Video captured");
    }
    
    private void simulateMediaPlay(){
        try{
            Thread.sleep(3000);
        } catch(InterruptedException e) {
            e.printStackTrace();
        }
    }
}

// Customer class (Base class)
class Customer {
    private String name;
    private String phno;
    
    // Getter 
    public String getName(){ return name; }
    public String getPhone(){ return phno; }
    
    // Setter
    public void setName(String name){ this.name = name; }
    public void setPhone(String phno){ this.phno = phno; }
    
    // Pay bill
    public void payBill(double amount){
        System.out.println("Bill of Rs." + amount + " paid by " + name);
        generateReceipt(amount);
    }
    
    
    private void generateReceipt(double amount){
        System.out.println("Generating receipt...");
        simulateProcessingTime();
        System.out.println("Receipt generated: Rs." + amount + " paid by " + name );
    }
    
    private void simulateProcessingTime(){
        try{
            Thread.sleep(1000);         // Simulates receipt generation time
        } catch(InterruptedException e){
            e.printStackTrace();
        }
    }
}

// Member class (Derived class)
class Member extends Customer{
    private String custID;
    private String dob;
    private String address;
    
    // Getter
    public String getCustID(){ return custID; }
    public String getDOB(){ return dob; }
    public String getAddress(){ return address; }
    
    // Setter
    public void setCustID(String custID){ this.custID = custID; }
    public void setDOB(String dob){ this.dob = dob; }
    public void setAddress(String address){ this.address = address; }
    
    // Callback
    public void callback(){
        System.out.println("Calling member " + getName() + " for discount related information...");
        simulateNetworkDelay();
        System.out.println("Callback completed.");
    }
    
    private void simulateNetworkDelay(){
        try{
            Thread.sleep(2000);
        } catch (InterruptedException e){
            e.printStackTrace();
        }
    }
    
}

public class CustomerMemberService {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        SmartPhone sp = new SmartPhone();
        Member member = new Member();
        
        while(true){
            System.out.println("\nChoose an option:");
            System.out.println("1.    Set Phone Details:");
            System.out.println("2.    Save Contact:");
            System.out.println("3.    Make a Call:");
            System.out.println("4.    Send SMS:");
            System.out.println("5.    Delete Contact:");
            System.out.println("6.    Play Media:");
            System.out.println("7.    Click Photo:");
            System.out.println("8.    Capture Video:");
            System.out.println("9.    Set Cutomer Details | Member details:");
            System.out.println("10.    Pay Bill:");
            System.out.println("11.    Member Callback:");
            System.out.println("0.    Exit");
            
            
            System.out.println("\n\nYour choice: ");
            int choice  = sc.nextInt();
            sc.nextLine();      // consume new line 
            
            switch(choice) {
                case 1:
                    System.out.println("Enter phone number: ");
                    String phno = sc.nextLine();
                    
                    System.out.println("Enter IMEI number: ");
                    String imei = sc.nextLine();
                    
                    System.out.println("Enter MAC address: ");
                    String mac = sc.nextLine();
                    
                    sp.setPhno(phno);
                    sp.setImie(imei);
                    sp.setMac(mac);
                    break;
                case 2:
                    System.out.println("Enter contact name to save:");
                    String contactName = sc.nextLine();
  
                    System.out.println("Enter contact number to save:");
                    String contactNumber = sc.nextLine();

                    // now, call the method to save the contact
                    sp.saveContact(contactName, contactNumber);
                    break;
                case 3:
                    // enter number to call
                    System.out.println("Enter number to call:");
                    String callNumber = sc.nextLine();
                    sp.call(callNumber);
                    break;
                case 4:
                    System.out.println("Enter number to send SMS:");
                    String smsNumber = sc.nextLine();
                    System.out.println("Enter message:");
                    String message = sc.nextLine();
                    sp.sms(smsNumber, message);
                    break;
                case 5:
                    System.out.println("Enter contact name to delete:");
                    sp.deleteContact(sc.nextLine());
                    break;
                case 6:
                    System.out.println("Enter media to play:");
                    String media = sc.nextLine();
                    sp.play(media);
                    break;
                case 7:
                    sp.clickPhoto();
                    break;
                case 8:
                    sp.captureVideo();
                    break;
                case 9:
                    System.out.println("Enter member name:");
                    member.setName(sc.nextLine());
                    System.out.println("Enter member phone number:");
                    member.setPhone(sc.nextLine());
                    System.out.println("Enter member ID:");
                    member.setCustID(sc.nextLine());
                    System.out.println("Enter member date of birth:");
                    member.setDOB(sc.nextLine());
                    System.out.println("Enter member address:");
                    member.setAddress(sc.nextLine());
                    break;
                case 10:
                    System.out.println("Enter bill amount to pay:");
                    double billAmount = sc.nextDouble();
                    member.payBill(billAmount);
                    sc.nextLine();  // Consume new line left over
                    break;
                case 11:
                    member.callback();
                    break;
                case 0:
                    sc.close();
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    
            }  // end of switch case
        }   // end of while loop
       
    }
}






/*
Output:-
-----------

Choose an option:
1.    Set Phone Details:
2.    Save Contact:
3.    Make a Call:
4.    Send SMS:
5.    Delete Contact:
6.    Play Media:
7.    Click Photo:
8.    Capture Video:
9.    Set Cutomer Details | Member details:
10.    Pay Bill:
11.    Member Callback:
0.    Exit


Your choice: 
9
Enter member name:
Ahana
Enter member phone number:
90000000009
Enter member ID:
AHANA001
Enter member date of birth:
19-08-2005
Enter member address:
FTH

Choose an option:
1.    Set Phone Details:
2.    Save Contact:
3.    Make a Call:
4.    Send SMS:
5.    Delete Contact:
6.    Play Media:
7.    Click Photo:
8.    Capture Video:
9.    Set Cutomer Details | Member details:
10.    Pay Bill:
11.    Member Callback:
0.    Exit


Your choice: 
11
Calling member Ahana for discount related information...
Callback completed.

Choose an option:
1.    Set Phone Details:
2.    Save Contact:
3.    Make a Call:
4.    Send SMS:
5.    Delete Contact:
6.    Play Media:
7.    Click Photo:
8.    Capture Video:
9.    Set Cutomer Details | Member details:
10.    Pay Bill:
11.    Member Callback:
0.    Exit







Output: 2
------------

Choose an option:

1.    Set Phone Details:

2.    Save Contact:

3.    Make a Call:

4.    Send SMS:

5.    Delete Contact:

6.    Play Media:

7.    Click Photo:

8.    Capture Video:

9.    Set Cutomer Details | Member details:

10.    Pay Bill:

11.    Member Callback:

12.    Exit


Your choice: 
1
Enter phone number: 
1234512345
Enter IMEI number: 
090900909
Enter MAC address: 
0000000:0009409:09004:

Choose an option:

1.    Set Phone Details:

2.    Save Contact:

3.    Make a Call:

4.    Send SMS:

5.    Delete Contact:

6.    Play Media:

7.    Click Photo:

8.    Capture Video:

9.    Set Cutomer Details | Member details:

10.    Pay Bill:

11.    Member Callback:

12.    Exit


Your choice: 
3
Enter number to call:
63900000000
Calling 63900000000...
Call connected.

Choose an option:

1.    Set Phone Details:

2.    Save Contact:

3.    Make a Call:

4.    Send SMS:

5.    Delete Contact:

6.    Play Media:

7.    Click Photo:

8.    Capture Video:

9.    Set Cutomer Details | Member details:

10.    Pay Bill:

11.    Member Callback:

12.    Exit


Your choice: 
4
Enter number to send SMS:
6390000000
Enter message:
Hi! good to see you dear.
Sending SMS to 6390000000: Hi! good to see you dear.
SMS sent.

Choose an option:

1.    Set Phone Details:

2.    Save Contact:

3.    Make a Call:

4.    Send SMS:

5.    Delete Contact:

6.    Play Media:

7.    Click Photo:

8.    Capture Video:

9.    Set Cutomer Details | Member details:

10.    Pay Bill:

11.    Member Callback:

12.    Exit


Your choice: 

*/
