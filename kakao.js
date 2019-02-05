const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', apiRouter);


apiRouter.post('/sayHello', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [{
        simpleText: {
          text: "hello I'm Ryan"
        }
      }],
      quickReplies: [
      {
        label: '메뉴 보기',
        action: 'message',
        messageText: '메뉴 보기'
      }]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/showHello', function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [{
        simpleImage: {
          imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
          altText: "hello I'm Ryan"
        }
      }]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/test', function(req, res) {
  console.log(req.body);

  const responseBody = {

    "contents": [{
      "type": "card.text",
      "cards": [{
        "description": "DESCRIPTION",
        "buttons": [{
          "type": "block",
          "label": "블록연결",
          "data": {
            "blockId": "123456"
          }
        }]
      }]
    },
    {
      "type": "text",
      "text": "text example"
    }
    ]
  };

  res.status(200).send(responseBody);
});


app.listen(9090, function() {
  console.log('Example skill server listening on port 9090!');
});