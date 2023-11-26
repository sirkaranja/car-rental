import React from 'react'
import './Admindash.css'
import Cour from '../DashboardCoursel/Cour'

function Admindash() {
  return (
    <div className="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">CARHIRE</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Car</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">View all</span> </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Add new</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Payment</span></a>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Profile</span> </a>
                    </li>
                </ul>
               
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                          
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            <form className="form-inline  my-2 my-lg-0">
      < input className="form-control fsg mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
    <div className='msg-c'>
    <div className='msg '>
<h4>Welcome back, Admin!</h4>
<p>Today is September 22, 2023. You have 126 news and alerts,<br /> along with 3 messages awaiting your response.</p>

        </div>
    </div>

        <div className='tbt'>
        <table class="table">
  <thead>
    <tr>
      <th>Most Booked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Toyota</td>
      <td>vitz</td>
      
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Toyota</td>
      <td>Mark X</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Toyota</td>
      <td>Landcruiser</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr>
      <th>Customers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Toyota</td>
      <td>vitz</td>
      
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Toyota</td>
      <td>Mark X</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Toyota</td>
      <td>Landcruiser</td>
    </tr>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr>
      <th >Invoices</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Toyota</td>
      <td>vitz</td>
      
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Toyota</td>
      <td>Mark X</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Toyota</td>
      <td>Landcruiser</td>
    </tr>
  </tbody>
</table>
        </div>
        < Cour />
        </div>
       
    </div>
    
</div>
  )
}

export default Admindash