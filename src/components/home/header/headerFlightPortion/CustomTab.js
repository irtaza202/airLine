import { Box, Button, Typography } from "@mui/material";
import { AutoComplete, DatePicker, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
// import { useNavigate } from 'react-router-dom/dist';

const destinationData = [
  { name: "Freetown", code: "FNA" },
  { name: "Lagos", code: "LOS" },
  { name: "Harare", code: "HRE" },
  { name: "Johannesburg", code: "JNB" },
  { name: "Conakry", code: "CKY" },
  { name: "Entebbe", code: "EBB" },
  { name: "Accra", code: "ACC" },
  { name: "Lusaka", code: "LUN" },
  { name: "Banjul", code: "BJL" },
  { name: "Luanda", code: "LAD" },
  //   { name: "Guinea Bissau", code: "OXB" },
  { name: "Kinshasa", code: "FIH" },
  { name: "Abidjan", code: "ABJ" },
  { name: "Bamako", code: "BKO" },
  { name: "Dakar Diass", code: "DSS" },
  { name: "Lome", code: "LFW" },
  { name: "Capetown", code: "CPT" },
  { name: "Kingston", code: "KIN" },
  { name: "Lilongwe", code: "LLW" },
  { name: "Douala", code: "DLA" },
  { name: "Monrovia", code: "ROB" },
  { name: "Abuja", code: "ABV" },
];

const departureData = [
  { name: "Freetown", code: "FNA" },
  { name: "Lagos", code: "LOS" },
  { name: "HARARE", code: "HRE" },
];

const CustomTab = ({ r }) => {
  const [searchValue, setSearchValue] = useState("");
  const { Option } = AutoComplete;
  const [adults, setAdults] = useState(1); // Initial count of adults
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  // Initial count of children
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    departure: null,
    returnDate: null,
    adults: 1,
    children: 0,
    economy: "Any",
    airlines: "All Airlines",
  });
  const navigate = useNavigate();

  const handleSearchNavigate = () => {
    // console.log(formValues, 'formvalues')

    const searchParams = new URLSearchParams(formValues);
    // console.log(searchParams, 'sera')
    navigate(`/details/${formValues.to}`, { state: { formValues } });
    // navigate(`/search?${searchParams.toString()}`);
  };

  const handleAdultsIncrement = () => {
    setAdults(adults + 1);
  };

  const handleAdultsDecrement = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const handleChildrenIncrement = () => {
    setChildren(children + 1);
  };
  const handleInfantsIncrement = () => {
    setInfants(infants + 1);
  };

  const handleChildrenDecrement = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };
  const handleInfantsDecrement = () => {
    if (infants > 0) {
      setInfants(infants - 1);
    }
  };
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  const filteredDestinations = destinationData.filter((destination) =>
    destination.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    destination.code.toLowerCase().includes(searchValue.toLowerCase())
  );
  const handleChange = (name, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Form>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Form.Item className="form_width">
            <Typography variant="h6" sx={{ color: "white" }}>
              From
            </Typography>
            <Select
              style={{
                background: "white",
                borderRadius: "3px",
                width: "100%",
                height: "50px",
                border: "none",
              }}
              placeholder="Choose Your Departure"
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              } // Enable search functionality
              onChange={(value) => handleChange("from", value)} // Connect handleChange to Select's onChange event
            >
              <Select.Option value="London Heathrow Airport">
                London Heathrow Airport (LHR)
              </Select.Option>
              <Select.Option value="London Gatwick Airport">
                London Gatwick Airport (LGW)
              </Select.Option>
              <Select.Option value="London City Airport">
                London City Airport (LCY)
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="form_width">
            <Typography variant="h6" style={{ color: "white" }}>
              To
            </Typography>
            <AutoComplete
              style={{
                background: "white",
                borderRadius: "3px",
                height: "50px",
                border: "none",
                width: "100%",
              }}
              placeholder="Choose Your Destination"
              onSearch={handleSearch}
              onChange={(value) => handleChange("to", value)} // Connect handleChange to AutoComplete's onChange event
              value={formValues.to} // Set value to formValues.to
            >
              {filteredDestinations
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((destination) => (
                  <Option key={destination.code} value={destination.name}>
                    {destination.name} {destination.code}
                  </Option>
                ))}
            </AutoComplete>
          </Form.Item>
          <Form.Item className="form_low-heading">
            <Typography variant="h6" sx={{ color: "white" }}>
              Departure
            </Typography>

            <DatePicker
              type="search"
              style={{
                background: "white",
                borderRadius: "3px",
                width: "100%",
                height: "50px",
                border: "none",
              }}
              label="Departure"
              onChange={(date, dateString) =>
                handleChange("departure", dateString)
              }
            />
          </Form.Item>
          <Form.Item className="form_low-heading">
            <Typography variant="h6" sx={{ color: "white" }}>
              Return
            </Typography>

            <DatePicker
              type="search"
              style={{
                background: "white",
                borderRadius: "3px",
                width: "100%",
                height: "50px",
                border: "none",
              }}
              label="Return Date"
              disabled={r}
              onChange={(date, dateString) =>
                handleChange("returnDate", dateString)
              } // Connect handleChange to DatePicker's onChange event
            // Set value to formValues.returnDate
            />
          </Form.Item>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Form.Item className="form_width">
            <Typography variant="h6" sx={{ color: "white" }}>
              Travellers
            </Typography>
            <Select
              style={{ width: "100%", height: "50px" }}
              value={`Adults: ${adults}, Children: ${children},Infants: ${infants}`}
              dropdownRender={(menu) => (
                <div>
                  <div style={{ padding: "8px 16px" }}>
                    <div>
                      <span style={{ marginRight: '13px' }}>Adults:</span>
                      <Button onClick={handleAdultsDecrement}>-</Button>
                      <span>{adults}</span>
                      <Button onClick={handleAdultsIncrement}>+</Button>
                    </div>
                    <div>
                      <span>Children:</span>
                      <Button onClick={handleChildrenDecrement}>-</Button>
                      <span>{children}</span>
                      <Button onClick={handleChildrenIncrement}>+</Button>
                    </div>
                    <div >
                      <span >Infants:</span>
                      <Button onClick={handleInfantsDecrement} sx={{ paddingLeft: '25px' }}>-</Button>
                      <span style={{ paddingLeft: '10px' }}>{infants}</span>
                      <Button onClick={handleInfantsIncrement} sx={{ paddingLeft: '10px' }}>+</Button>
                    </div>
                  </div>
                </div>
              )}
            />
          </Form.Item>
          <Form.Item className="form_low-heading" initialValue="Any">
            <Typography variant="h6" sx={{ color: "white" }}>
              Economy
            </Typography>

            <Select
              style={{
                background: "white",
                borderRadius: "3px",
                width: "100%",
                height: "50px",
                border: "none",
              }}
              placeholder="Any"
              // onChange={handleReportChange}
              // value={String(name)}
              showSearch
              optionFilterProp="children"
              onChange={(value) => handleChange("economy", value)} // Connect handleChange to Select's onChange event
              value={formValues.economy}
            >
              <Select.Option value="Economy">Economy</Select.Option>
              <Select.Option value="Premium Economy">
                Premium Economy
              </Select.Option>
              <Select.Option value="Business">Business</Select.Option>
              <Select.Option value="First Class">First Class</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item className="form_low-heading">
            <Typography variant="h6" sx={{ color: "white" }}>
              All Air Lines
            </Typography>

            <Select
              style={{
                background: "white",
                borderRadius: "3px",
                width: "100%",
                height: "50px",
                border: "none",
              }}
              placeholder="Choose Airline"
              // onChange={handleReportChange}
              // value={String(name)}
              showSearch
              optionFilterProp="children"
              onChange={(value) => handleChange("airlines", value)} // Connect handleChange to Select's onChange event
            // value={formValues.airlines}
            >
              <Select.Option value="Air Algerie">Air Algerie</Select.Option>
              <Select.Option value="Alitalia">Alitalia</Select.Option>
              <Select.Option value="British Airways">
                British Airways
              </Select.Option>
              <Select.Option value="Brussels Airlines">
                Brussels Airlines
              </Select.Option>
              <Select.Option value="Egyptair">Egyptair</Select.Option>
              <Select.Option value="Emirates">Emirates</Select.Option>
              <Select.Option value="Ethiopian Airlines">
                Ethiopian Airlines
              </Select.Option>
              <Select.Option value="Iberia">Iberia</Select.Option>
              <Select.Option value="Kenya Airlines">
                Kenya Airlines
              </Select.Option>
              <Select.Option value="Qatar Airways">Qatar Airways</Select.Option>
              <Select.Option value="Royal Air Maroc">
                Royal Air Maroc
              </Select.Option>
              <Select.Option value="Rwand Air">Rwand Air</Select.Option>
              <Select.Option value="Swiss Intl Airlines">
                Swiss Intl Airlines
              </Select.Option>
              <Select.Option value="TAP Portugal">TAP Portugal</Select.Option>
              <Select.Option value="Turkish Airlines">
                Turkish Airlines
              </Select.Option>
            </Select>
          </Form.Item>
          <Box className="form_width">
            <Typography variant="h6"></Typography>

            <Button
              type="search"
              sx={{
                backgroundColor: "#e30425",
                borderRadius: "3px",
                width: "100%",
                height: "50px",
                border: "none",
                color: "white",
                marginTop: "10px",
              }}
              label="Choose your Origion"
              onClick={handleSearchNavigate}
            >
              {" "}
              search
            </Button>
          </Box>
        </Box>
      </Form>
    </Box>
  );
};

export default CustomTab;
