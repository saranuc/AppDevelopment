import React from 'react'
import Header from '../Header/Adminheader'
import Sidebar from '../SideBar/Adminsidebar'
import "../css/page.css"
import 
{ BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
from 'recharts';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import Footer from '../Footer/foot';
export default function Adminside() {
    const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
        }
    const data = [
      {
        name: '2017',
        firsthalf: 2000,
        secondhalf: 400,
        amt: 2400,
      },
      {
        name: '2018',
        firsthalf: 3000,
        secondhalf: 3398,
        amt: 2210,
      },
      {
        name: '2019',
        firsthalf: 2000,
        secondhalf: 5800,
        amt: 2290,
      },
      {
        name: '2020',
        firsthalf: 2780,
        secondhalf: 3908,
        amt: 2000,
      },
      {
        name: '2021',
        firsthalf: 1890,
        secondhalf: 4800,
        amt: 2181,
      },
      {
        name: '2022',
        firsthalf: 2390,
        secondhalf: 3800,
         amt: 2500,
      },
      {
        name: '2023',
        firsthalf: 3490,
        secondhalf: 4300,
        amt: 2100,
      },
    ];   
  return (
    <div>
        <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className='lan'>
         <main className='main-container'>
      
        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CLUB MEMBERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>32</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>OFFERS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="firsthalf" fill="#8884d8" />
                <Bar dataKey="secondhalf" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="firsthalf" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="secondhalf" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
        </main>
      </div>
      {/* <Footer/> */}
    </div>
  )
}
