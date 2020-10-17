import * as SQS from 'aws-sdk/clients/sqs';

export class Hello {
  public async sayHello() {
    return 'hello, world!';
  }

  /**
   * test
   */
  public async putToQueue(messageBody: string, queueURL: string): Promise<SendMessageResult> {
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
    return {
      md5OfMessageAttributes: sqsData.MD5OfMessageAttributes,
      md5OfMessageBody: sqsData.MD5OfMessageBody,
      md5OfMessageSystemAttributes: sqsData.MD5OfMessageSystemAttributes,
      messageId: sqsData.MessageId,
      sequenceNumber: sqsData.SequenceNumber,
    };
  }
}

export interface SendMessageResult {
  /**
     * An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see RFC1321.
     */
  readonly md5OfMessageBody?: string;
  /**
     * An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see RFC1321.
     */
  readonly md5OfMessageAttributes?: string;
  /**
     * An MD5 digest of the non-URL-encoded message system attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest.
     */
  readonly md5OfMessageSystemAttributes?: string;
  /**
     * An attribute containing the MessageId of the message sent to the queue. For more information, see Queue and Message Identifiers in the Amazon Simple Queue Service Developer Guide.
     */
  readonly messageId?: string;
  /**
     * This parameter applies only to FIFO (first-in-first-out) queues. The large, non-consecutive number that Amazon SQS assigns to each message. The length of SequenceNumber is 128 bits. SequenceNumber continues to increase for a particular MessageGroupId.
     */
  readonly sequenceNumber?: string;
}

export class HelloJsii {
  public sayHello(name: string) {
    return `Hello, ${name}!`;
  }
}