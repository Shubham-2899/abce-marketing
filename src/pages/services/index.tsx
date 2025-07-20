import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import InsightsIcon from "@mui/icons-material/Insights";

const Services = () => {
  const theme = useTheme();
  const services = [
    {
      title: "Transactional Emails",
      description:
        "Deliver time-sensitive emails instantly to your customers' inboxes, ensuring critical information is always on time.",
      icon: <EmailIcon fontSize="large" color="primary" />,
    },
    {
      title: "Marketing Campaigns",
      description:
        "Create, schedule, and automate beautiful marketing emails that drive engagement and conversions.",
      icon: <DesignServicesIcon fontSize="large" color="secondary" />,
    },
    {
      title: "Subscriber Growth",
      description:
        "Grow your audience with smart signup forms, segmentation, and referral incentives.",
      icon: <GroupAddIcon fontSize="large" color="primary" />,
    },
    {
      title: "Analytics & Insights",
      description:
        "Track every open, click, and conversion with real-time analytics and actionable insights.",
      icon: <InsightsIcon fontSize="large" color="secondary" />,
    },
  ];

  const sections = [
    {
      id: "email-marketing",
      title: "Email Marketing Campaigns",
      items: [
        {
          title: "Planning and Strategy",
          text: "Thoroughly understand the client's objectives, target audience, and industry. Develop a customized email marketing strategy that outlines the campaign's goals, messaging, and timing.",
        },
        {
          title: "Customized Email Design",
          text: "Create visually appealing and responsive email templates that align with the client's branding, ensuring consistency and professionalism.",
        },
        {
          title: "Content Creation",
          text: "Craft compelling email content that resonates with the audience, including engaging headlines, persuasive copy, and relevant visuals.",
        },
        {
          title: "A/B Testing",
          text: "Conduct rigorous A/B tests on various elements such as subject lines, images, call-to-action buttons, and content to determine the most effective combinations.",
        },
        {
          title: "Scheduling and Deployment",
          text: "Carefully schedule email deployments to optimize open and click-through rates. Avoid sending emails at times when the audience is less likely to engage.",
        },
        {
          title: "Performance Tracking",
          text: "Use advanced tracking tools to monitor the performance of each email campaign, including open rates, click-through rates, conversion rates, and revenue generated.",
        },
      ],
    },
    {
      id: "email-automation",
      title: "Email Automation",
      items: [
        {
          title: "Workflow Design",
          text: "Create intricate email automation workflows that guide subscribers through different stages of the customer journey, from lead generation to post-purchase follow-ups.",
        },
        {
          title: "Drip Campaigns",
          text: "Develop nurturing drip email campaigns that provide valuable content and incentives to prospects, gradually building trust and encouraging conversions.",
        },
        {
          title: "Cart Abandonment Recovery",
          text: "Set up automated emails to recover abandoned shopping carts by reminding customers of their unpurchased items and offering incentives to complete the purchase.",
        },
        {
          title: "Welcome Series",
          text: "Design welcome email sequences that make a positive first impression on new subscribers, introduce them to the brand, and encourage further engagement.",
        },
        {
          title: "Behavioral Triggers",
          text: "Implement automated emails triggered by specific subscriber actions, such as clicking a link, downloading a resource, or making a purchase.",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytics and Reporting",
      items: [
        {
          title: "Comprehensive Reporting",
          text: "Generate detailed reports that provide insights into email campaign performance, including key metrics like open rates, click-through rates, conversion rates, and revenue generated.",
        },
        {
          title: "Conversion Tracking",
          text: "Implement conversion tracking to attribute specific actions, such as purchases or form submissions, to email campaigns.",
        },
        {
          title: "ROI Analysis",
          text: "Calculate the return on investment (ROI) for email marketing efforts by measuring the revenue generated compared to the campaign costs.",
        },
        {
          title: "Data-Driven Insights",
          text: "Use data to identify trends, customer preferences, and areas for improvement, informing future email marketing strategies and content decisions.",
        },
      ],
    },
    {
      id: "deliverability",
      title: "Email Deliverability Management",
      items: [
        {
          title: "Deliverability Monitoring",
          text: "Continuously monitor email deliverability metrics, such as inbox placement rates, spam complaints, and bounce rates, to ensure emails reach subscribers' inboxes.",
        },
        {
          title: "Spam Compliance",
          text: "Ensure email campaigns comply with spam laws, such as the CAN-SPAM Act and GDPR, by including necessary opt-out links, physical addresses, and transparent sender information.",
        },
        {
          title: "Sender Reputation",
          text: "Manage the sender's reputation by adhering to best practices, maintaining a low complaint rate, and properly configuring DNS and SPF records.",
        },
        {
          title: "List Hygiene",
          text: "Regularly clean email lists to remove invalid or inactive email addresses, reducing the likelihood of bounces and spam reports.",
        },
      ],
    },
    {
      id: "compliance",
      title: "Compliance and Best Practices",
      items: [
        {
          title: "Legal Compliance",
          text: "Ensure email marketing campaigns comply with relevant legal regulations, such as GDPR, CAN-SPAM Act, and CASL, by including opt-out options, clear sender identification, and privacy policy links.",
        },
        {
          title: "Opt-In and Opt-Out Process",
          text: "Streamline the opt-in process to make it easy for subscribers to consent to receiving emails. Likewise, provide a straightforward opt-out process for unsubscribing.",
        },
        {
          title: "Privacy and Data Security",
          text: "Protect subscriber data and privacy by implementing secure data storage practices, encryption, and transparent data collection policies.",
        },
      ],
    },
    {
      id: "digital-strategy",
      title: "Digital Marketing Strategy",
      items: [
        {
          title: "Comprehensive Planning",
          text: "Develop holistic digital marketing strategies that integrate email marketing with other digital channels, such as social media, content marketing, SEO, and paid advertising.",
        },
        {
          title: "Goal Setting",
          text: "Collaborate with clients to establish clear goals and key performance indicators (KPIs) for digital marketing campaigns, ensuring alignment with business objectives.",
        },
        {
          title: "Ongoing Strategy Optimization",
          text: "Continuously evaluate the effectiveness of digital marketing efforts, making data-driven adjustments to optimize campaigns, improve ROI, and achieve better results.",
        },
      ],
    },
    {
      id: "social-ads",
      title: "Social Media Advertising",
      items: [
        {
          title: "Campaign Strategy",
          text: "Plan and execute targeted social media advertising campaigns on platforms such as Facebook, Instagram, Twitter, and LinkedIn, based on client goals and audience demographics.",
        },
        {
          title: "Ad Creative",
          text: "Design eye-catching ad creatives, including images, videos, and ad copy, that resonate with the target audience and effectively convey the brand message.",
        },
      ],
    },
    {
      id: "email-design",
      title: "Email Design and Content Creation",
      items: [
        {
          title: "Responsive Templates",
          text: "Design responsive email templates that adapt to various devices and email clients, ensuring a consistent user experience.",
        },
        {
          title: "Compelling Copywriting",
          text: "Craft persuasive and concise email content that grabs recipients' attention, communicates the message effectively, and includes clear calls to action.",
        },
        {
          title: "Visual Design",
          text: "Incorporate visually appealing graphics, images, and videos that enhance the email's aesthetics and reinforce the brand identity.",
        },
        {
          title: "Personalization",
          text: "Utilize personalization tokens to address recipients by their names and customize content based on their preferences or past interactions.",
        },
        {
          title: "Mobile Optimization",
          text: "Optimize email content and design for mobile devices, as a significant portion of email opens occurs on smartphones and tablets.",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          bgcolor:`linear-gradient(90deg, ${theme.palette.primary.main}11 0%, ${theme.palette.secondary.main}11 100%)`,
          color: theme.palette.text.primary,
          py: 8,
          px: { xs: 2, md: 8 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          mb={4}
          color={theme.palette.text.primary}
        >
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, i) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    boxShadow: 3,
                    background: theme.palette.background.default,
                    height: "100%",
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mb={2}
                  >
                    <Avatar
                      sx={{
                        bgcolor: theme.palette.background.paper,
                        width: 56,
                        height: 56,
                        mb: 1,
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Typography fontWeight={600} fontSize="1.2rem">
                      {service.title}
                    </Typography>
                  </Box>
                  <CardContent sx={{ pt: 0 }}>
                    <Typography
                      variant="body2"
                      color={theme.palette.text.secondary}
                      align="center"
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          px: { xs: 2, md: 6 },
          py: 6,
          bgcolor:`linear-gradient(90deg, ${theme.palette.primary.main}11 0%, ${theme.palette.secondary.main}11 100%)`,
        }}
      >
        {sections.map((section) => (
          <Box id={section.id} key={section.id} sx={{ mb: 8 }}>
            <Typography variant="h5" fontWeight={700} mb={2} color="primary">
              {section.title}
            </Typography>
            <Grid container spacing={2}>
              {section.items.map((item, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {item.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

export default Services;
