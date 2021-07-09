

// log the date 
export const logData = data => console.log(data);

// convet the data to json format 
export const jsonify = data => {return data.json()};

// log error 
export const logError = error =>{ console.log("Looks like something went wrong " + error)};

// check the status of response 
export const validateResponse = (response) => {
    if(!response.ok){
        new Error (response.statusText);
    }else{
        return response;
    }
}

// return a random integer 
export const randomInt = () =>{ return Math.ceil(Math.random() * 10)}


