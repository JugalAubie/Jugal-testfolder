import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { templateUrl } from '../utils/API';

function CreateTemplate(props) {
    // const value = [{
    //     name: 'jugal',
    //     email: 'j1@gmail.com',
    //     technology: 'react'
    // },
    // {
    //     name: 'test1',
    //     email: 'test1@gmail.com',
    //     technology: 'node'
    // },
    // {
    //     name: 'test2',
    //     email: '2test@gmail.com',
    //     technology: 'Java'
    // },
    // ]

    // const [value, setValue] = useState( )
    const getData = () => {
        fetch(templateUrl)
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            console.log(res[0])
            console.log(res[0].id)
            console.log(res[0].formControls[0].placeholder)
            // setValue(res)
          })
      }
    useState(() => {
    getData()
    }, [])

    return (
        <div>
            <h4> List of Template's </h4>
            {/* {
                value.map((data) => (
                    <table>
                        <tr>
                            <th>placeholder</th>
                            <th>Email</th>
                            <th>Technology</th>
                        </tr>
                        <tr>
                            {/* <td><h5>{data[0].formControls[0].placeholder}</h5></td> */}
                            
                        {/* </tr>
                    </table>
                )) */}
            {/* } */} 
            <button className='btn btn-success'>Create Template</button>
            <hr />
            <hr />

        </div >
    );
}

export default CreateTemplate;