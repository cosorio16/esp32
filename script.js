const client = mqtt.connect(
  "wss://c4dc2579ca0e4ffa819fd287106e4645.s1.eu.hivemq.cloud:8884/mqtt",
  {
    username: "hivemq.webclient.1715495611334",
    password: "lO8PK1fBcsj02nF*>!Q<",
  }
);

client.on("connect", function () {
  client.subscribe("temperature");
  client.subscribe("humidity");
  client.subscribe("Light");
});

client.on("message", function (topic, message) {
  if (topic === "temperature") {
    document.querySelector(
      ".temperature"
    ).innerHTML = `${message.toString()}°C`;
  } else if (topic === "humidity") {
    document.querySelector(".humidity").innerHTML = `${message.toString()}%`;
  } else if (topic === "Light") {
    document.querySelector(".light").innerHTML = message.toString();
  }
});
