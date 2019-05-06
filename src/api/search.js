import axios from "axios";

export const searchUsers = data =>
    axios
        .get(`/search/users?q=${data}`)
        .then(response => {
            // handle success
            console.log(response);
            return response;
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
