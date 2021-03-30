import React from "react";

const data = [
  {
    id: 1,
    name: "foo",
    city: "dallas",
    category: "one",
    type: "A",
    active: "FALSE",
  },
  {
    id: 2,
    name: "bar",
    city: "dallas",
    category: "one",
    type: "B",
    active: "FALSE",
  },
  {
    id: 3,
    name: "jim",
    city: "san francisco",
    category: "one",
    type: "B",
    active: "TRUE",
  },
  {
    id: 4,
    name: "jane",
    city: "denver",
    category: "two",
    type: "C",
    active: "FALSE",
  },
  {
    id: 5,
    name: "Kamal",
    city: "pune",
    category: "three",
    type: "D",
    active: "TRUE",
  },
];

export default data;

/*

//************ another data *******


const data = [
  {
    id: 1,
    name: "foo",
    city: "dallas",
    category: "one",
    type: "A",
    state: "Gujarat",
    active: "FALSE",
  },
  {
    id: 2,
    name: "bar",
    city: "dallas",
    category: "one",
    type: "B",
    state: "Bangal",
    active: "FALSE",
  },
  {
    id: 3,
    name: "jim",
    city: "san francisco",
    category: "one",
    type: "B",
    state: "Gujarat",
    active: "TRUE",
  },
  {
    id: 4,
    name: "jane",
    city: "denver",
    category: "two",
    type: "C",
    state: "Maharastra",
    active: "FALSE",
  },
  {
    id: 5,
    name: "Kamal",
    city: "pune",
    category: "three",
    type: "D",
    state: "Gujarat",
    active: "TRUE",
  },
];

export default data;

*/

/*  const uniqueVal = (datas) => {

     const distinct = (value, index, self) => {
       return self.indexOf(value) === index;
     }
     const distinctValues = datas.filter(distinct)
     //console.log("val : ", distinctValues);
     return distinctValues
   } */

/* const distinct = (value, index, self) => {
return self.indexOf(value) === index;
}
const distinctValues = cityYY.filter(distinct) */
