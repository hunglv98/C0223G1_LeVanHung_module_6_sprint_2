import React, { useEffect, useState } from 'react';

function Vnpay(){
    return(
        <>
        <div class="container">
            <div class="header clearfix">
                <h3 class="text-muted">VNPAY RESPONSE</h3>
            </div>
            <div class="table-responsive">
                <div class="form-group">
                    <label >Merchant Transaction Code:</label>
                    <label></label>
                </div>    
                <div class="form-group">
                    <label >Amount:</label>
                    <label></label>
                </div>  
                <div class="form-group">
                    <label >Order info:</label>
                    <label></label>
                </div> 
                <div class="form-group">
                    <label >VNPAY Response Code:</label>
                    <label></label>
                </div> 
                <div class="form-group">
                    <label >VNPAY Transaction Code:</label>
                    <label></label>
                </div> 
                <div class="form-group">
                    <label >Bank Code:</label>
                    <label></label>
                </div> 
                <div class="form-group">
                    <label >Pay Date:</label>
                    <label></label>
                </div> 
                <div class="form-group">
                    <label >Payment Status:</label>
                    <label>
                        {/* <%
                            if (signValue.equals(vnp_SecureHash)) {
                                if ("00".equals(request.getParameter("vnp_TransactionStatus"))) {
                                    out.print("Success");
                                } else {
                                    out.print("Failed");
                                }

                            } else {
                                out.print("invalid signature");
                            }
                        %> */}
                        </label>
                </div> 
            </div>
            <p>
                &nbsp;
            </p>
            <footer class="footer">
                <p>&copy; VNPAY 2020</p>
            </footer>
        </div>  
        </>
    )
}
export default Vnpay
