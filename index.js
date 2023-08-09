import express from "express";

const app = express();

app.get("/", (req, res) => {

    const today = new Date();
    const day = today.getDay();

    // console.log(day);
    let type = "a weekday";
    let adv = "work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "chill out";
    }

    res.render("index.ejs", {
       
        dayType:type, 
        action: adv,
    });
});


app.listen(3004,() => {
    console.log("server started at 3004");
});