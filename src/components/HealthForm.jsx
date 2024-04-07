import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import DiseaseInput from './Disease';
import LocationButton from './Location';
import LocationData from './Location';
import axios from 'axios';
import Select from 'react-select';
import Cookies  from 'universal-cookie';
function HealthForm() {
const [loggedinuser,setloggedinuser] = useState(null);
const [formData, setformData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedConditions, setSelectedConditions] = useState([]);

  const options = [
    { value: 'diabetes', label: 'Diabetes' },
    { value: 'hypertension', label: 'Hypertension' },
    { value: 'cancer', label: 'Cancer' },
    { value: 'asthma', label: 'Asthma' },
    { value: 'heart_disease', label: 'Heart Disease' },
    { value:'Blood-Pressure', label: 'Blood Pressure'},
    { value: 'none', label: 'Disease free' },
  ];


  const options2 = [
      {value:'Eat healthier',label:'Eat healthier'},
      {value:'Consume more fruits and vegetables',label:'Consume more fruits and vegetables'},
      {value:'Reduce sugar intake',label:'Reduce sugar intake'},
      {value:'Cut down on processed foods',label:'Cut down on processed foods'},
      {value:'Eat healthier',label:'Eat healthier'},
      {value:'Balance macronutrients (carbs, proteins, fats)',label:'Balance macronutrients (carbs, proteins, fats)'},
      {value:'Weight Gain',label:'Weight Gain'},
      {value:'Weight Loss',label:'Weight Loss'},
]

  const handleChange = (e,index,selectedOptions) => {
    console.log(e,"   ",index);
    setformData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [index]: e.map((i)=>i.value) };
      return newData;
    });
 
    setSelectedConditions(selectedOptions);
  };


  return (
    
      <>
      {loggedinuser && <Navigate to="/home" replace={true}></Navigate>}
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://play-lh.googleusercontent.com/7AqkqoXcI6BAd_2WZMToBXnt6am6qD1fJQmMHp0YNKwytXEi8EKpRqiuqpkPDUNhey0"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Briefly fill out Health Details
          </h2>
        </div>

        <div className="mt-10 w-full sm:mx-auto sm:w-full sm:max-w-[40vw]">
          <form
            noValidate
            className="space-y-6 p-2"
            onSubmit={
                handleSubmit(async (data) => {
              console.log( formData);
              const newData = {FamilyHistory: formData[0][0], chronicDisease: formData[1][1], goal:formData[2][2]};
              console.log(newData);
            //   const newData = {Fullname:data.name,email:data.email,password:data.confirmPassword,age:data.age,weight:data.weight,disease:"Cold"}
              const response = await axios.post('http://localhost:8080/healthform', newData);
             if(response.ok){
              <Navigate to='/home' replace="true"></Navigate>
             }
            })}
          >
            <div>
              <label
                htmlFor=" Family history of medical conditions"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Family history of medical conditions
              </label>
              <div className="mt-2">
                
                <Select
                  id=" Family history of medical conditions"
                 
                  name='FamilyHistory'
                  type="text"
                  isMulti
                  options={options}
                  value={selectedConditions}
                  onChange={(e)=>handleChange(e,0)}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
               Any Chronic Disease?
              </label>
              <div className="mt-2">
                <Select
                  id=" Any Chronic Disease?"
                
                  name='ChronicDisease'
                  type="text"
                  isMulti
                  options={options}
                  value={selectedConditions}
                  onChange={(e)=>handleChange(e,1)}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div className=' flex gap-10 justify-between items-center'>
            <div>
              <label
                htmlFor="Goals"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Health Goals
              </label>
              <div className="mt-2">
                <Select
                  id="Goals"
                
                  name='goals'
                  type="text"
                  isMulti
                  options={options2}
                  value={selectedConditions}
                  onChange={(e)=>handleChange(e,2)}
                  className="p-2 block w-[15vw] rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.age && (
                  <p className="text-red-500">{errors.age.message}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
            Current medications or supplements being taken
              </label>
              <div className="mt-2">
                <input
                  id="Current medications or supplements being taken"
                  {...register('medications', {
                    required: 'This field is required',
                 
                  })}
                  name='medications'
                  type="text"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.weight && (
                  <p className="text-red-500">{errors.weight.message}</p>
                )}
              </div>
            </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
             Submit
              </button>
            </div>
          </form>

         
        </div>
      </div>
      </>
    
  )
}

export default HealthForm