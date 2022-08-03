import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useCallback, useRef } from "react";
import Button from "@mui/material/Button";
import { get, post } from "../../service/apiServices";
import Table from "../../components/admin/table/Table";
import City from "../../components/admin/location/City";
import District from "../../components/admin/location/District";
const customerTableHead = ["", "name"];
const Location = () => {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [load, setLoad] = useState("");
  const countryInput = useRef();
  const renderBody = useCallback((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
      </tr>
    );
  }, []);
  const handelAddCountry = () => {
    const addBrandApi = async () => {
      const value = { name };
      const result = await post("country/save", value);
      console.log(result);
      setName("");
      countryInput.current.focus();
      setLoad((prev) => [...prev, name]);
    };
    addBrandApi();
  };
  useEffect(() => {
    const fetchBrandApi = async () => {
      const result = await get("country/data");
      console.log(result);
      setCountries(result);
    };
    fetchBrandApi();
  }, [load]);
  return (
    <div>
      <h2 className="page-header">Add Location</h2>
      <div className="row">
        <div className="col-4">
          <div className="card_custom">
            <div className="card__body">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      inputRef={countryInput}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ width: "100%" }}
                      sx={{ input: { color: "black", background: "#fff" } }}
                      id="filled-basic"
                      label="Country"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={handelAddCountry}>
                      Add Country
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <div className="card_custom">
                <div className="card__body">
                  <Table
                    limit="10"
                    headData={customerTableHead}
                    bodyData={countries}
                    renderBody={renderBody}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <City/>
      <District />
    </div>
  );
};
export default Location;
