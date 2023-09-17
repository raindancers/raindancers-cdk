import os
import boto3
import json
import email
import re
from botocore.exceptions import ClientError
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from email import utils

region = os.environ['AWS_REGION']
incoming_email_bucket = os.environ['MAIL_BUCKET']
incoming_email_prefix = os.environ['MAIL_PREFIX']


def get_message_from_s3(message_id):

    object_path = (incoming_email_prefix + "/" + message_id)
    object_http_path = (
        f"http://s3.console.aws.amazon.com/s3/object/{incoming_email_bucket}/{object_path}?region={region}"
    )
    s3 = boto3.client("s3")
    object_s3 = s3.get_object(
        Bucket=incoming_email_bucket,
        Key=object_path
    )
    file = object_s3['Body'].read()
    file_dict = {
        "file": file,
        "path": object_http_path,
        "messageId": message_id
    }
    return file_dict


def create_recipient_list(destination):
    
    sorted_forwarding_rules = sorted(json.loads(os.environ['FORWARDING_RULE'], key=lambda d: d['priority']))
    final_destinations = []

    for rule in sorted_forwarding_rules:
        if re.match(rule["sentTo"], destination):
            return rule["forwardTo"]

    raise ValueError('There was no match for the sent to address')
    

def create_message(file_dict, recipients):

    sender = os.environ['MailSender']

    separator = ";"

    # Parse the email body.
    mail_object = email.message_from_string(file_dict['file'].decode('utf-8'))

    # Get the original subject and send date
    subject_original = mail_object['Subject']
    sent_date = mail_object['date']

    # Create a new subject line.
    subject = "FW: " + subject_original

    # The body text of the email.
    body_text = ("The message below was received from "
                 + separator.join(mail_object.get_all('From'))
                 + ". The message ID is " + file_dict['messageId']
                 + ".<br><br>----- Forwarded Message -----<br>"
                 + "From: " +
                 separator.join(mail_object.get_all('From')) + "<br>"
                 + "Date: " + sent_date + "<br>"
                 + "Subject: " + subject_original + "<br><br>")

    # The file name to use for the attached message. Uses regex to remove all
    # non-alphanumeric characters, and appends a file extension.
    filename = re.sub('[^0-9a-zA-Z]+', '_', subject_original) + ".eml"

    # Create a MIME container.
    msg = MIMEMultipart()
    # Create a MIME text part.
    text_part = MIMEText(body_text, _subtype="html")
    # Attach the text part to the MIME message.
    msg.attach(text_part)

    # Add subject, from and to lines.
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = ", ".join(recipients)

    # Attach the original email to the message.
    msg.attach(mail_object)

    message = {
        "Source": sender,
        "Destinations": recipients,
        "Data": msg.as_string()
    }

    return message


def send_email(message):
    aws_region = os.environ['Region']

# Create a new SES client.
    client_ses = boto3.client('ses', region)

    # Send the email.
    try:
        # Provide the contents of the email.
        response = client_ses.send_raw_email(
            Source=message['Source'],
            Destinations=message['Destinations'],
            RawMessage={
                'Data': message['Data']
            }
        )

    # Display an error if something goes wrong.
    except ClientError as e:
        output = e.response['Error']['Message']
    else:
        output = "Email sent! Message ID: " + response['MessageId']

    return output


def lambda_handler(event, context):
    
    file_dict = get_message_from_s3(event['Records'][0]['ses']['mail']['messageId'])

    # Create the new recipient list
    new_recipients = create_recipient_list(
        event['Records'][0]['ses']['mail']['destination']
    )
    print(f"new recipients: {new_recipients}")

    # Create the message.
    message = create_message(file_dict, new_recipients)

    # Send the email and print the result.
    result = send_email(message)
    print(result)