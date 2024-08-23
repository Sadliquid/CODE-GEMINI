import Kinet from "kinet";

var kinet = new Kinet({
    acceleration: 0.02,
    friction: 0.25,
    names: ["x", "y"],
});

var circle = document.getElementById("circle");

kinet.on("tick", function (instances) {
    circle.style.transform = `translate3d(${instances.x.current}px, ${
        instances.y.current
    }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
        instances.y.velocity / 2
    }deg)`;
});

kinet.on("start", function () {
    console.log("start");
});

kinet.on("end", function () {
    console.log("end");
});