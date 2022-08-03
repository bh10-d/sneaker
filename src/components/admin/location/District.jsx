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
const customerTableHead = ["", "District", "Cost Ship", "City"];
const District = () => {
  const [cities, setCities] = useState([]);
  const [district, setDistrict] = useState({
    name: "",
    city_id: "",
    cost_ship: 0
  });
  const [districts, setDistricts] = useState([])
  useEffect(() => {
    const fetchCountryApi = async () => {
      const result = await get("city/data");
      console.log(result);
      setCities(result);
    };
    fetchCountryApi();
  }, []);
  useEffect(() => {
    const fectchCityApi = async () => {
      const result = await get("district/data");
      console.log(result);
      setDistricts(result);
    };
    fectchCityApi();
  }, [district])
  const handelAddProduct = () => {
    const addProductApi = async () => {
      const result = await post("district/save", district);
      console.log(result);
      setDistrict({
        name: "",
        city_id: "",
        cost_ship: 0
      })
    };
    addProductApi();
  };
  const renderBody = useCallback((item, index, cities) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>$ {item.cost_ship}</td>
        <td>{cities.find(f => f.id === item.city_id).name}</td>
      </tr>
    );
  }, []);
  return (
    <div>
      <h2 className="page-header">Add District</h2>
      <div className="row">
        <div className="col-12">
          <div className="card_custom">
            <div className="card__body">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      value={district.name}
                      onChange={(e) =>
                        setDistrict({
                          ...district,
                          name: e.target.value,
                        })
                      }
                      style={{ width: "100%" }}
                      sx={{ input: { color: "black", background: "#fff" } }}
                      id="filled-basic"
                      label="District Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                  <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                      <InputLabel htmlFor="standard-adornment-amount">
                        Price
                      </InputLabel>
                      <Input
                        type="number"
                        value={district.cost_ship}
                        onChange={(e) =>
                            setDistrict({
                            ...district,
                            cost_ship: e.target.value,
                          })
                        }
                        id="standard-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Autocomplete
                      onChange={(event, newValue) => {
                        setDistrict({
                          ...district,
                          city_id: newValue === null ? 0 : newValue.id,
                        });
                      }}
                      id="controllable-states-demo"
                      getOptionLabel={(cities) => `${cities.name}`}
                      options={cities}
                      sx={{ width: "100%", background: "#fff" }}
                      isOptionEqualToValue={(option, value) =>
                        option.name === value.name
                      }
                      noOptionsText={"NO CITY"}
                      renderOption={(props, cities) => (
                        <Box component="li" {...props} key={cities.id}>
                          {cities.name}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField {...params} label="Search City" />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={handelAddProduct}>
                      Add District
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
                bodyData={districts}
                renderBody={renderBody}
                data={cities}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default District;
