import * as SQS from 'aws-sdk/clients/sqs';

export class Hello {
  public async sayHello() {
    return 'hello, world!';
  }

  /**
   * test
   */
  public async putToQueue(messageBody: string, queueURL: string): Promise<string> {
    const url = queueURL || process.env.TASK_PIPE;
    if (!url) {
      throw new Error('Missing queue URL');
    }
    const params: SQS.SendMessageRequest = {
      MessageBody: messageBody,
      QueueUrl: url,
    };

    console.log(params);
    const sqsData: SQS.SendMessageResult = await new SQS().sendMessage(params).promise();
    console.log(sqsData);
    return JSON.stringify(sqsData);
  }
}