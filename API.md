# API Reference

**Classes**

Name|Description
----|-----------
[Hello](#jsii-playground-hello)|*No description*
[HelloJsii](#jsii-playground-hellojsii)|*No description*


**Structs**

Name|Description
----|-----------
[SendMessageResult](#jsii-playground-sendmessageresult)|*No description*



## class Hello 🔹 <a id="jsii-playground-hello"></a>




### Initializer




```ts
new Hello()
```



### Methods


#### putToQueue(messageBody, queueURL)🔹 <a id="jsii-playground-hello-puttoqueue"></a>

test.

```ts
putToQueue(messageBody: string, queueURL: string): SendMessageResult
```

* **messageBody** (<code>string</code>)  *No description*
* **queueURL** (<code>string</code>)  *No description*

__Returns__:
* <code>[SendMessageResult](#jsii-playground-sendmessageresult)</code>

#### sayHello()🔹 <a id="jsii-playground-hello-sayhello"></a>



```ts
sayHello(): string
```


__Returns__:
* <code>string</code>



## class HelloJsii 🔹 <a id="jsii-playground-hellojsii"></a>




### Initializer




```ts
new HelloJsii()
```



### Methods


#### sayHello(name)🔹 <a id="jsii-playground-hellojsii-sayhello"></a>



```ts
sayHello(name: string): string
```

* **name** (<code>string</code>)  *No description*

__Returns__:
* <code>string</code>



## struct SendMessageResult 🔹 <a id="jsii-playground-sendmessageresult"></a>

__Obtainable from__: [Hello](#jsii-playground-hello).[putToQueue](#jsii-playground-hello#jsii-playground-hello-puttoqueue)()





Name | Type | Description 
-----|------|-------------
**md5OfMessageAttributes**?🔹 | <code>string</code> | An MD5 digest of the non-URL-encoded message attribute string.<br/>__*Optional*__
**md5OfMessageBody**?🔹 | <code>string</code> | An MD5 digest of the non-URL-encoded message attribute string.<br/>__*Optional*__
**md5OfMessageSystemAttributes**?🔹 | <code>string</code> | An MD5 digest of the non-URL-encoded message system attribute string.<br/>__*Optional*__
**messageId**?🔹 | <code>string</code> | An attribute containing the MessageId of the message sent to the queue.<br/>__*Optional*__
**sequenceNumber**?🔹 | <code>string</code> | This parameter applies only to FIFO (first-in-first-out) queues.<br/>__*Optional*__



