import React from "react";
import { Grid, Typography, Button, Box, TextField, Paper, Checkbox,Modal } from '@material-ui/core';
export default function TermsAndConditions({open,checkBoxValue,checkBoxValueChange,handleClose,style}){
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ margin: '5%' }}
        >
            <Box sx={style}>
                <Box style={{marginBottom:'2%',display:'flex'}}>
                    <Typography variant={'h4'}>{"Terms And Conditions"}</Typography>
                    <Button style={{marginLeft:'70%',float:'right'}} onClick={handleClose}>X</Button>
                </Box>
                <Box >
                    Please find below sample terms and conditions. Just create a simple pop up on click of terms and conditions page and copy this content in it.
                    <br></br>
                    2.1	Salary Accounts
                    <br></br>
                    <p>
                        2.1.1	Reversal of Salary Credits: I hereby irrevocably and unconditionally authorise the Bank to on the request of my employer/company recover by marking hold funds/debiting/reversal of credit, any excess amount credited by and/or on the instructions of the employer/company into my account, with notice to me. The Bank will not be held responsible and liable for any such hold funds/debit/reversal of credit carried out by the Bank.
                    </p><p>
                        2.1.2	I acknowledge that my account has been opened with the Bank by virtue of my employment with the employer/company and is designated as "Salary Account". I understand that pursuant to the arrangement between the employer/company and the Bank, at the sole discretion of the Bank I may be entitled to certain facilities on the Salary Account only during the currency of my employment with the employer/company or till the subsistence of the arrangement between the employer/company and the Bank. I shall notify the Bank on cessation of services with the employer/company. The words "the employer/company" refers to the corporate in which I am employed and on whose request the Salary Account is opened with the Bank.
                    </p>
                    <p>
                        2.1.3	I understand and acknowledge that the special facilities offered on Salary Account are basis agreement of regular salary credit between the employer/company and the Bank.
                    </p><p>
                        2.1.4	I understand and acknowledge that the name of the account holder is not tallied with the account number before crediting salary in the respective accounts as provided by my employer/company.
                    </p><p>
                        2.1.5	I understand and acknowledge that the responsibility of providing the correct account number for crediting of salaries will lie solely with my employer/company and i shall not hold the bank responsible for any wrong credit arising out of such incorrect account number provided by my employer/company.
                    </p><p>
                        2.1.6	I hereby agree that in the event of no salary credits in my Salary Account for any continuous three months, the Bank reserves the right to change the status of Salary Account to Savings Regular Account without any intimation to the account holder/me and the Terms & Conditions as applicable to the HDFC Bank Savings Regular Account shall apply to this account from the date of change of status. The Terms & Conditions and features applicable to Savings Regular Account are published on the website of the Bank.
                    </p><p>
                        2.1.7	I hereby agree that the Bank may at its sole and absolute discretion close the Salary Account if noticed that no amounts are credited by and/or on the instructions of the employer/company to the Salary Account regularly or in the event of my ceasing to be in the services of the employer/company for any reason whatsoever after giving me a notice of 30 days.
                    </p><p>
                        2.1.8	I agree that any modification to the mode of operation in my account can be effected by the Bank with the consent of all joint holders to my account. I acknowledge that the Bank will not be entertaining any request for modification received without consent of all joint holders to my account. I further agree and acknowledge that till such time the Bank shall continue to honor the instructions in accordance with the mode of operation agreed at the time of opening the account.
                    </p><p>
                        2.2	Additional benefit for Salary Account Customer - Personal Accidental Death Cover (PADC) on Salary Account
                    </p><p>
                        2.2.1	The following are the broad Terms & Conditions of the captioned cover on salary account and Titanium Royale Debit card
                    </p>
                    •	Accidental Death resulting from bodily injury due accident only
                    <br />
                    •	Accidental Death resulting from bodily injury which directly and independently of all other causes results in Death within twelve (12) months of the event date
                    <br />
                    •	On the event date, the account holder
                    <br />
                    •	Is a bonafide employees (aged less than 70 years ) of the organization to whom the specific offer has been extended
                    <br />
                    •	Is holding a Salary Account under the Corporate Salary Account Program with HDFC Bank and has received salary credit in the month or month prior
                    <br />
                    •	Should have carried out at least one purchase transaction using the Debit Card, within 6 months prior to the date of loss.
                    <br />
                    •	In case of Air Accidental Death claim ticket should have been purchased using Debit Card linked to Salary Account
                    <br />
                    •	Cover provided only to the primary account holder
                    <p></p>
                    The following are the broad Terms & Conditions of the captioned cover in case of Salary Family Account
                    <br />
                    •	Accidental Death resulting from bodily injury due accident only
                    <br />
                    •	Accidental Death resulting from bodily injury which directly and independently of all other causes results in Death within twelve (12) months of the event date
                    <br />
                    •	On the event date, the account holder
                    <br />
                    •	Is aged less than 70 years
                    <br />
                    •	Is holding a Salary Family Account by virtue of his/her relationship with the salary account holder and such salary account is a zero balance account and has received salary credit in the month or month prior
                    <br />
                    •	Should have carried out at least one purchase transaction using the debit card, within 6 months prior to the date of loss
                    <br />
                    •	In case of Air Accidental Death claim ticket should have been purchased using Debit Card linked to Salary Family Account
                    <br />
                    •	Cover provided only to the primary account holder
                    <p></p>
                    2.2.2	Claim Procedure:
                    •	In the event of death of the account holder, the beneficiary to approach the account branch, and the branch would guide the customer on the documents required.
                    <br />
                    •	On the receipt of these documents by the branch, as special gesture for our salary account holders, HDFC bank would liaise with the insurance company for processing the claim. However, receipt of the documents by the branch does not construe acceptance of claim. In the event of death, the beneficiary has to inform the account branch immediately. As per policy the insurance company needs to be informed (through the bank) within 30 days of accident and all supporting documents relating to the claim needs to be submitted to the insurance company within sixty (60) days from the date of loss.
                    <p></p>
                    2.2.3	Disclaimer :
                    •	The account holder specifically acknowledges that the Bank will not be liable in any manner whatsoever by virtue of any insurance cover provided, and that the insurance company will be solely liable, in case of a death of a Cardholder and shall not hold the Bank responsible for any matter arising out of or in connection with such insurance cover, whether for or in respect of any deficiency or defect in such insurance cover, recovery or payment of compensation, processing or settlement of claims or otherwise howsoever, and all such matters shall be addressed to and sorted out directly with the Insurance company.
                    <br />
                    •	The account holder further acknowledges that the insurance cover so provided will be available to the salary accounts only as per the terms of the relevant insurance policy in force, with his account maintained in good standing. On the account being closed or converted to savings regular account temporarily or permanently for whatever reason, the benefit of such insurance cover shall automatically and ipso facto cease to be available from such date of cesser of account. Further the account holder also agrees that even during continuation of his account, the Bank may at any time suspend, withdraw or cancel the benefit of such insurance cover, and there will no binding obligation on the Bank to continue this benefit.
                    <br />
                    •	Insurance company can be subject to change and insurance cover is subject to the terms and conditions of the policy in force
                    <br />
                    <Checkbox
                        name={"acceptTerms"}
                        value={checkBoxValue}
                        onChange={checkBoxValueChange}
                         />
                    I understand and accept the Terms and conditions
                </Box>
            </Box>
        </Modal>
    )
}