import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect, useRef, useCallback } from "react";
import { get, post } from "../../service/apiServices";
import { url } from "../../utils/request";
import { Button } from "@mui/material";
import Table from "../../components/admin/table/Table";
const AddSize = () => {
  const [product, setProduct] = useState([]);
  const [images_color, setImageColors] = useState([]);
  const [sizes, setSizes] = useState([])
  const [load, setLoad] = useState("");
  const customerTableHead = useRef(["", "Image Product", "Size", "Quantity", "Sell"]);
  // list product
  useEffect(() => {
    const fetchProductApi = async () => {
      const result = await get("product/data");
      setProduct(result);
    };
    fetchProductApi();
  }, []);
  console.log(product);
  // list image product
  useEffect(() => {
    const fetchImageColorApi = async () => {
      const result = await get("product/color/data");
      setImageColors(result);
    };
    fetchImageColorApi();
  }, []);
  // list size
  useEffect(() => {
    const fetchSizeApi = async () => {
      const result = await get("product/size/data");
      setSizes(result);
    };
    fetchSizeApi();
  }, [load]);
  console.log(sizes);
  const renderBody = useCallback((item, index, product) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td style={{ display: "flex" }}>
          <span
            style={{
              width: "50px",
              height: "50px",
              border: "1px solid #ccc",
              marginLeft: "5px",
              borderRadius: "5px",
            }}
          >
            <img
              src={url + item.image_color}
              alt="product_image_color"
              style={{ width: "100%" }}
            />
          </span>
        </td>
        <td>{item.size_id}</td>
        <td>{item.quantity}</td>
        <td>{item.sell}</td>
      </tr>
    );
  }, []);
  const [size, setSize] = useState({
    image_color: "",
    size_id: 0,
    quantity: 0,
    sell: 0,
  });
  const handelAddSize = () => {
    const addSizeAPI = async () => {
      const result = await post("product/size/save", size);
      setLoad((prev) => [...prev, size]);
      console.log(result);
    };
    addSizeAPI();
  }
  console.log(size);
  return (
    <>
      <div>
        <h2 className="page-header">Add Size Product</h2>
        <div className="row">
          <div className="col-12">
            <div className="card_custom">
              <div className="card__body">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Autocomplete
                        onChange={(event, newValue) => {
                          setSize({
                            ...size,
                            image_color: newValue === null ? null : newValue.image_color
                          })
                        }}
                        id="controllable-states-demo"
                        getOptionLabel={(images_color) =>
                          product.find((f) => f.id === images_color.product_id)
                            .name
                        }
                        options={images_color}
                        sx={{ width: "100%", background: "#fff" }}
                        isOptionEqualToValue={(option, value) =>
                          option.image_color === value.image_color
                        }
                        noOptionsText={"NO IMAGE"}
                        renderOption={(props, images_color) => (
                          <Box
                            component="li"
                            {...props}
                            key={images_color.image_color}
                          >
                            <img
                              style={{
                                border: "1px solid #ccc",
                                height: "50px",
                                width: "50px",
                                marginRight: "10px",
                              }}
                              src={url + images_color.image_color}
                              alt=""
                            />
                            <li>
                              {
                                product.find(
                                  (f) => f.id === images_color.product_id
                                ).name
                              }
                            </li>
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField {...params} label="Image Color" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        value={size.size_id}
                        onChange={(e) =>
                          setSize({
                            ...size,
                            size_id: e.target.value,
                          })
                        }
                        style={{ width: "100%" }}
                        sx={{ input: { color: "black", background: "#fff" } }}
                        id="filled-basic"
                        label="Size Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        value={size.quantity}
                        onChange={(e) =>
                          setSize({
                            ...size,
                            quantity: e.target.value,
                          })
                        }
                        style={{ width: "100%" }}
                        sx={{ input: { color: "black", background: "#fff" } }}
                        id="filled-basic"
                        label="Quantity"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                  <Grid item xs={6}>
                    <Button variant="outlined" onClick={handelAddSize}>
                      Add Size
                    </Button>
                  </Grid>
                </Grid>
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div className="card_custom">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead.current}
                bodyData={sizes}
                renderBody={renderBody}
                data={product}
              />
            </div>
          </div>
      </div>
    </>
  );
};
export default AddSize;
/*
Trang ch??? 
  Hi???n th??? s???n ph???m ??? trang ch??? (s???n ph???m m???i nh???t, gi???m gi??, b??n ch???y) (Hi???u)
  Hi???n th??? slide (Hi???u)
  Hi???n th??? contact c???a website (Hi???u)
  Hi???n th??? th??ng tin c?? nh??n (Hi???u)
  Hi???n th??? ????n h??ng ???? mua(Th??ng tin mua h??ng, t??nh tr???ng ????n h??ng) (Hi???u)
  Hi???n th??? m?? qu?? t???ng c?? nh??n (Hi???u)
  Th??m, s???a, x??a s???n ph???m trong gi??? h??ng (Hi???u)
  Hi???n th??? s???n ph???m ??? trang s???n ph???m (Ti???n)
  L???c s???n ph???m ( theo ti???n, th????ng hi???u, size) (Ti???n)
  Ph??n trang s???n ph???m (Ti???n)
  T??m ki???m s???n ph???m (Ti???n)
  X??? l?? ????ng nh???p ph??n quy???n(Ng?????i d??ng, nh??n vi??n, qu???n l??) (Hi???u)
  ????nh gi??, b??nh lu???n s???n ph???m (Ti???n)
  Hi???n th??? s???n ph???m ??? trang thanh to??n (Hi???u)
  Hi???u 9 Ti???n 5
Trang admin
  Hi???n th??? th??ng tin kh??ch h??ng (Ti???n)
  Hi???n th??? s???n ph???m (Ti???n)
  L???c s???n ph???m (Ti???n)
  Hi???n th??? size c???a s???n ph???m (Ti???n)
  Hi???n th??? ???nh s???n ph???m (Ti???n)
  Hi???n th??? ???nh s???n ph???m chi ti???t (Ti???n)
  Hi???n th??? gi???m gi?? (Ti???n)
  Hi???n th??? ????n h??ng (Ti???n)
  L???c ????n h??ng (Ti???n)
  Hi???n th??? th??ng tin nh??n vi??n (Hi???u)
  Hi???n th??? t???ng ????n h??ng, s??? ti???n b??n, s??? ti???n l??i (Hi???u)
  Hi???n th??? nh??n h??ng (Hi???u)
*/
