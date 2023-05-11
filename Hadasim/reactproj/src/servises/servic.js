import React from "react";
import axios from "axios";

class MyService {
   
    async getUsers() {
        const response = await axios.get('http://localhost:5000/people/');
        return response.data;
      }
           
        async createUser(user) {
            const response = await axios.post('http://localhost:5000/people/');
            return response.data;
          }


     
    
  }
  
  export default MyService;