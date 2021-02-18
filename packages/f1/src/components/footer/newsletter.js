import React from "react";
import { connect } from "frontity";
import Mailchimp from "@aamodtgroup/react-mailchimp-form";

const Newsletter = ({ state }) => {
    return (
        <>
        <Mailchimp
        action='https://xyz.us1.list-manage.com/subscribe/post?u=cce50f1d097a7408a725f84ec&amp;id=d5448803d8'
        fields={[
            {
              name: 'EMAIL',
              'aria-label': 'Epost',
              placeholder: 'Epost',
              type: 'email',    
              required: true
            },
        ]}
        messages = {
            {
                button: "Send"
            }
        }
        className="newsletter"
        />
        </>
    );
};

export default connect(Newsletter);