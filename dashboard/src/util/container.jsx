import { Link } from "react-router-dom";

 export const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90,},
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    align:"center",
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },{ field: 'status', headerName: 'Status',  width: 120, 
    renderCell:(params)=>{
      return (
        <div className={`cellWithStatus ${params.row?.status}`}>
           {params.row?.status}
        </div>
      )
    },
     align:"center"},
  ];
export const actionColumn = [
  {
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params)=>{
      return (
        <div className="cellAction">
          <Link to={`/users/${params.row.id}`} style={{textDecoration:"none"}}>
          <div className="viewButton">
             View
          </div>
          </Link>
          <div className="deleteButton">
            Delete
          </div>
        </div>
      );
    },
  },
];
export const rows = [
  { id: 1, email: 'Snow@gmail.com', firstName: 'Jon', age: 35 , status:"active"},
  { id: 2, email: 'Lannister@gmail.com', firstName: 'Cersei', age: 42,status:"active" },
  { id: 3, email: 'Lannister@gmail.com', firstName: 'Jaime', age: 45 ,status:"pending"},
  { id: 4, email: 'Stark@gmail.com', firstName: 'Arya', age: 16,status:"active" },
  { id: 5, email: 'Targaryen@gmail.com', firstName: 'Daenerys', age: null ,status:"pending"},
  { id: 6, email: 'Melisandre@gmail.com', firstName: null, age: 150,status:"pending" },
  { id: 7, email: 'Clifford@gmail.com', firstName: 'Ferrara', age: 44,status:"active" },
  { id: 8, email: 'Frances@gmail.com', firstName: 'Rossini', age: 36,status:"pending" },
  { id: 9, email: 'Roxie@gmail.com', firstName: 'Harvey', age: 65 ,status:"active"},
];
export const foodCategory=[
        'Burger',
        'Shawarma',
        'Pizza',
        'Chicken',
        'Fries',
    ]
export const columnsUser = [
  { field: 'id', headerName: 'User ID', width: 150 },
  { field: 'clerkId', headerName: 'clerk id', width: 150 },
  { field: 'email', headerName: 'Email', width: 150,},
  { field: 'role', headerName: 'Role', width: 90,},
  { field: 'loyalCustomer', headerName: 'loyalCustomer',  width: 120, 
    renderCell:(params)=>{
      return (
        <div className={`cellWithStatus ${params.row?.status}`}>
           {params.row?.status}
        </div>
      )
    },
     align:"center"},
];
export const actionColumnUser = [
  {
    field:"action",
    headerName:"Action",
    width:250,
    renderCell:(data)=>{
      return (
        <div className="cellAction">
          <Link to={`/users/${data.id}`}style={{textDecoration:"none"}}>
          <div className="viewButton">
             View
          </div>
          </Link>
          <div className="deleteButton">
            Delete
          </div>
        </div>
      );
    },
  },
];