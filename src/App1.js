import { useState, useEffect } from 'react'
import './App.css';
import ReusableSwitch from './ReusableSwitch';
import data from './data';
import uniqueVal from './uniqeData';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';
const checkedArr = [];
let filters = {};
const fType = [];
function App1() {

  const [arrDt, setArrDt] = useState([]);
  const [arrDts, setArrDts] = useState([]);

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

  function populate(key, value) {
    if(key in filters)
      filters[key].push(value);
    else
      filters[key] = [value];
    return filters
  }

  function popu(key, value) {
    let index = filters[key].indexOf(value);
    if (index !== -1) {
        filters[key].splice(index, 1);
    }
    return filters 
  }

  function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    // filters all elements passing the criteria
    return array.filter((item) => {
      // dynamically validate all filter criteria
      return filterKeys.every(key => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].includes(item[key]);
      });
    });
  }

  const getData = (e, filterType) => {
    if (e.target.checked) {
      let ch = e.target.value;
      checkedArr.push(ch)
      //console.log("add push : ", checkedArr);

      let v = populate(filterType,ch)
      //console.log("add push : ", checkedArr); 
      console.log("add v : ",v);
       let filtered = multiFilter(arrDts, v);
      console.log("add filter data : ",filtered);
      setArrDt(filtered)  
    }
    else {

        let ch = e.target.value;

        let u = popu(filterType,ch)
        //console.log("remove u : ",u);

       //let ch = e.target.value;
      var index = checkedArr.indexOf(ch);
      if (index !== -1) {
        checkedArr.splice(index, 1);
      }
      if (index !== -1) {
        fType.splice(index, 1);
      }

      let filtered = multiFilter(arrDts, u);
      //console.log("add filter data : ",filtered);
      setArrDt(filtered)

      //console.log("remove pop : ", checkedArr);
      //console.log("remove u : ",u);
      /*
      //console.log("remove fType : ", fType);

      let v = populate(filterType,ch)
      console.log("add push : ", checkedArr); 
      console.log("add v : ",v);
      let filtered = multiFilter(arrDts, v);
      console.log("add filter data : ",filtered);
      setArrDt(filtered) */

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

export default App1;
