export const patientColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "patient",
    headerName: "Patient",
    width: 220,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.fullName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 170,
  },
  {
    field: "birthDate",
    headerName: "Date of Birth",
    width: 170,
  },
  {
    field: "status",
    headerName: "Status",
    width: 140,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const patientRows = [
  {
    id: 1,
    fullName: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    phone: "0600000000",
    status: "active",
    birthDate: "2000-01-01",
  },
  {
    id: 2,
    fullName: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    phone: "0600000000",
    status: "passive",
    birthDate: "2000-01-01",
  },
  {
    id: 3,
    fullName: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    phone: "0600000000",
    status: "pending",
    birthDate: "2000-01-01",
  },
  {
    id: 4,
    fullName: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    phone: "0600000000",
    status: "active",
    birthDate: "2000-01-01",
  },
  {
    id: 5,
    fullName: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    phone: "0600000000",
    status: "passive",
    birthDate: "2000-01-01",
  },
  {
    id: 6,
    fullName: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    phone: "0600000000",
    status: "active",
    birthDate: "2000-01-01",
  },
  {
    id: 7,
    fullName: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    phone: "0600000000",
    status: "passive",
    birthDate: "2000-01-01",
  },
  {
    id: 8,
    fullName: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    phone: "0600000000",
    status: "active",
    birthDate: "2000-01-01",
  },
  {
    id: 9,
    fullName: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    phone: "0600000000",
    status: "pending",
    birthDate: "2000-01-01",
  },
  {
    id: 10,
    fullName: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    phone: "0600000000",
    status: "active",
    birthDate: "2000-01-01",
  },
];
