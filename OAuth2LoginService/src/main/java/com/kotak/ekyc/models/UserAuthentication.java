package com.kotak.ekyc.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user_authentication")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserAuthentication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "request_Id")
    private int requestId;
    @Column(name = "mode_Of_Authentication")
    private String modeOfAuthentication;
    @Column(name = "email_id")
    private String emailId;
    @Column(name = "email_id_otp")
    private String emailIdOtp;
    @Column(name = "mobile_number")
    private String mobileNumber;
    @Column(name = "mobile_number_otp")
    private String mobileNumberOtp;
    @Column(name = "login_start_time")
    private Date loginStartTime;
    @Column(name = "login_end_time")
    private Date loginEndTime;
    @Enumerated(EnumType.STRING)
    @Column(name = "auth_provider")
    private AuthenticationProvider auth_provider;


}
