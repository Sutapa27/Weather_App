import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { yellow } from "@mui/material/colors";

export default function InfoBox({ info }) {
  const CLEAR_URL =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
  const SNOW_URL =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HAZE_URL =
    "https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const THUNDER_URL =
    "https://images.unsplash.com/photo-1598539542328-5ebada4f384d?q=80&w=2514&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const CLOUD_URL =
    "https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <Card sx={{ maxWidth: 400, minWidth: 300 }}>
        <CardMedia
          component="img"
          height="200"
          image={
            info.description.includes("rain")
              ? RAIN_URL
              : info.description.includes("snow")
              ? SNOW_URL
              : info.description.includes("cloud")
              ? CLOUD_URL
              : info.description.includes("clear")
              ? CLEAR_URL
              : info.description.includes("thunder")
              ? THUNDER_URL
              : info.description.includes("mist") ||
                info.description.includes("fog")
              ? HAZE_URL
              : CLEAR_URL
          }
          alt="weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.description.includes("rain") ? (
              <UmbrellaIcon color="primary" />
            ) : info.description.includes("snow") ? (
              <AcUnitIcon color="primary" />
            ) : info.description.includes("cloud") ? (
              <CloudIcon color="disabled" />
            ) : info.description.includes("clear") ? (
              <WbSunnyIcon sx={{ color: yellow[500] }} />
            ) : info.description.includes("thunder") ? (
              <ThunderstormIcon color="disabled" />
            ) : info.description.includes("mist") ||
              info.description.includes("fog") ? (
              <CloudIcon color="disabled" />
            ) : (
              <WbSunnyIcon sx={{ color: yellow[500] }} />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>Pressure = {info.pressure} hPa</p>
            <p>Visibility = {info.visibility / 1000} km</p>
            <p>
              Sunrise:{" "}
              {new Date(info.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
            <p>
              Sunset:{" "}
              {new Date(info.sunset * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>

            <p>
              The weather can be described as <i>{info.description}</i> and it
              feels like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
