import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect, useCallback } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { get, post } from "../../../service/apiServices";
import { margin } from "@mui/system";
import Table from "../table/Table";
const customerTableHead = ["", "City", "Country"];
const City = () => {
  const [countries, setContries] = useState([]);
  const [city, setCity] = useState({
    name: "",
    country_id: "",
  });
  const [cities, setCities] = useState([])
  useEffect(() => {
    const fetchCountryApi = async () => {
      const result = await get("country/data");
      console.log(result);
      setContries(result);
    };
    fetchCountryApi();
  }, []);
  useEffect(() => {
    const fectchCityApi = async () => {
      const result = await get("city/data");
      console.log(result);
      setCities(result);
    };
    fectchCityApi();
  }, [city])
  const handelAddProduct = () => {
    const addProductApi = async () => {
      const result = await post("city/save", city);
      console.log(result);
      setCity({
        name: "",
        country_id: "",
      })
    };
    addProductApi();
  };
  const renderBody = useCallback((item, index, countries) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{countries.find(f => f.id === item.country_id).name}</td>
      </tr>
    );
  }, []);
  return (
    <div>
      <h2 className="page-header">Add City</h2>
      <div className="row">
        <div className="col-12">
          <div className="card_custom">
            <div className="card__body">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      value={city.name}
                      onChange={(e) =>
                        setCity({
                          ...city,
                          name: e.target.value,
                        })
                      }
                      style={{ width: "100%" }}
                      sx={{ input: { color: "black", background: "#fff" } }}
                      id="filled-basic"
                      label="City Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      onChange={(event, newValue) => {
                        setCity({
                          ...city,
                          country_id: newValue === null ? 0 : newValue.id,
                        });
                      }}
                      id="controllable-states-demo"
                      getOptionLabel={(countries) => `${countries.name}`}
                      options={countries}
                      sx={{ width: "100%", background: "#fff" }}
                      isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                      }
                      noOptionsText={"NO COUNTRY"}
                      renderOption={(props, countries) => (
                        <Box component="li" {...props} key={countries.id}>
                          {countries.name}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField {...params} label="Search Country" />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={handelAddProduct}>
                      Add City
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card_custom">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                bodyData={cities}
                renderBody={renderBody}
                data={countries}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default City;
