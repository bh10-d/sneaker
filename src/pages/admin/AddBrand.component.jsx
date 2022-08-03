import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect, useCallback, useRef } from "react";
import Button from "@mui/material/Button";
import { get, post, put, del } from "../../service/apiServices";
import Table from "../../components/admin/table/Table";
const customerTableHead = ["", "name"];
const AddBrand = () => {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [load, setLoad] = useState(false);
  const [update, setUpdate] = useState(false);
  const brandInput = useRef();
  const renderBody = useCallback((item, index) => {
    return (
      <tr key={index} onClick={() => {
        setId(item.id)
        setName(item.name)
        setUpdate(true)
      }}>
        <td>{index + 1}</td>
        <td >{item.name}</td>
        <td onClick={()=>{handleDeleteBrand(item.id)}}><i className="fa-solid fa-trash-can"></i></td>
      </tr>
    );
  }, []);
  const handelAddBrand = () => {
    const addBrandApi = async () => {
      const value = { name };
      const result = await post("brand/save", value);
      setName("");
      setId("");
      brandInput.current.focus();
      // setLoad((prev) => [...prev, name]);
      setLoad(true);
    };
    addBrandApi();
  };
  const handleUpdateBrand = ()=>{
    put('http://localhost:8080/brand/update', {
      id,
      name
    })
    setUpdate(false);
    setName("");
    setId("");
    brandInput.current.focus();
    setLoad(true);
  }
  const handleDeleteBrand = (id) => {
    del('http://localhost:8080/brand/delete',id)
    console.log("delete")
    setLoad(true);
  }
  useEffect(() => {
    const fetchBrandApi = async () => {
      const result = await get("brand/data");
      // console.log(result);
      setBrands(result);
      setLoad(false);
    };
    fetchBrandApi();
  }, [load]);
  return (
    <div>
      <h2 className="page-header">Add Brand</h2>
      <div className="row">
        <div className="col-4">
          <div className="card_custom">
            <div className="card__body">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      inputRef={brandInput}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                        setUpdate(!(e.target.value == ''))
                      }}
                      style={{ width: "100%" }}
                      sx={{ input: { color: "black", background: "#fff" } }}
                      id="filled-basic"
                      label="Brand"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={(update)?handleUpdateBrand:handelAddBrand}>
                      {(update) ? "Update Brand" : "Add Brand"}
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
                    bodyData={brands}
                    renderBody={renderBody}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrand;
