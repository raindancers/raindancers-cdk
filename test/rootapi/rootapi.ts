import * as core from 'aws-cdk-lib';
import {
  aws_sns as sns,
  aws_sns_subscriptions as subscriptions,
}
  from 'aws-cdk-lib';
import * as constructs from 'constructs';


import {
  eventalerts,
}
  from '../../src/index';

export interface RootApiStackProps extends core.StackProps {
  emails: string[];
}

export class RootApiStack extends core.Stack {

  constructor(scope: constructs.Construct, id: string, props: RootApiStackProps) {
    super(scope, id, props);


    // create a monitoringTopic
    const snsTopic = new sns.Topic(this, 'monitoringTopic', {
      topicName: 'alerts',
    });

    // subscribe emails to the the sns
    props.emails.forEach((email) => {
      snsTopic.addSubscription(new subscriptions.EmailSubscription(email));
    });

    // creates a lambda that will send a webhook to teams.
    const teamsChannel = new eventalerts.EventToTeams(this, 'teamsChannel', {
      teamsUrl: 'https://raindancers.webhook.office.com/webhookb2/ed51609a-3baa-4859-afce-6b268fec875a@52887873-e218-4271-8946-5cf5efb40e73/IncomingWebhook/384da214ba934c2abf3c53cf95c60606/ac8377f0-0cc3-4af0-b350-0ec0009f2252',
    }).function;

    // create a lambda that that will send events to an sns topic
    const l2 = new eventalerts.EventToSNS(this, 'lambda', {
      topic: snsTopic,
    }).function;

    // create an event bridge rule to detect root account Activity
    eventalerts.MonitoringRule.rootActivity(this, {
      lambda: [
        l2, // this will send the event to the lambda that will then send it to sns topic
        teamsChannel, // this will send the event to teams
      ],
    });
  }
}