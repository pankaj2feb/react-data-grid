import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Grid from './Grid';
import registerServiceWorker from './registerServiceWorker';


const HEADERS = [
    {
      id:'productId',
      title:'Product',
      dataType:'string',
      sortable:true
    },
    {
      id:'manufacturer',
      title:'Manufacturer',
      dataType:'string',
      sortable:true
    },
    {
      id:'model',
      title:'Model',
      dataType:'string',
      sortable:true
    },
    {
      id:'formFactor',
      title:'Form Factor',
      dataType:'string',
      sortable:true
    },
    {
      id:'avaiability',
      title:'Availability',
      dataType:'string',
      sortable:true
    }
    
];


let phones = [
  {
    "productId": "apl_102",
    "manufacturer": "Apple",
    "model":	"iPhone 6",
    "formFactor": "Touchscreen",
    "avaiability": "Yes",
    "children": [
      {
        "productId": "apl_102",
        "manufacturer": "Apple",
        "model":	" iPhone 6 Plus",
        "formFactor": "Touchscreen",
        "avaiability": "Yes"
      }
    ]
  },
   {
    "productId": "apl_103",
    "manufacturer": "Apple",
    "model":	"iPhone 5",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "apl_104",
    "manufacturer": "Apple",
    "model":	"iPhone 4S",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "apl_105",
    "manufacturer": "Apple",
    "model":	"iPhone 4",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "apl_106",
    "manufacturer": "Apple",
    "model":	"iPhone 7S",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "apl_107",
    "manufacturer": "Apple",
    "model":	"iPhone 3GS",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "smg_102",
    "manufacturer": "Samsung",
    "model":	"Galaxy S4",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "smg_102",
    "manufacturer": "Samsung",
    "model":	"E1100",
    "formFactor": "Bar",
    "avaiability": "Yes"
   },
   {
    "productId": "smg_102",
    "manufacturer": "Samsung",
    "model":	"Galaxy S7",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "smg_102",
    "manufacturer": "Samsung",
    "model":	"Galaxy S II",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "smg_102",
    "manufacturer": "Samsung",
    "model":	"Galaxy Note II",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "smg_102",
    "manufacturer": "Samsung",
    "model":	"E250",
    "formFactor": "Slider",
    "avaiability": "Yes"
   },
   {
    "productId": "smg_102",
    "manufacturer": "Samsung",
    "model":	"Galaxy S",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "smg_102",
    "manufacturer": "Samsung",
    "model":	"Galaxy S8",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "mtr_102",
    "manufacturer": "Motorola",
    "model":	"RAZR V3",
    "formFactor": "Flip phone",
    "avaiability": "Yes"
   },
   {
    "productId": "mtr_102",
    "manufacturer": "Motorola",
    "model":	"C200",
    "formFactor": "Bar",
    "avaiability": "Yes"
   },
   {
    "productId": "mtr_102",
    "manufacturer": "Motorola",
    "model":	"C139",
    "formFactor": "Bar",
    "avaiability": "Yes"
   },
   {
    "productId": "mtr_102",
    "manufacturer": "Motorola",
    "model":	"Droid Bionic",
    "formFactor": "Touchscreen",
    "avaiability": "Yes"
   },
   {
    "productId": "sny_102",
    "manufacturer": "Sony Ericsson",
    "model":	"K300",
    "formFactor": "Bar",
    "avaiability": "Yes"
   },
   {
    "productId": "sny_102",
    "manufacturer": "Sony Ericsson",
    "model":	"K750",
    "formFactor": "Bar",
    "avaiability": "Yes"
   }
];



ReactDOM.render(<Grid rowData={phones} headers={HEADERS} isCheckBox={true}/>, document.getElementById('root'));

registerServiceWorker();
