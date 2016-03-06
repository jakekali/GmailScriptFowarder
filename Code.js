function myFunction() {
   // forward first message of first inbox thread to recipient1 & recipient2, both @example.com
  var x = 1; 
  var firstThread;
  var message;
  while(1==1){
  firstThread = GmailApp.getInboxThreads(0,1)[0];
 message = firstThread.getMessages()[0];
    if (messageOld != message){ 
    
    message.forward("youremail@youdomain.com");
  x++;
    }
    var messageOld = message;
  }
}
