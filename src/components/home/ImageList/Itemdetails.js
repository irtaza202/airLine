import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import flight from "../../../assets/flight.jpg";
import BasicTabs from "../header/headerFlightPortion/Tabs";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import img9 from "../../../assets/img9.png";
import img10 from "../../../assets/img10.png";
import img11 from "../../../assets/img11.png";
import img12 from "../../../assets/img12.png";
import img13 from "../../../assets/img13.png";
import img14 from "../../../assets/img14.png";
import img15 from "../../../assets/img15.png";
import img16 from "../../../assets/img16.png";
import img17 from "../../../assets/img17.png";
import img18 from "../../../assets/img18.png";
import img19 from "../../../assets/img19.png";
import img20 from "../../../assets/img20.png";
import brusless from '../../../assets/brussels-airlines.png'
import ethiopian from '../../../assets/ethiopian.png'
import british from '../../../assets/british-airways.png'
import alrgerie from '../../../assets/air-alrgerie.png'
import alitalia from '../../../assets/alitalia.png'
import egypt from '../../../assets/egypt-air.png'
import emirates from '../../../assets/emirates.png'
import iberia from '../../../assets/iberia.png'
import kenya from '../../../assets/kenya-airways.png'
import qatar from '../../../assets/qatar-airways.png'
import royal from '../../../assets/royal-air-maroc.png'
import rwand from '../../../assets/rwand-air.png'
import swiss from '../../../assets/swiss.png'
import portugal from '../../../assets/tap-portugal.png'
import turkish from '../../../assets/turkish-airlines.png'
import NewsLetter from "../../newsLetter/NewsLetter";
import { PhoneOutlined } from "@mui/icons-material";

const item = [
  {
    img: img1,
    title: "Freetown",
    subtitle: "Sierra Leone",
    data: [
      {
        title: "Freetown",
        destCode: "FNA",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "07:45 a.m",
        type: "Outbound",
        arrivalDate: "Tue, 15 Oct",
        arrivalTime: "05:00 p.m",
        airline: brusless ,
        price: "£499",
        transitTime: "2h 25m",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "07:45 a.m",
            arrivePort: "Brussels Airport (BRU)",
            arriveTime: "09:45 a.m",
          },
          {
            depPort: "Brussels Airport (BRU)",
            depTime: "12:10 p.m",
            arrivePort: "Lungi Intl Airport, Freetown (FNA)",
            arriveTime: "05:00 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Freetown",
        code: "FNA",
        departDate: "Tue, 19 Nov",
        departTime: "07:15 p.m",
        type: "Inbound",
        arrivalDate: "Wed, 20 Nov",
        arrivalTime: "10:05 a.m",
        airline: brusless ,
        price: "£499",
        transitTime: "4h 25m",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Lungi Intl Airport, Freetown (FNA)",
            depTime: "07:15 p.m",
            arrivePort: "Brussels Airport (BRU)",
            arriveTime: "05:15 a.m",
          },
          {
            depPort: "Brussels Airport (BRU)",
            depTime: "09:40 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "12:40 p.m",
          },
        ],
      },

      {
        title: "Freetown,",
        destCode: "FNA",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Thu, 17 Oct",
        departTime: "10:10 a.m",
        type: "Outbound",
        arrivalDate: "Fri, 18 Oct",
        arrivalTime: "05:20 p.m",
        airline: ethiopian,
        price: "£559",
        transitTime: "15h 10m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "10:10 a.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "07:40 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "10:50 a.m",
            arrivePort: "Lungi Intl Airport, Freetown (FNA)",
            arriveTime: "05:20 p.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Freetown",
        code: "FNA",
        departDate: "Sat, 16 Nov",
        departTime: "08:35 a.m",
        type: "Inbound",
        arrivalDate: "Sun, 17 Nov",
        arrivalTime: "05:15 a.m",
        airline: ethiopian,
        price: "£559",
        transitTime: "3h 25m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Lungi Intl Airport, Freetown (FNA)",
            depTime: "08:35 a.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "08:50 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "12:15 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "05:15 a.m",
          },
        ],
      },
    ],
    description: "One of the beautiful cities of Asia; we're ",
    description2: "offering the lowest rates on Bangkok flights.",
    rows: 3,
    cols: 2,
    featured: true,
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //   title: 'Breakfast',
  //   author: '@bkristastucchio',
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  {
    img: img2,
    title: "Lagos",
    data: [
      {
        title: "Murtala Muhammad Intl Airport, Lagos",
        destCode: "LOS",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Mon, 14 Oct",
        departTime: "11:50 a.m",
        type: "Outbound",
        arrivalDate: "Mon, 14 Oct",
        arrivalTime: "06:25 p.m",
        airline: british,
        price: "£689",
        transitTime: "",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Murtala Muhammad Intl Airport, Lagos",
        code: "LOS",
        departDate: "Sat, 16 Nov",
        departTime: "11:10 p.m",
        type: "Inbound",
        arrivalDate: "Sun, 17 Nov",
        arrivalTime: "04:50 a.m",
        airline:british,
        price: "£689",
        transitTime: "",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [],
      },

      {
        title: "Murtala Muhammad Intl Airport, Lagos",
        destCode: "LOS",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "05:15 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "07:10 p.m",
        airline: turkish,
        price: "£499",
        transitTime: "14h 50m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "05:15 p.m",
            arrivePort: "Istanbul Airport (IST)",
            arriveTime: "11:20 p.m",
          },
          {
            depPort: "Istanbul Airport (IST)",
            depTime: "02:10 p.m",
            arrivePort: "Murtala Muhammad Intl Airport, Lagos",
            arriveTime: "07:10 p.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Murtala Muhammad Intl Airport, Lagos",
        code: "LOS",
        departDate: "Fri, 15 Nov",
        departTime: "09:55 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "09:30 a.m",
        airline: turkish,
        price: "£499",
        transitTime: "1h 50m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Murtala Muhammad Intl Airport, Lagos",
            depTime: "09:55 p.m",
            arrivePort: "Istanbul Airport (IST)",
            arriveTime: "06:30 a.m",
          },
          {
            depPort: "Istanbul Airport (IST)",
            depTime: "08:20 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "09:30 a.m",
          },
        ],
      },

      {
        title: "Murtala Muhammad Intl Airport, Lagos",
        destCode: "LOS",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Fri, 18 Oct",
        departTime: "04:40 p.m",
        type: "Outbound",
        arrivalDate: "Sat, 19 Oct",
        arrivalTime: "05:50 a.m",
        airline:royal,
        price: "£515",
        transitTime: "5h 15m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "04:40 p.m",
            arrivePort: "Mohammad V Intl Airport, Casablanca (CMN)",
            arriveTime: "07:55 p.m",
          },
          {
            depPort: "Mohammad V Intl Airport, Casablanca (CMN)",
            depTime: "01:10 a.m",
            arrivePort: "Murtala Muhammad Intl Airport, Lagos",
            arriveTime: "05:50 a.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Murtala Muhammad Intl Airport, Lagos",
        code: "LOS",
        departDate: "Tue, 12 Nov",
        departTime: "05:10 a.m",
        type: "Inbound",
        arrivalDate: "Tue, 12 Nov",
        arrivalTime: "02:45 p.m",
        airline: royal,
        price: "£515",
        transitTime: "2h 35m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Murtala Muhammad Intl Airport, Lagos",
            depTime: "05:10 a.m",
            arrivePort: "Mohammad V Intl Airport, Casablanca (CMN)",
            arriveTime: "09:55 a.m",
          },
          {
            depPort: "Mohammad V Intl Airport, Casablanca (CMN)",
            depTime: "12:30 p.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "02:45 p.m",
          },
        ],
      },

      {
        title: "Murtala Muhammad Intl Airport, Lagos",
        destCode: "LOS",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Fri, 18 Oct",
        departTime: "09:00 p.m",
        type: "Outbound",
        arrivalDate: "Sat, 19 Oct",
        arrivalTime: "12:25 p.m",
        airline: ethiopian,
        price: "£489",
        transitTime: "2h 15m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "09:00 p.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "06:45 a.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "09:00 a.m",
            arrivePort: "Murtala Muhammad Intl Airport, Lagos",
            arriveTime: "12:25 p.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Murtala Muhammad Intl Airport, Lagos",
        code: "LOS",
        departDate: "Sun, 17 Nov",
        departTime: "01:40 p.m",
        type: "Inbound",
        arrivalDate: "Mon, 18 Nov",
        arrivalTime: "05:15 a.m",
        airline: ethiopian,
        price: "£489",
        transitTime: "3h 15m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Murtala Muhammad Intl Airport, Lagos",
            depTime: "01:40 p.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "09:00 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "12:15 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "05:15 a.m",
          },
        ],
      },

      {
        title: "Murtala Muhammad Intl Airport, Lagos",
        destCode: "LOS",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Fri, 18 Oct",
        departTime: "09:40 a.m",
        type: "Outbound",
        arrivalDate: "Sat, 19 Oct",
        arrivalTime: "01:00 p.m",
        airline: egypt,
        price: "£479",
        transitTime: "16h 55m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "09:40 a.m",
            arrivePort: "Cairo Airport (CAI)",
            arriveTime: "05:30 p.m",
          },
          {
            depPort: "Cairo Airport (CAI)",
            depTime: "10:25 a.m",
            arrivePort: "Murtala Muhammad Intl Airport, Lagos",
            arriveTime: "01:00 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Murtala Muhammad Intl Airport, Lagos",
        code: "LOS",
        departDate: "Sun, 17 Nov",
        departTime: "02:45 p.m",
        type: "Inbound",
        arrivalDate: "Mon, 18 Nov",
        arrivalTime: "09:00 p.m",
        airline: egypt,
        price: "£479",
        transitTime: "21h 0m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Murtala Muhammad Intl Airport, Lagos",
            depTime: "02:45 p.m",
            arrivePort: "Cairo Airport (CAI)",
            arriveTime: "08:45 p.m",
          },
          {
            depPort: "Cairo Airport (CAI)",
            depTime: "05:45 p.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "09:00 p.m",
          },
        ],
      },
    ],
    subtitle: "Nigeria",
    author: "@rollelflex_graphy726",
    rows: 3,
  },

  {
    img: img3,
    title: "Johannesburg",
    subtitle: " South Africa",
    data: [
      {
        title: "Johannesburg OR Tambo Airport",
        destCode: "JNB",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Fri, 18 Oct",
        departTime: "06:25 p.m",
        type: "Outbound",
        arrivalDate: "Sat, 19 Oct",
        arrivalTime: "09:45 a.m",
        airline: kenya,
        price: "£599",
        transitTime: "1h 30m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "06:25 p.m",
            arrivePort: "Nairobi Jomo Kenyatti Intl Airport (NBO)",
            arriveTime: "05:00 a.m",
          },
          {
            depPort: "Nairobi Jomo Kenyatti Intl Airport (NBO)",
            depTime: "06:30 a.m",
            arrivePort: "Johannesburg OR Tambo Airport (JNB)",
            arriveTime: "09:45 a.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Johannesburg OR Tambo Airport",
        code: "JNB",
        departDate: "Wed, 13 Nov",
        departTime: "01:15 a.m",
        type: "Inbound",
        arrivalDate: "Wed, 13 Nov",
        arrivalTime: "03:30 p.m",
        airline: kenya,
        price: "£599",
        transitTime: "3h 15m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Johannesburg OR Tambo Airport (JNB)",
            depTime: "01:15 a.m",
            arrivePort: "Nairobi Jomo Kenyatti Intl Airport (NBO)",
            arriveTime: "06:20 a.m",
          },
          {
            depPort: "Nairobi Jomo Kenyatti Intl Airport (NBO)",
            depTime: "09:35 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "03:30 p.m",
          },
        ],
      },

      {
        title: "Johannesburg OR Tambo Airport",
        destCode: "JNB",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Fri, 18 Oct",
        departTime: "02:55 p.m",
        type: "Outbound",
        arrivalDate: "Sat, 19 Oct",
        arrivalTime: "04:10 a.m",
        airline: qatar,
        price: "£622",
        transitTime: "9h 10m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "02:55 p.m",
            arrivePort: "Doha Hamad Intl Airport (DOH)",
            arriveTime: "11:30 p.m",
          },
          {
            depPort: "Doha Hamad Intl Airport (DOH)",
            depTime: "08:40 a.m",
            arrivePort: "Johannesburg OR Tambo Airport (JNB)",
            arriveTime: "04:10 p.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Johannesburg OR Tambo Airport",
        code: "JNB",
        departDate: "Wed, 13 Nov",
        departTime: "01:40 p.m",
        type: "Inbound",
        arrivalDate: "Thu, 14 Nov",
        arrivalTime: "06:10 a.m",
        airline: qatar,
        price: "£622",
        transitTime: "2h 35m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Johannesburg OR Tambo Airport (JNB)",
            depTime: "01:40 p.m",
            arrivePort: "Doha Hamad Intl Airport (DOH)",
            arriveTime: "11:10 p.m",
          },
          {
            depPort: "Doha Hamad Intl Airport (DOH)",
            depTime: "01:45 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:10 a.m",
          },
        ],
      },

      {
        title: "Johannesburg OR Tambo Airport",
        destCode: "JNB",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "09:20 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "03:00 p.m",
        airline: rwand,
        price: "£585",
        transitTime: "2h 40m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "09:20 p.m",
            arrivePort: "Kigali Intl Airport (KGL)",
            arriveTime: "07:00 a.m",
          },
          {
            depPort: "Kigali Intl Airport (KGL)",
            depTime: "09:40 a.m",
            arrivePort: "Johannesburg OR Tambo Airport (JNB)",
            arriveTime: "03:00 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Johannesburg OR Tambo Airport",
        code: "JNB",
        departDate: "Fri, 15 Nov",
        departTime: "04:00 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:20 a.m",
        airline:rwand,
        price: "£585",
        transitTime: "2h 50m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Johannesburg OR Tambo Airport (JNB)",
            depTime: "04:00 p.m",
            arrivePort: "Kigali Intl Airport (KGL)",
            arriveTime: "09:30 p.m",
          },
          {
            depPort: "Kigali Intl Airport (KGL)",
            depTime: "11:35 p.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:20 a.m",
          },
        ],
      },
    ],
    author: "@helloimnik",
  },

  {
    img: img4,
    title: "Conakry",
    subtitle: "Guinea",
    data: [
      {
        title: "Conakry Intl Airport",
        destCode: "CKY",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "07:45 a.m",
        type: "Outbound",
        arrivalDate: "Tue, 15 Oct",
        arrivalTime: "05:40 p.m",
        airline: brusless,
        price: "£499",
        transitTime: "1h 15m",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "07:45 a.m",
            arrivePort: "Brussels Airport (BRU)",
            arriveTime: "05:45 a.m",
          },
          {
            depPort: "Brussels Airport (BRU)",
            depTime: "11:00 a.m",
            arrivePort: "Conakry Intl Airport (CKY)",
            arriveTime: "05:40 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Conakry Intl Airport",
        code: "CKY",
        departDate: "Sat, 16 Nov",
        departTime: "07:55 p.m",
        type: "Inbound",
        arrivalDate: "Sun, 17 Nov",
        arrivalTime: "11:05 a.m",
        airline: brusless,
        price: "£499",
        transitTime: "4h 30m",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Conakry Intl Airport (CKY)",
            depTime: "07:35 p.m",
            arrivePort: "Brussels Airport (BRU)",
            arriveTime: "05:10 a.m",
          },
          {
            depPort: "Brussels Airport (BRU)",
            depTime: "09:40 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "11:05 a.m",
          },
        ],
      },

      {
        title: "Conakry Intl Airport",
        destCode: "CKY",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Thu, 17 Oct",
        departTime: "04:40 p.m",
        type: "Outbound",
        arrivalDate: "Fri, 18 Oct",
        arrivalTime: "01:15 a.m",
        airline: royal,
        price: "£616",
        transitTime: "2h 25m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "04:40 p.m",
            arrivePort: "Mohammad V Intl Airport, Casablanca (CMN)",
            arriveTime: "07:55 p.m",
          },
          {
            depPort: "Mohammad V Intl Airport, Casablanca (CMN)",
            depTime: "10:20 p.m",
            arrivePort: "Conakry Intl Airport (CKY)",
            arriveTime: "01:15 a.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Conakry Intl Airport",
        code: "CKY",
        departDate: "Wed, 13 Nov",
        departTime: "02:20 a.m",
        type: "Inbound",
        arrivalDate: "Wed, 13 Nov",
        arrivalTime: "02:45 p.m",
        airline: royal,
        price: "£616",
        transitTime: "5h 30m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Conakry Intl Airport (CKY)",
            depTime: "02:20 a.m",
            arrivePort: "Mohammad V Intl Airport, Casablanca (CMN)",
            arriveTime: "07:00 a.m",
          },
          {
            depPort: "Mohammad V Intl Airport, Casablanca (CMN)",
            depTime: "12:30 p.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "02:45 p.m",
          },
        ],
      },

      {
        title: "Conakry Intl Airport",
        destCode: "CKY",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "10:10 a.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "04:50 p.m",
        airline: ethiopian,
        price: "£699",
        transitTime: "15h 10m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "10:10 a.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "07:40 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "10:50 a.m",
            arrivePort: "Conakry Intl Airport (CKY)",
            arriveTime: "04:50 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Conakry Intl Airport",
        code: "CKY",
        departDate: "Fri, 15 Nov",
        departTime: "09:15 a.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:00 a.m",
        airline: ethiopian,
        price: "£699",
        transitTime: "4h 15m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Conakry Intl Airport (CKY)",
            depTime: "09:15 a.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "08:30 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "12:45 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:00 a.m",
          },
        ],
      },
    ],
    author: "@nolanissac",
    rows: 3,
    cols: 2,
  },

  {
    img: img5,
    title: "Entebbe",
    subtitle: "Uganda",
    data: [
      {
        title: "Entebbe Airport",
        destCode: "EBB",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "09:20 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "10:40 a.m",
        airline: rwand,
        price: "£512",
        transitTime: "1h 40m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "09:20 p.m",
            arrivePort: "Kigali Intl Airport (KGL)",
            arriveTime: "07:00 a.m",
          },
          {
            depPort: "Kigali Intl Airport (KGL)",
            depTime: "08:40 a.m",
            arrivePort: "Entebbe Airport (EBB)",
            arriveTime: "10:40 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Entebbe Airport",
        code: "EBB",
        departDate: "Fri, 15 Nov",
        departTime: "07:30 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:20 a.m",
        airline: rwand,
        price: "£512",
        transitTime: "2h 10m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Entebbe Airport (EBB)",
            depTime: "07:30 p.m",
            arrivePort: "Kigali Intl Airport (KGL)",
            arriveTime: "09:25 p.m",
          },
          {
            depPort: "Kigali Intl Airport (KGL)",
            depTime: "11:35 p.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:20 a.m",
          },
        ],
      },

      {
        title: "Entebbe Airport",
        destCode: "EBB",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "10:50 a.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "03:50 a.m",
        airline:turkish,
        price: "£516",
        transitTime: "1h 40m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "10:50 p.m",
            arrivePort: "Istanbul Airport (IST)",
            arriveTime: "04:55 p.m",
          },
          {
            depPort: "Istanbul Airport (IST)",
            depTime: "06:35 p.m",
            arrivePort: "Entebbe Airport (EBB)",
            arriveTime: "03:50 a.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Entebbe Airport",
        code: "EBB",
        departDate: "Fri, 15 Nov",
        departTime: "05:00 a.m",
        type: "Inbound",
        arrivalDate: "Fri, 15 Nov",
        arrivalTime: "05:40 p.m",
        airline: turkish,
        price: "£516",
        transitTime: "2h 5m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Entebbe Airport (EBB)",
            depTime: "05:00 a.m",
            arrivePort: "Istanbul Airport (IST)",
            arriveTime: "11:35 a.m",
          },
          {
            depPort: "Istanbul Airport (IST)",
            depTime: "01:40 p.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "05:40 p.m",
          },
        ],
      },

      {
        title: "Entebbe Airport",
        destCode: "EBB",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "02:55 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "03:30 p.m",
        airline: qatar,
        price: "£599",
        transitTime: "10h 20m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "02:55 p.m",
            arrivePort: "Doha Hamad Intl Airport (DOH)",
            arriveTime: "11:30 p.m",
          },
          {
            depPort: "Doha Hamad Intl Airport (DOH)",
            depTime: "09:50 a.m",
            arrivePort: "Entebbe Airport (EBB)",
            arriveTime: "03:30 p.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Entebbe Airport",
        code: "EBB",
        departDate: "Fri, 15 Nov",
        departTime: "05:30 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:10 a.m",
        airline: qatar,
        price: "£599",
        transitTime: "2h 50m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Entebbe Airport (EBB)",
            depTime: "05:30 p.m",
            arrivePort: "Doha Hamad Intl Airport (DOH)",
            arriveTime: "10:55 p.m",
          },
          {
            depPort: "Doha Hamad Intl Airport (DOH)",
            depTime: "01:45 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "06:10 a.m",
          },
        ],
      },
    ],
    author: "@hjrc33",
    rows: 3,
    cols: 2,
  },

  {
    img: img6,
    title: "Accra",
    subtitle: "Ghana",
    data: [
      {
        title: "Accra Kotoka Intl Aiport",
        destCode: "ACC",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "07:50 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "02:40 p.m",
        airline: portugal,
        price: "£572",
        transitTime: "11h 20m",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "07:50 p.m",
            arrivePort: "Lisbon Portela Airport (LIS)",
            arriveTime: "10:35 p.m",
          },
          {
            depPort: "Lisbon Portela Airport (LIS)",
            depTime: "09:55 a.m",
            arrivePort: "Accra Kotoka Intl Aiport (ACC)",
            arriveTime: "02:40 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Accra Kotoka Intl Aiport",
        code: "ACC",
        departDate: "Fri, 15 Nov",
        departTime: "10:30 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:55 p.m",
        airline: portugal,
        price: "£572",
        transitTime: "11h 25m",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Accra Kotoka Intl Aiport (ACC)",
            depTime: "10:30 p.m",
            arrivePort: "Lisbon Portela Airport (LIS)",
            arriveTime: "04:40 a.m",
          },
          {
            depPort: "Lisbon Portela Airport (LIS)",
            depTime: "04:05 p.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:55 p.m",
          },
        ],
      },

      {
        title: "Accra Kotoka Intl Aiport",
        destCode: "ACC",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "06:25 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "02:10 p.m",
        airline:kenya,
        price: "£699",
        transitTime: "6h 30m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "06:25 p.m",
            arrivePort: "Nairobi Jomo Kenyatti Airport (NBO)",
            arriveTime: "05:00 a.m",
          },
          {
            depPort: "Nairobi Jomo Kenyatti Airport (NBO)",
            depTime: "11:30 a.m",
            arrivePort: "Accra Kotoka Intl Aiport (ACC)",
            arriveTime: "02:10 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Accra Kotoka Intl Aiport",
        code: "ACC",
        departDate: "Fri, 15 Nov",
        departTime: "09:20 a.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "03:30 p.m",
        airline: kenya,
        price: "£699",
        transitTime: "15h 35m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Accra Kotoka Intl Aiport (ACC)",
            depTime: "09:20 a.m",
            arrivePort: "Nairobi Jomo Kenyatti Airport (NBO)",
            arriveTime: "06:00 p.m",
          },
          {
            depPort: "Nairobi Jomo Kenyatti Airport (NBO)",
            depTime: "09:35 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "03:30 p.m",
          },
        ],
      },

      {
        title: "Accra Kotoka Intl Aiport",
        destCode: "ACC",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "11:25 a.m",
        type: "Outbound",
        arrivalDate: "Tue, 15 Oct",
        arrivalTime: "11:05 p.m",
        airline:turkish,
        price: "£688",
        transitTime: "1h 35m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "11:25 a.m",
            arrivePort: "Istanbul Airport (IST)",
            arriveTime: "05:15 p.m",
          },
          {
            depPort: "Istanbul Airport (IST)",
            depTime: "06:50 p.m",
            arrivePort: "Accra Kotoka Intl Aiport (ACC)",
            arriveTime: "11:05 p.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Accra Kotoka Intl Aiport",
        code: "ACC",
        departDate: "Fri, 15 Nov",
        departTime: "08:55 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "12:30 p.m",
        airline: turkish,
        price: "£688",
        transitTime: "1h 30m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Accra Kotoka Intl Aiport (ACC)",
            depTime: "08:55 p.m",
            arrivePort: "Istanbul Airport (IST)",
            arriveTime: "06:50 a.m",
          },
          {
            depPort: "Istanbul Airport (IST)",
            depTime: "08:20 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "12:30 p.m",
          },
        ],
      },

      {
        title: "Accra Kotoka Intl Aiport",
        destCode: "ACC",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "12:40 p.m",
        type: "Outbound",
        arrivalDate: "Tue, 15 Oct",
        arrivalTime: "06:20 p.m",
        airline: british,
        price: "£699",
        transitTime: "",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Accra Kotoka Intl Aiport",
        code: "ACC",
        departDate: "Fri, 15 Nov",
        departTime: "10:50 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "05:30 a.m",
        airline:british,
        price: "£699",
        transitTime: "",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [],
      },

      {
        title: "Accra Kotoka Intl Aiport",
        destCode: "ACC",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "04:40 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "04:45 a.m",
        airline:royal,
        price: "£615",
        transitTime: "5h 20m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "04:40 p.m",
            arrivePort: "Mohammad V Intl Airport, Casablanca (CMN)",
            arriveTime: "07:55 p.m",
          },
          {
            depPort: "Mohammad V Intl Airport, Casablanca (CMN)",
            depTime: "01:15 a.m",
            arrivePort: "Accra Kotoka Intl Aiport (ACC)",
            arriveTime: "04:45 a.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Accra Kotoka Intl Aiport",
        code: "ACC",
        departDate: "Fri, 15 Nov",
        departTime: "04:00 a.m",
        type: "Inbound",
        arrivalDate: "Fri, 15 Nov",
        arrivalTime: "03:50 p.m",
        airline:royal,
        price: "£615",
        transitTime: "4h 5m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Accra Kotoka Intl Aiport (ACC)",
            depTime: "04:00 a.m",
            arrivePort: "Mohammad V Intl Airport, Casablanca (CMN)",
            arriveTime: "09:30 a.m",
          },
          {
            depPort: "Mohammad V Intl Airport, Casablanca (CMN)",
            depTime: "01:35 p.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "03:50 p.m",
          },
        ],
      },

      {
        title: "Accra Kotoka Intl Aiport",
        destCode: "ACC",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "10:10 a.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "11:20 a.m",
        airline: ethiopian,
        price: "£633",
        transitTime: "13h 0m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "10:10 a.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "07:40 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "08:40 a.m",
            arrivePort: "Accra Kotoka Intl Aiport (ACC)",
            arriveTime: "11:20 a.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Accra Kotoka Intl Aiport",
        code: "ACC",
        departDate: "Fri, 15 Nov",
        departTime: "04:20 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:00 a.m",
        airline: ethiopian,
        price: "£633",
        transitTime: "3h 45m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Accra Kotoka Intl Aiport (ACC)",
            depTime: "04:20 p.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "09:00 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "12:45 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:00 a.m",
          },
        ],
      },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },

  {
    img: img7,
    title: "Lusaka",
    subtitle: "Zambia",
    data: [
      {
        title: "Kenneth Kaunda Intl Airport, Lusaka",
        destCode: "LUN",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "06:25 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "09:10 a.m",
        airline: kenya,
        price: "£565",
        transitTime: "2h 25m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "06:25 p.m",
            arrivePort: "Nairobi Jomo Kenyatti Intel Airport (NBO)",
            arriveTime: "05:00 a.m",
          },
          {
            depPort: "Nairobi Jomo Kenyatti Intel Airport (NBO)",
            depTime: "07:25 a.m",
            arrivePort: "Kenneth Kaunda Intl Airport, Lusaka (LUN)",
            arriveTime: "09:10 a.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Kenneth Kaunda Intl Airport, Lusaka",
        code: "LUN",
        departDate: "Fri, 15 Nov",
        departTime: "10:00 a.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "03:30 p.m",
        airline:kenya,
        price: "£565",
        transitTime: "17h 45m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Kenneth Kaunda Intl Airport, Lusaka (LUN)",
            depTime: "10:00 a.m",
            arrivePort: "Nairobi Jomo Kenyatti Intel Airport (NBO)",
            arriveTime: "03:30 p.m",
          },
          {
            depPort: "Nairobi Jomo Kenyatti Intel Airport (NBO)",
            depTime: "09:35 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "03:30 p.m",
          },
        ],
      },

      {
        title: "Kenneth Kaunda Intl Airport, Lusaka",
        destCode: "LUN",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "10:10 a.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "01:20 a.m",
        airline: ethiopian,
        price: "£585",
        transitTime: "2h 30m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "10:10 a.m",
            arrivePort: "Bole Intl Aiport, Addis Ababa (ADD)",
            arriveTime: "07:40 p.m",
          },
          {
            depPort: "Bole Intl Aiport, Addis Ababa (ADD)",
            depTime: "10:10 p.m",
            arrivePort: "Kenneth Kaunda Intl Airport, Lusaka (LUN)",
            arriveTime: "01:20 a.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Kenneth Kaunda Intl Airport, Lusaka",
        code: "LUN",
        departDate: "Fri, 15 Nov",
        departTime: "03:10 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:00 a.m",
        airline: ethiopian,
        price: "£585",
        transitTime: "4h 35m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Kenneth Kaunda Intl Airport, Lusaka (LUN)",
            depTime: "03:10 p.m",
            arrivePort: "Bole Intl Aiport, Addis Ababa (ADD)",
            arriveTime: "08:10 p.m",
          },
          {
            depPort: "Bole Intl Aiport, Addis Ababa (ADD)",
            depTime: "12:45 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:00 a.m",
          },
        ],
      },

      {
        title: "Kenneth Kaunda Intl Airport, Lusaka",
        destCode: "LUN",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "02:55 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "08:35 a.m",
        airline: qatar,
        price: "£699",
        transitTime: "2h 30m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "02:55 p.m",
            arrivePort: "Doha Hamad Intl Airport (DOH)",
            arriveTime: "11:30 p.m",
          },
          {
            depPort: "Doha Hamad Intl Airport (DOH)",
            depTime: "02:25 a.m",
            arrivePort: "Kenneth Kaunda Intl Airport, Lusaka (LUN)",
            arriveTime: "08:35 a.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Kenneth Kaunda Intl Airport, Lusaka",
        code: "LUN",
        departDate: "Fri, 15 Nov",
        departTime: "02:45 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:10 a.m",
        airline: qatar,
        price: "£699",
        transitTime: "2h 50m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Kenneth Kaunda Intl Airport, Lusaka (LUN)",
            depTime: "02:45 p.m",
            arrivePort: "Doha Hamad Intl Airport (DOH)",
            arriveTime: "10:55 p.m",
          },
          {
            depPort: "Doha Hamad Intl Airport (DOH)",
            depTime: "01:45 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "06:10 a.m",
          },
        ],
      },

      {
        title: "Kenneth Kaunda Intl Airport, Lusaka",
        destCode: "LUN",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "10:15 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "02:35 p.m",
        airline:emirates,
        price: "£755",
        transitTime: "1h 20m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "10:15 p.m",
            arrivePort: "Dubai Intl Airport (DXB)",
            arriveTime: "08:05 a.m",
          },
          {
            depPort: "Dubai Intl Airport (DXB)",
            depTime: "09:25 a.m",
            arrivePort: "Kenneth Kaunda Intl Airport, Lusaka (LUN)",
            arriveTime: "02:35 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Kenneth Kaunda Intl Airport, Lusaka",
        code: "LUN",
        departDate: "Fri, 15 Nov",
        departTime: "09:20 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "11:40 a.m",
        airline: emirates,
        price: "£755",
        transitTime: "1h 20m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Kenneth Kaunda Intl Airport, Lusaka (LUN)",
            depTime: "09:20 p.m",
            arrivePort: "Dubai Intl Airport (DXB)",
            arriveTime: "06:25 a.m",
          },
          {
            depPort: "Dubai Intl Airport (DXB)",
            depTime: "07:45 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "11:40 a.m",
          },
        ],
      },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },

  {
    img: img9,
    title: "Luanda",
    subtitle: "Angola",
    data: [
      {
        title: "Quatro de Fevereiro Airport, Luanda",
        destCode: "LAD",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "05:15 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "10:25 a.m",
        airline: turkish,
        price: "£499",
        transitTime: "2h 10m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "05:15 p.m",
            arrivePort: "Istanbul Airport, (IST)",
            arriveTime: "11:20 p.m",
          },
          {
            depPort: "Istanbul Airport, (IST)",
            depTime: "01:30 a.m",
            arrivePort: "Quatro de Fevereiro Airport, Luanda (LAD)",
            arriveTime: "10:25 a.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Quatro de Fevereiro Airport, Luanda",
        code: "LAD",
        departDate: "Fri, 15 Nov",
        departTime: "05:05 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "12:30 p.m",
        airline: turkish,
        price: "£499",
        transitTime: "2h 35m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Quatro de Fevereiro Airport, Luanda (LAD)",
            depTime: "05:05 p.m",
            arrivePort: "Istanbul Airport, (IST)",
            arriveTime: "05:45 a.m",
          },
          {
            depPort: "Istanbul Airport, (IST)",
            depTime: "08:20 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "12:30 p.m",
          },
        ],
      },

      {
        title: "Quatro de Fevereiro Airport, Luanda",
        destCode: "LAD",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Wed, 16 Oct",
        departTime: "06:45 p.m",
        type: "Outbound",
        arrivalDate: "Thu, 17 Oct",
        arrivalTime: "07:05 a.m",
        airline: portugal,
        price: "£528",
        transitTime: "2h 0m",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "06:45 p.m",
            arrivePort: "Lisbon Portela Airport (LIS)",
            arriveTime: "09:30 p.m",
          },
          {
            depPort: "Lisbon Portela Airport (LIS)",
            depTime: "11:30 p.m",
            arrivePort: "Quatro de Fevereiro Airport, Luanda (LAD)",
            arriveTime: "07:05 a.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Quatro de Fevereiro Airport, Luanda",
        code: "LAD",
        departDate: "Mon, 18 Nov",
        departTime: "09:35 a.m",
        type: "Inbound",
        arrivalDate: "Mon, 18 Nov",
        arrivalTime: "09:35 p.m",
        airline:portugal,
        price: "£528",
        transitTime: "2h 15m",
        details: "With 1 Bag of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Quatro de Fevereiro Airport, Luanda (LAD)",
            depTime: "09:35 a.m",
            arrivePort: "Lisbon Portela Airport (LIS)",
            arriveTime: "04:30 p.m",
          },
          {
            depPort: "Lisbon Portela Airport (LIS)",
            depTime: "06:45 p.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "09:35 p.m",
          },
        ],
      },

      {
        title: "Quatro de Fevereiro Airport, Luanda",
        destCode: "LAD",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "10:10 a.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "12:25 p.m",
        airline: ethiopian,
        price: "£529",
        transitTime: "14h 0m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "10:10 a.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "07:40 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "09:40 a.m",
            arrivePort: "Quatro de Fevereiro Airport, Luanda (LAD)",
            arriveTime: "12:25 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Quatro de Fevereiro Airport, Luanda",
        code: "LAD",
        departDate: "Fri, 15 Nov",
        departTime: "01:50 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:00 a.m",
        airline:ethiopian,
        price: "£529",
        transitTime: "4h 10m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Quatro de Fevereiro Airport, Luanda (LAD)",
            depTime: "01:50 p.m",
            arrivePort: "Bole Intl Airport, Addis Ababa (ADD)",
            arriveTime: "08:35 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addis Ababa (ADD)",
            depTime: "12:45 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:00 a.m",
          },
        ],
      },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },

  {
    img: img10,
    title: "Banjul",
    subtitle: " Gambia",
    data: [
      {
        title: "Banjul Intl Airport",
        destCode: "BJL",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Wed, 16 Oct",
        departTime: "07:45 a.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "06:05 p.m",
        airline: brusless,
        price: "£499",
        transitTime: "2h 30m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "07:45 a.m",
            arrivePort: "Brussels Airport (BRU)",
            arriveTime: "09:45 a.m",
          },
          {
            depPort: "Brussels Airport (BRU)",
            depTime: "12:15 p.m",
            arrivePort: "Banjul Intl Airport (BJL)",
            arriveTime: "06:05 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Banjul Intl Airport",
        code: "BJL",
        departDate: "Fri, 15 Nov",
        departTime: "08:40 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "11:05 a.m",
        airline: brusless,
        price: "£499",
        transitTime: "4h 30m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Banjul Intl Airport (BJL)",
            depTime: "08:40 p.m",
            arrivePort: "Brussels Airport (BRU)",
            arriveTime: "05:10 a.m",
          },
          {
            depPort: "Brussels Airport (BRU)",
            depTime: "09:40 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "11:05 a.m",
          },
        ],
      },

      {
        title: "Banjul Intl Airport",
        destCode: "BJL",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Wed, 16 Oct",
        departTime: "04:40 p.m",
        type: "Outbound",
        arrivalDate: "Thu, 17 Oct",
        arrivalTime: "01:30 a.m",
        airline: royal,
        price: "£626",
        transitTime: "3h 0m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "04:40 p.m",
            arrivePort: "Mohammad V Intl Airport, Casablanca (CMN)",
            arriveTime: "07:55 p.m",
          },
          {
            depPort: "Mohammad V Intl Airport, Casablanca (CMN)",
            depTime: "10:55 p.m",
            arrivePort: "Banjul Intl Airport (BJL)",
            arriveTime: "01:30 a.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Banjul Intl Airport",
        code: "BJL",
        departDate: "Fri, 15 Nov",
        departTime: "02:30 a.m",
        type: "Inbound",
        arrivalDate: "Fri, 15 Nov",
        arrivalTime: "02:45 p.m",
        airline: royal,
        price: "£626",
        transitTime: "5h 40m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Banjul Intl Airport (BJL)",
            depTime: "02:30 a.m",
            arrivePort: "Mohammad V Intl Airport, Casablanca (CMN)",
            arriveTime: "06:50 a.m",
          },
          {
            depPort: "Mohammad V Intl Airport, Casablanca (CMN)",
            depTime: "12:30 p.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "02:45 p.m",
          },
        ],
      },

      {
        title: "Banjul Intl Airport",
        destCode: "BJL",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "05:15 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "05:25 a.m",
        airline: turkish,
        price: "£549",
        transitTime: "1h 25m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "05:15 p.m",
            arrivePort: "Istanbul Airport (IST)",
            arriveTime: "11:20 p.m",
          },
          {
            depPort: "Istanbul Airport (IST)",
            depTime: "12:45 a.m",
            arrivePort: "Banjul Intl Airport (BJL)",
            arriveTime: "05:25 a.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Banjul Intl Airport",
        code: "BJL",
        departDate: "Thu, 14 Nov",
        departTime: "09:00 p.m",
        type: "Inbound",
        arrivalDate: "Fri, 15 Nov",
        arrivalTime: "12:30 p.m",
        airline: turkish,
        price: "£549",
        transitTime: "1h 25m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Banjul Intl Airport (BJL)",
            depTime: "09:00 p.m",
            arrivePort: "Istanbul Airport (IST)",
            arriveTime: "06:55 a.m",
          },
          {
            depPort: "Istanbul Airport (IST)",
            depTime: "08:20 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "12:30 p.m",
          },
        ],
      },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },

  {
    img: img8,
    title: "Harare",
    subtitle: "Zimbabwe",
    data: [
      {
        title: "Harare Intl Airport",
        destCode: "HRE",
        name: "London Heathrow Airport",
        code: "LHR",
        departDate: "Tue, 15 Oct",
        departTime: "09:20 p.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "01:30 p.m",
        airline:rwand,
        price: "£505",
        transitTime: "3h 45m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Heathrow Airport (LHR)",
            depTime: "09:20 p.m",
            arrivePort: "Kigali Intl Airport (KGL)",
            arriveTime: "07:00 a.m",
          },
          {
            depPort: "Kigali Intl Airport (KGL)",
            depTime: "10:45 a.m",
            arrivePort: "Harare Intl Airport (HRE)",
            arriveTime: "01:30 p.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Harare Intl Airport",
        code: "HRE",
        departDate: "Fri, 15 Nov",
        departTime: "05:00 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:20 a.m",
        airline:rwand,
        price: "£505",
        transitTime: "3h 35m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Harare Intl Airport (HRE)",
            depTime: "05:00 p.m",
            arrivePort: "Kigali Intl Airport (KGL)",
            arriveTime: "08:00 p.m",
          },
          {
            depPort: "Kigali Intl Airport (KGL)",
            depTime: "11:35 p.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:20 a.m",
          },
        ],
      },

      {
        title: "Harare Intl Airport",
        destCode: "HRE",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Tue, 15 Oct",
        departTime: "10:10 a.m",
        type: "Outbound",
        arrivalDate: "Wed, 16 Oct",
        arrivalTime: "01:30 a.m",
        airline: ethiopian,
        price: "£515",
        transitTime: "2h 20m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "10:10 a.m",
            arrivePort: "Bole Intl Airport, Addid Ababa (ADD)",
            arriveTime: "07:40 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addid Ababa (ADD)",
            depTime: "10:00 p.m",
            arrivePort: "Harare Intl Airport (HRE)",
            arriveTime: "01:30 a.m",
          },
        ],
      },
      {
        title: "London Heathrow Airport",
        destCode: "LHR",
        name: "Harare Intl Airport",
        code: "HRE",
        departDate: "Fri, 15 Nov",
        departTime: "03:10 p.m",
        type: "Inbound",
        arrivalDate: "Sat, 16 Nov",
        arrivalTime: "06:00 a.m",
        airline: ethiopian,
        price: "£515",
        transitTime: "4h 25m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Harare Intl Airport (HRE)",
            depTime: "03:10 p.m",
            arrivePort: "Bole Intl Airport, Addid Ababa (ADD)",
            arriveTime: "08:20 p.m",
          },
          {
            depPort: "Bole Intl Airport, Addid Ababa (ADD)",
            depTime: "12:45 a.m",
            arrivePort: "London Heathrow Airport (LHR)",
            arriveTime: "06:00 a.m",
          },
        ],
      },

      {
        title: "Harare Intl Airport",
        destCode: "HRE",
        name: "London Gatwick Airport",
        code: "LGW",
        departDate: "Wed, 16 Oct",
        departTime: "09:45 p.m",
        type: "Outbound",
        arrivalDate: "Thu, 17 Oct",
        arrivalTime: "05:10 p.m",
        airline: emirates,
        price: "£666",
        transitTime: "1h 50m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "London Gatwick Airport (LGW)",
            depTime: "09:45 p.m",
            arrivePort: "Dubai Intl Airport, (DXB)",
            arriveTime: "07:35 a.m",
          },
          {
            depPort: "Dubai Intl Airport, (DXB)",
            depTime: "09:25 a.m",
            arrivePort: "Harare Intl Airport (HRE)",
            arriveTime: "05:10 p.m",
          },
        ],
      },
      {
        title: "London Gatwick Airport",
        destCode: "LGW",
        name: "Harare Intl Airport",
        code: "HRE",
        departDate: "Tue, 12 Nov",
        departTime: "06:45 p.m",
        type: "Inbound",
        arrivalDate: "Wed, 13 Nov",
        arrivalTime: "11:40 a.m",
        airline:emirates,
        price: "£666",
        transitTime: "1h 15m",
        details: "With 2 Bags of 23KGs + Hand-carry",
        flightDetails: [
          {
            depPort: "Harare Intl Airport (HRE)",
            depTime: "06:45 p.m",
            arrivePort: "Dubai Intl Airport, (DXB)",
            arriveTime: "06:25 a.m",
          },
          {
            depPort: "Dubai Intl Airport, (DXB)",
            depTime: "07:40 a.m",
            arrivePort: "London Gatwick Airport (LGW)",
            arriveTime: "11:40 a.m",
          },
        ],
      },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img12,
    title: "Abidjan ",
    subtitle: "Ivory Coast",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img13,
    title: "Mali",
    subtitle: "",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img14,
    title: "Dakar",
    subtitle: " Senegal",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img19,
    title: "Liberia",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    subtitle: "",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img15,
    title: "Lome Togo",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    subtitle: "",
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img16,
    title: "Cape-Town",
    subtitle: "South Africa",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img17,
    title: "Kingston ",
    subtitle: "Jamaica",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img18,
    title: "Douala",
    subtitle: "Cameroon",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  {
    img: img20,
    title: "Abuja ",
    subtitle: "Nigeria",
    data: [
      { name: "Freetown", code: "FNA" },
      { name: "Lagos", code: "LOS" },
      { name: "HARARE", code: "HRE" },
      { name: "Johannesburg", code: "JNB" },
      { name: "Conakry", code: "CKY" },
      { name: "ENTEBBE", code: "ENTEBBE" },
      { name: "Accra", code: "ACC" },
      { name: "LUSAKA", code: "LUN" },
      { name: "Banjul", code: "BJL" },
      { name: "Luanda", code: "LAD" },
      { name: "GUINEA BISSAU", code: "OXB" },
      { name: "Kinshasa", code: "FIH" },
      { name: "Abidjan", code: "ABJ" },
      { name: "BAMAKO", code: "BKO" },
      { name: "DAKAR", code: "DKR" },
      { name: "LOME", code: "LFW" },
      { name: "Capetown", code: "CPT" },
      { name: "Kingston", code: "KIN" },
      { name: "Lilongwe", code: "LLW" },
      { name: "Douala", code: "DLA" },
      { name: "Monrovia", code: "ROB" },
      { name: "Abuja", code: "ABV" },
    ],
    author: "@arwinneil",
    rows: 3,
    cols: 2,
    featured: true,
  },
  // {
  //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //     title: 'Basketball',
  //     author: '@tjdragotta',
  // },
  // {
  //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //     title: 'Fern',
  //     author: '@katie_wasserman',
  // },
];

const Itemdetails = () => {
  const location = useLocation();
  const searchParams = location.state;
  // console.log("this is location === ", searchParams);
  const { title } = useParams();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const totalItems = 22;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setPage(page + 1);
  };

  const d = item.find((titl) => titl.title === title);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    const date = new Date(Date.UTC(year, month - 1, day));

    // Extract weekday (short form) and month (short form) names
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const weekday = weekdays[date.getUTCDay()];
    const monthName = months[date.getUTCMonth()];

    // Format the date string in the desired format "Sun, 14 Apr"
    const formattedDate = `${weekday}, ${day} ${monthName}`;
    return formattedDate;
  };

  // Function to filter `d` based on `searchParams`
  const filterDBySearchParams = (obj, params) => {
    if (!params || !obj) {
      return obj;
    }

    let dd;
    if (params.to) {
      dd = obj.find((item) => item.title === params.to);
    }

    let filteredData = dd.data;
    if (params.from) {
      filteredData = filteredData.filter((item) => {
        return item.name === params.from || item.title === params.from;
        // return item.data.some((dataItem) => {
        //   return dataItem.name
        //     .toLowerCase()
        //     .includes(params.from.toLowerCase());
        // });
        // return item.data.some(
        //   (dataItem) => dataItem.name === params.from
        // );
      });
      dd = {
        ...dd,
        data: filteredData,
      };
    }

    if (params.departure) {
      const formattedDeparture = formatDate(params.departure);
      // dd = filteredData.find((item) => {
      //   return item.data.some(
      //     (dataItem) => dataItem.departDate === formattedDeparture
      //   );
      // });
      filteredData = filteredData.filter((item) => {
        return (
          item.departDate === formattedDeparture ||
          item.departDate !== formattedDeparture
        );
      });
      dd = {
        ...dd,
        data: filteredData,
      };
    }

    if (params.returnDate) {
      const formattedReturn = formatDate(params.returnDate);
      // dd = filteredData.find((item) => {
      //   return item.data.some(
      //     (dataItem) => dataItem.departDate === formattedReturn
      //   );
      // });
      filteredData = filteredData.filter((item) => {
        return (
          item.departDate === formattedReturn ||
          item.departDate !== formattedReturn
        );
      });
      dd = {
        ...dd,
        data: filteredData,
      };
    }

    if (params.airlines !== "All Airlines") {
      filteredData = filteredData.filter((item) => {
        return item.airline === params.airlines;
      });
      dd = {
        ...dd,
        data: filteredData,
      };
    }
    return dd;
  };

  // Filter `d` based on `searchParams` if `searchParams` is not null
  const filteredD = searchParams
    ? filterDBySearchParams(item, searchParams.formValues)
    : d;
  console.log("this is search params === ", searchParams);

  const handleEnquire = (data) => {
    navigate("/flight-details", { state: { data } });
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${filteredD?.img})`, // Relative path to the image
          backgroundSize: "cover", // or 'contain' depending on your preference
          backgroundPosition: "center", // or any other position you prefer
          // Add other styles as needed
          width: "100%", // Example width
          height: "400px",
          mt: "1px",

          // Example height
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: "100px",
          }}
        >
          <Typography
            sx={{
              marginBottom: "20px",
              backgroundColor: "#ffd701",
              paddingLeft: "6px",
              paddingRight: "8px",
              borderRadius: "6px",
            }}
          >
            <PhoneOutlined
              sx={{ color: "black", mb: "-5px", fontSize: "40px" }}
            />{" "}
            <a
              href="tel:+442080041191"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
                fontSize: "35px",
              }}
            >
              +44 208 0041 191
            </a>
          </Typography>

          <Typography variant="h4" sx={{ color: "white" }}>
            Search Your Desired Flights
          </Typography>
        </Box>
      </Box>
      <Container>
        <Box sx={{ mt: "-130px" }}>
          <BasicTabs />
        </Box>
        <Typography
          varient="h2"
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#720d5d",
            mt: "30px",
          }}
        >
          Cheap Flight To {filteredD?.title}{" "}
        </Typography>
        <Typography
          varient="h2"
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#000000d1",
            mt: "5px",
          }}
        >
          Fly far, fly high, fly safari{" "}
        </Typography>

        <Grid container sx={{ mt: "20px" }}>
          {filteredD?.data?.slice(0, endIndex).map((data) => {
            return (
              <Grid item xs={12} lg={6} key={data.code}>
                <Box
                  sx={{
                    position: "relative",
                    borderBottom: "1px solid rgba(43, 5, 34, .2)",
                    borderTop: "1px solid rgba(43, 5, 34, .2)",
                    borderLeft:
                      data.type === "Outbound"
                        ? "1px solid rgba(43, 5, 34, .2)"
                        : "none",
                    borderRight:
                      data.type === "Inbound"
                        ? "1px solid rgba(43, 5, 34, .2)"
                        : "none",
                    // borderRadius: "10px",
                    transition: "background-color 0.3s, color 0.3s",
                    height: "100%",
                    marginBottom: "10px",
                    // Add transition for smoother effect
                    "&:hover": {
                      backgroundColor: "rgba(251, 206, 233, .3)", // Change background color on hover
                      color: "#000",
                      // Change text color on hover
                    },
                    // '& button': {
                    //   backgroundColor: '#dc3545', // Change button background color on hover
                    // },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#e30425",
                      fontSize: { xs: "18px", lg: "24px" },
                      fontWeight: 600,
                      mb: "15px",
                      marginLeft: "10px",
                      marginTop: "10px",
                      textAlign: "center",
                    }}
                  >
                    {data.type}
                  </Typography>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        justifyContent: "space-around",
                        alignItems: "center",
                        mt: "30px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#e30425",
                            fontSize: { xs: "18px", lg: "24px" },
                            fontWeight: 600,
                            mb: "15px",
                          }}
                        >
                          {data.code}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#4e0d3a",
                            fontSize: "16px",
                            fontWeight: 700,
                          }}
                        >
                          {data.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(43, 5, 34, .7)",
                            fontSize: "14px",
                            fontWeight: 600,
                          }}
                        >
                          {data.departDate}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(43, 5, 34, .7)",
                            fontSize: "14px",
                            fontWeight: 600,
                          }}
                        >
                          {data.departTime}
                        </Typography>
                      </Box>
                      <Box>
                        <FlightTakeoffOutlinedIcon sx={{ color: "#e30425" }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#e30425",
                            fontSize: { xs: "18px", lg: "24px" },
                            fontWeight: 600,
                            mb: "15px",
                          }}
                        >
                          {data.destCode}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#4e0d3a",
                            fontSize: "16px",
                            fontWeight: 700,
                          }}
                        >
                          {data.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "rgba(43, 5, 34, .7)",
                            fontSize: "14px",
                            fontWeight: 600,
                          }}
                        >
                          {data.arrivalDate}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(43, 5, 34, .7)",
                            fontSize: "14px",
                            fontWeight: 600,
                          }}
                        >
                          {data.arrivalTime}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#e30425",
                            fontSize: { xs: "18px", lg: "24px" },
                            fontWeight: 600,
                            mb: "15px",
                          }}
                        >
                          {data.type === "Outbound" ? data.price : ""}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        mt: "30px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "rgba(43, 5, 34, .7)",
                          fontSize: "14px",
                          fontWeight: 600,
                          marginBottom: "10px",
                        }}
                      >
                        {data.type === "Outbound" ? data.details : ""}
                      </Typography>
                      {data.type === "Outbound" ? <Divider /> : ""}
                    </Box>
                    <Box
                      sx={{
                        mt: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        mb: "60px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          gap: "40px",
                          width:'60%'
                        }}
                      >
                        <img src={data.type === "Outbound" ? data.airline : ""} style={{width:'40%',}}>
                          
                        </img>
                        <Box>
                          {/* <Typography
                            sx={{
                              color: "#4e0d3a",
                              fontSize: "16px",
                              fontWeight: 500,
                            }}
                          >
                            Return Economy
                          </Typography> */}
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "#4e0d3a",
                            fontSize: "16px",
                            fontWeight: 500,
                          }}
                        >
                          {data.type === "Outbound" ? "+44 208 0041 191" : ""}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{ position: "absolute", left: "90%", bottom: "10px" }}
                  >
                    {data.type === "Outbound" ? (
                      <Button
                        onClick={() => handleEnquire(data)}
                        sx={{
                          color: "white",
                          background: "#891652",
                          fontSize: "16px",
                          width: "160px",
                          fontWeight: 700,
                          "&:hover": {
                            backgroundColor: "#dc3545", // Change button background color on hover
                          },
                        }}
                      >
                        Enquire Now
                      </Button>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Box sx={{ mt: "130px" }}>
        <NewsLetter />
      </Box>
    </>
  );
};

export default Itemdetails;
