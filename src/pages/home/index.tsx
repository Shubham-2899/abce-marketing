import { Box, Card, CardContent, Typography } from "@mui/material";
import backN from "../../assets/backN.jpg";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";

const services = [
  {
    title: "Transactional Emails",
    description:
      "Have transactional emails delivered to your customers' inbox when it matters to them the most - immediately!",
    image: service1,
  },
  {
    title: "Marketing Emails",
    description:
      "Send beautiful custom designed emails that will wow your customers.",
    image: service2,
  },
  {
    title: "Subscriber Management & Growth",
    description:
      "Empowering digital excellence: Nurturing subscriber relationships through innovative strategies and data-driven growth.",
    image: service3,
  },
];

const Home = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <div style={{ height: "460px", width: "100%", position: "relative" }}>
        <img
          src={backN}
          alt="home-background"
          style={{
            objectFit: "cover",
            overflow: "hidden",
            height: "100%",
            width: "100%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "20px",
            boxSizing: "border-box",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
        >
          <Typography sx={{ fontSize: { xs: "22px", sm: "24px", md: "28px" } }}>
            Your best bet to get emails delivered to Inbox.
          </Typography>
        </div>
      </div>
      <div>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "24px", md: "28px" },
            textAlign: "center",
            padding: "20px",
          }}
        >
          Our solutions encompass:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 345, height: "350px" }}
              raised={true}
            >
              <div style={{ height: "150px", paddingTop: "30px" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: "50%", objectFit: "contain", height: "80%" }}
                />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "24px", md: "28px" },
            textAlign: "center",
            padding: "20px",
          }}
        >
          Why choose us?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            textAlign: "center",
            padding: "20px",
          }}
        >
          We are the best in the business. We provide the best solutions to
          ensure your emails get delivered to the inbox.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
