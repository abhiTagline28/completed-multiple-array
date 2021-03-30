/*

// after completing City filter


import { useState, useEffect } from 'react'
import './App.css';
import ReusableSwitch from './ReusableSwitch';
import data from './data';
import uniqueVal from './uniqeData';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';
const checkedArr = [];
let newAr = [];
function App() {

    const [arrDt, setArrDt] = useState([]);
    const [arrDts, setArrDts] = useState([]);
    const [datass, setDatass] = useState([]);

    const [searchName, setSearchName] = useState("");


    const cityYY = data.map((v, i) => {
        return v.city
    });
    const allCity = uniqueVal(cityYY)

    const categoryYY = data.map((v, i) => {
        return v.category
    });
    const allCategory = uniqueVal(categoryYY)

    const typeYY = data.map((v, i) => {
        return v.type
    });
    const allType = uniqueVal(typeYY)

    const activeYY = data.map((v, i) => {
        return v.active
    });
    const allActive = uniqueVal(activeYY)


    useEffect(() => {
        setArrDt(data)
        setArrDts(data)
    }, [])

    const getData = (e) => {
        if (e.target.checked) {
            let ch = e.target.value;
            checkedArr.push(ch)
            console.log("checked : ", checkedArr);

            const ab = arrDts.filter((v) => {
                if (checkedArr.indexOf(v.city) >= 0) {
                    return true
                }
                //  let a = v.city === checkedArr;
                // console.log("a: ", a);

            })
            //console.log(ab);
            setArrDt(ab);
        }
        else {
            let ch = e.target.value;
            var index = checkedArr.indexOf(ch);
            if (index !== -1) {
                checkedArr.splice(index, 1);
            }
            console.log("remove : ", checkedArr.length);

            //  let ch = e.target.value
            // let index = datass.indexOf(ch);
            // if (index !== -1) {
            //   datass.splice(index, 1);
            // }

            // console.log("remove : ", datass);
            //setArrDt(arrDts)
            if (checkedArr.length <= 0) {
                setArrDt(arrDts)
            } else {
                const ab = arrDts.filter((v) => {
                    if (checkedArr.indexOf(v.city) >= 0) {
                        return true
                    }
                })
                setArrDt(ab);
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
                                        //<ReusableSwitch name={v} />
                                        <FormControlLabel
                                            value="end"
                                            control={<Switch color="primary" value={v} onChange={getData} />}
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
                                        <ReusableSwitch name={v} />
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
                                        <ReusableSwitch name={v} />
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
                                        <ReusableSwitch name={v} />
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

************************** At 3 *************************

import { useState, useEffect } from 'react'
import './App.css';
import ReusableSwitch from './ReusableSwitch';
import data from './data';
import uniqueVal from './uniqeData';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';
const checkedArr = [];
const checkedArrCat = [];
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
      if (filterType === 'city') {

        let ch = e.target.value;
        //console.log("push city : ", checkedArr);
        checkedArr.push(ch)
        console.log("push city : ", checkedArr);
        const ab = arrDts.filter((v) => {
          if (checkedArr.indexOf(v[filterType]) >= 0) {
            return true
          }
        })
        setArrDt(ab);
      }
      if (filterType === 'category') {
        setArrDts(arrDt)
        console.log("arrdts: ", arrDts);
        // let ch = e.target.value;
        // // console.log("push Category : ", checkedArrCat);
        // checkedArrCat.push(ch)
        // console.log("push Category : ", checkedArrCat);
        // const ab = arrDts.filter((v) => {
        //   if (checkedArrCat.indexOf(v[filterType]) >= 0) {
        //     return true
        //   }
        // })
        // setArrDt(ab);
    }
    // let ch = e.target.value;
    // console.log("push : ", checkedArr.length);
    // checkedArr.push(ch)
    // const ab = arrDts.filter((v) => {
    //   if (checkedArr.indexOf(v[filterType]) >= 0) {
    //     return true
    //   }
    // })
    // setArrDt(ab);
  }
  else {
    if (filterType === 'city') {
        let ch = e.target.value;
        var index = checkedArr.indexOf(ch);
        if (index !== -1) {
            checkedArr.splice(index, 1);
        }
        console.log("remove city : ", checkedArr);
        if (checkedArr.length <= 0) {
            setArrDt(arrDts)
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
    if (filterType === 'category') {
        let ch = e.target.value;
        var index = checkedArrCat.indexOf(ch);
        if (index !== -1) {
            checkedArrCat.splice(index, 1);
        }
        console.log("remove category : ", checkedArrCat);
        if (checkedArrCat.length <= 0) {
            setArrDt(arrDts)
        }
        else {
            const ab = arrDts.filter((v) => {
                if (checkedArrCat.indexOf(v[filterType]) >= 0) {
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
                            // allType.map((v, i) => {
                            //   return (
                            //     <FormControlLabel
                            //       value="end"
                            //       control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'type')} />}
                            //       label={v}
                            //       labelPlacement="end"
                            //     />
                            //     //<ReusableSwitch name={v} />
                            //   )
                            // })
                        }
                    </div>
                </div>

                <div className="col-2">Active
                    <div style={{ marginLeft: '50px', float: 'right' }}>
                        {
                            //    allActive.map((v, i) => {
                            //     return (
                            //       <FormControlLabel
                            //         value="end"
                            //         control={<Switch color="primary" value={v} onChange={(e) => getData(e, 'active')} />}
                            //         label={v}
                            //         labelPlacement="end"
                            //       />
                            //       //<ReusableSwitch name={v} />
                            //     )
                            //   })
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