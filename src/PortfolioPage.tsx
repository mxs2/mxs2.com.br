import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  PictureAsPdf as PictureAsPdfIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import ProfileIcon from "./components/ProfileIcon";
import "./assets/style.css";

const PortfolioPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box
          sx={{
            textAlign: "center",
            mx: "auto",
            px: { xs: 2, sm: 3 },
          }}
        >
          <ProfileIcon />
          <Typography variant="h4" sx={{ mt: 3 }}>
            Mateus Xavier
          </Typography>
          <Typography variant="caption" sx={{ mt: 3 }}>
            Undergrad Intern
          </Typography>
          <Grid container spacing={0.1} sx={{ mt: 1 }} justifyContent="center">
            <Grid item>
              <IconButton
                component={Link}
                href="https://github.com/mxs2"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="icon"
              >
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                component={Link}
                href="https://twitter.com/mxs2dev/"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
                className="icon"
              >
                <TwitterIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                component={Link}
                href="https://linkedin.com/in/mxs2"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="icon"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                component={Link}
                href="mailto:mxs2@cesar.school"
                target="_blank"
                rel="noopener"
                aria-label="Email"
                className="icon"
              >
                <EmailIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                component={Link}
                href="https://github.com/mxs2/mxs2/blob/main/docs/mxs2.pdf"
                target="_blank"
                rel="noopener"
                aria-label="Resume"
                className="icon"
              >
                <PictureAsPdfIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              mb: 5,
              textAlign: "justify",
              mx: "auto",
              maxWidth: "35ch",
            }}
          >
            Graduando e Representante em Gestão de Tecnologia da Informação da{" "}
            <Link
              href="https://www.cesar.school/gestao-de-tecnologia-da-informacao/"
              sx={{
                color: "inherit",
                fontWeight: "bold",
                fontStyle: "italic",
                textDecoration: "underline",
              }}
              target="_blank"
              rel="noopener"
            >
              CESAR SCHOOL
            </Link>
            , diploma em Desenvolvimento de Sistemas na rede estadual, atua como Innovation Assistant na {" "}
            <Link
              href="https://www.pocketfisio.com/"
              sx={{
                color: "inherit",
                fontWeight: "bold",
                fontStyle: "italic",
                textDecoration: "underline",
              }}
              target="_blank"
              rel="noopener"
            >
              Pocketfisio
            </Link>
            , sendo também Undergrad Intern do{" "}
            <Link
              href="https://voxarlabs.cin.ufpe.br/"
              sx={{
                color: "inherit",
                fontWeight: "bold",
                fontStyle: "italic",
                textDecoration: "underline",
              }}
              target="_blank"
              rel="noopener"
            >
              Voxar Labs
            </Link>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioPage;
