package com.mytaxi.taxiapplication.service;

import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class EmailService {
    // fields are initialized with values from the database
    private String user;
    private String password;

    public void sendMessage(String text, String fromAddress, String toAddress) throws MessagingException {
        Properties prop = new Properties();
        prop.put("mail.transport.protocol", "smtp");
        prop.put("mail.smtp.auth", true);
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "25");
        prop.put("mail.smtp.ssl.protocols", "TLSv1.2");
        prop.put("mail.smtp.ssl.trust", "*");


        Session session = Session.getInstance(prop);
        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress(fromAddress));
        message.addRecipient(Message.RecipientType.TO, new InternetAddress(toAddress));
        message.setSubject("test-mail");
        message.setText(text);

        Transport transport = session.getTransport();
        transport.connect(user, password);
        transport.sendMessage(message, message.getAllRecipients());
        transport.close();
    }
}
