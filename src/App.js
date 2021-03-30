import { useState, useEffect } from "react";
import "./App.css";
import ReusableSwitch from "./ReusableSwitch";
import data from "./data";
import uniqueVal from "./uniqeData";
import { TextField, FormControlLabel, Switch } from "@material-ui/core";
let filters = {};
function App() {
  const [arrDt, setArrDt] = useState([]);
  const [arrDts, setArrDts] = useState([]);

  const [searchName, setSearchName] = useState("");

  const allCity = uniqueVal(
    data.map((v, i) => {
      return v.city;
    })
  );
  const allCategory = uniqueVal(
    data.map((v, i) => {
      return v.category;
    })
  );
  const allType = uniqueVal(
    data.map((v, i) => {
      return v.type;
    })
  );
  const allActive = uniqueVal(
    data.map((v, i) => {
      return v.active;
    })
  );

  useEffect(() => {
    setArrDt(data);
    setArrDts(data);
  }, []);

  function populate(key, value) {
    if (key in filters) filters[key].push(value);
    else filters[key] = [value];
    return filters;
  }

  function popu(key, value) {
    let index = filters[key].indexOf(value);
    if (index !== -1) {
      filters[key].splice(index, 1);
    }
    return filters;
  }

  function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    // filters all elements passing the criteria
    return array.filter((item) => {
      // dynamically validate all filter criteria
      return filterKeys.every((key) => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].includes(item[key]);
      });
    });
  }

  const getData = (e, filterType) => {
    if (e.target.checked) {
      let ch = e.target.value;
      let v = populate(filterType, ch);
      let filtered = multiFilter(arrDts, v);
      setArrDt(filtered);
    } else {
      let ch = e.target.value;
      let u = popu(filterType, ch);
      let filtered = multiFilter(arrDts, u);
      setArrDt(filtered);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            City
            <div style={{ marginLeft: "50px", float: "right" }}>
              {allCity.map((v, i) => {
                return (
                  <FormControlLabel
                    value="end"
                    control={
                      <Switch
                        color="primary"
                        value={v}
                        onChange={(e) => getData(e, "city")}
                      />
                    }
                    label={v}
                    labelPlacement="end"
                  />
                );
              })}
            </div>
          </div>

          <div className="col-2">
            Category
            <div style={{ marginLeft: "50px", float: "right" }}>
              {allCategory.map((v, i) => {
                return (
                  <FormControlLabel
                    value="end"
                    control={
                      <Switch
                        color="primary"
                        value={v}
                        onChange={(e) => getData(e, "category")}
                      />
                    }
                    label={v}
                    labelPlacement="end"
                  />
                  //<ReusableSwitch name={v} />
                );
              })}
            </div>
          </div>

          <div className="col-2">
            Type
            <div style={{ marginLeft: "50px", float: "right" }}>
              {allType.map((v, i) => {
                return (
                  <FormControlLabel
                    value="end"
                    control={
                      <Switch
                        color="primary"
                        value={v}
                        onChange={(e) => getData(e, "type")}
                      />
                    }
                    label={v}
                    labelPlacement="end"
                  />
                  //<ReusableSwitch name={v} />
                );
              })}
            </div>
          </div>

          <div className="col-2">
            Active
            <div style={{ marginLeft: "50px", float: "right" }}>
              {allActive.map((v, i) => {
                return (
                  <FormControlLabel
                    value="end"
                    control={
                      <Switch
                        color="primary"
                        value={v}
                        onChange={(e) => getData(e, "active")}
                      />
                    }
                    label={v}
                    labelPlacement="end"
                  />
                  //<ReusableSwitch name={v} />
                );
              })}
            </div>
          </div>

          <div className="col-4">
            <TextField
              id="standard-basic"
              onChange={(e) => setSearchName(e.target.value)}
              label="Name"
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "120px" }}>
        <div className="container" style={{ border: "1px solid black" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">City</th>
                <th scope="col">Categories</th>
                <th scope="col">Type</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>
              {arrDt
                ? arrDt
                    .filter((val) => {
                      if (searchName === "") {
                        return val;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(searchName.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((val, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{val.name}</td>
                          <td>{val.city}</td>
                          <td>{val.category}</td>
                          <td>{val.type}</td>
                          <td>{val.active}</td>
                        </tr>
                      );
                    })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

/*


*********************** old github Code ***************************



import { useState, useEffect } from 'react'
import './App.css';
import ReusableSwitch from './ReusableSwitch';
import data from './data';
import uniqueVal from './uniqeData';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';
const checkedArr = [];
const fType = [];
function App() {

  const [arrDt, setArrDt] = useState([]);
  const [arrDts, setArrDts] = useState([]);
  const [datass, setDatass] = useState([]);

  const [searchName, setSearchName] = useState("");

  const allCity = uniqueVal(data.map((v, i) => {
    return v.city
  }));
  const allCategory = uniqueVal(data.map((v, i) => {
    return v.category
  }));
  const allType = uniqueVal(data.map((v, i) => {
    return v.type
  }));
  const allActive = uniqueVal(data.map((v, i) => {
    return v.active
  }));


  useEffect(() => {
    setArrDt(data)
    setArrDts(data)
  }, [])

  const getData = (e, filterType) => {
    if (e.target.checked) {
      let ch = e.target.value;
      checkedArr.push(ch)
      console.log("push : ", checkedArr);
      if (fType.length === 0) {
        fType.push(filterType);
        console.log("zero");
        //checkedArr.push(ch)
        let ab = arrDts.filter((v) => {
          if (checkedArr.indexOf(v[filterType]) >= 0) {
            return true
          }
        })
        setArrDt(ab);
      } else {
        if (fType.includes(filterType)) {
          console.log("yes");
          //checkedArr.push(ch)
          let ab = arrDts.filter((v) => {
            if (checkedArr.indexOf(v[filterType]) >= 0) {
              return true
            }
          })
          setArrDt(ab);
        }
        else {
          console.log("No");
          console.log(arrDt);
          console.log("checkedArr : ", checkedArr);
          let ab = arrDt.filter((v) => {
            if (checkedArr.indexOf(v[filterType]) >= 0) {
              return true
            }
          })
          setArrDt(ab);
        }
        fType.push(filterType);
      }
      // checkedArr.push(ch)
      //fType.push(filterType);
      //console.log("checked : ", checkedArr);
      //console.log("filter type : ", fType);
      // const ab = arrDts.filter((v) => {
        //if (checkedArr.indexOf(v[filterType]) >= 0) {
          //return true
        //}
      //})
      //setArrDt(ab); 
    }
    else {

      let ch = e.target.value;
      var index = checkedArr.indexOf(ch);
      //console.log("index : ", index);
      if (index !== -1) {
        checkedArr.splice(index, 1);
      }
      if (index !== -1) {
        fType.splice(index, 1);
      }
      console.log("remove : ", checkedArr);
      console.log("remove fType : ", fType);
      if (checkedArr.length <= 0) {
        setArrDt(arrDts)
      }
      else {

        const unq = uniqueVal(fType.map((v, i) => {
          return v
        }));

        console.log("unq : ", unq);

        if (unq.length > 1) {
          console.log("more");
          const ab = arrDt.filter((v) => {
            if (checkedArr.indexOf(v[filterType]) >= 0) {
              return true
            }
          })
          setArrDt(ab);
        }
        else {
          const ab = arrDts.filter((v) => {
            if (checkedArr.indexOf(v[filterType]) >= 0) {
              return true
            }
          })
          setArrDt(ab);
        }
      }

    }
  }
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-2">City
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allCity.map((v, i) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'city')} />}
                      label={v}
                      labelPlacement="end"
                    />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Category
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allCategory.map((v, i) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'category')} />}
                      label={v}
                      labelPlacement="end"
                    />
                    //<ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Type
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allType.map((v, i) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'type')} />}
                      label={v}
                      labelPlacement="end"
                    />
                    //<ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Active
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allActive.map((v, i) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'active')} />}
                      label={v}
                      labelPlacement="end"
                    />
                    //<ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-4">
            <TextField id="standard-basic" onChange={(e) => setSearchName(e.target.value)} label="Name" />
          </div>
        </div>

      </div>

      <div style={{ marginTop: '120px' }}>
        <div className="container" style={{ border: '1px solid black' }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">City</th>
                <th scope="col">Categories</th>
                <th scope="col">Type</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>
              {
                arrDt ?
                  arrDt.filter((val) => {
                    if (searchName === "") {
                      return val
                    }
                    else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                      return val
                    }
                  }).map((val, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.city}</td>
                        <td>{val.category}</td>
                        <td>{val.type}</td>
                        <td>{val.active}</td>
                      </tr>
                    )
                  })
                  :
                  null
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

*/

/*

  30-03-21



  import { useState, useEffect } from 'react'
import './App.css';
import ReusableSwitch from './ReusableSwitch';
import data from './data';
import uniqueVal from './uniqeData';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';
const checkedArr = [];
const fType = [];
function App() {

  const [arrDt, setArrDt] = useState([]);
  const [arrDts, setArrDts] = useState([]);
  const [datass, setDatass] = useState([]);

  const [searchName, setSearchName] = useState("");

  const allCity = uniqueVal(data.map((v, i) => {
    return v.city
  }));
  const allCategory = uniqueVal(data.map((v, i) => {
    return v.category
  }));
  const allType = uniqueVal(data.map((v, i) => {
    return v.type
  }));
  const allActive = uniqueVal(data.map((v, i) => {
    return v.active
  }));


  useEffect(() => {
    setArrDt(data)
    setArrDts(data)
  }, [])

  const getData = (e, filterType) => {
    if (e.target.checked) {
      let ch = e.target.value;
      checkedArr.push(ch)
      console.log("push : ", checkedArr);
      if (fType.length === 0) {
        fType.push(filterType);
        console.log("zero");
        //checkedArr.push(ch)
        let ab = arrDts.filter((v) => {
          if (checkedArr.indexOf(v[filterType]) >= 0) {
            return true
          }
        })
        setArrDt(ab);
      } else {
        if (fType.includes(filterType)) {
          console.log("yes");
          //checkedArr.push(ch)
          let ab = arrDts.filter((v) => {
            if (checkedArr.indexOf(v[filterType]) >= 0) {
              return true
            }
          })
          setArrDt(ab);
        }
        else {
          console.log("No");
          console.log(arrDt);
          console.log("checkedArr : ", checkedArr);
          let ab = arrDt.filter((v) => {
            if (checkedArr.indexOf(v[filterType]) >= 0) {
              return true
            }
          })
          setArrDt(ab);
        }
        fType.push(filterType);
      }
      // checkedArr.push(ch)
      //fType.push(filterType);
      //console.log("checked : ", checkedArr);
      //console.log("filter type : ", fType);
      
      //const ab = arrDts.filter((v) => {
        //if (checkedArr.indexOf(v[filterType]) >= 0) {
          //return true
        //}
      //})
      //setArrDt(ab);
    }
    else {

      let ch = e.target.value;
      var index = checkedArr.indexOf(ch);
      //console.log("index : ", index);
      if (index !== -1) {
        checkedArr.splice(index, 1);
      }
      if (index !== -1) {
        fType.splice(index, 1);
      }
      console.log("remove : ", checkedArr);
      console.log("remove fType : ", fType);
      if (checkedArr.length <= 0) {
        setArrDt(arrDts)
      }
      else {

        const unq = uniqueVal(fType.map((v, i) => {
          return v
        }));

        console.log("unq : ", unq);

        if (unq.length > 1) {
          console.log("more");
          const ab = arrDt.filter((v) => {
            if (checkedArr.indexOf(v[filterType]) >= 0) {
              return true
            }
          })
          setArrDt(ab);
        }
        else {
          const ab = arrDts.filter((v) => {
            if (checkedArr.indexOf(v[filterType]) >= 0) {
              return true
            }
          })
          setArrDt(ab);
        }
      }

    }
  }
  return (
    <>
      <div className="container">
        <div className="row">

          <div className="col-2">City
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allCity.map((v, i) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'city')} />}
                      label={v}
                      labelPlacement="end"
                    />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Category
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allCategory.map((v, i) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'category')} />}
                      label={v}
                      labelPlacement="end"
                    />
                    //<ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Type
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allType.map((v, i) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'type')} />}
                      label={v}
                      labelPlacement="end"
                    />
                    //<ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-2">Active
            <div style={{ marginLeft: '50px', float: 'right' }}>
              {
                allActive.map((v, i) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'active')} />}
                      label={v}
                      labelPlacement="end"
                    />
                    //<ReusableSwitch name={v} />
                  )
                })
              }
            </div>
          </div>

          <div className="col-4">
            <TextField id="standard-basic" onChange={(e) => setSearchName(e.target.value)} label="Name" />
          </div>
        </div>

      </div>

      <div style={{ marginTop: '120px' }}>
        <div className="container" style={{ border: '1px solid black' }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">City</th>
                <th scope="col">Categories</th>
                <th scope="col">Type</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>
              {
                arrDt ?
                  arrDt.filter((val) => {
                    if (searchName === "") {
                      return val
                    }
                    else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
                      return val
                    }
                  }).map((val, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.city}</td>
                        <td>{val.category}</td>
                        <td>{val.type}</td>
                        <td>{val.active}</td>
                      </tr>
                    )
                  })
                  :
                  null
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;


*/

/*

 const filteredData = (keyValue, select, selectedChecked) => {
        if (selectedChecked === true) {
            const cityVal = [...categories, select]
            const categoryVal = [...categories, select]
            const typeVal = [...categories, select]
            const activeVal = [...categories, select]
            setCategories(cityVal, categoryVal, typeVal, activeVal)
            setCategories[0] = (cityVal)
            const filterData = table.filter((obj) => {
                return ((cityVal).includes(obj[keyValue]))
            })
            setFinalData(filterData)
        } else if (selectedChecked === false) {
            const removeArray = categories.filter(item => item != select)
            setCategories(removeArray)
            const filterData = table.filter((obj) => {
                return ((removeArray).includes(obj[keyValue]))
            })
            if (!removeArray.length) {
                setFinalData(table)
            } else {
                setFinalData(filterData)
            }

        }
    }

*/
