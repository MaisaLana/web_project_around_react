 class Api {
    constructor(request){
        this._baseUrl = request.baseUrl;
        this._headers = request.headers;
        this._method = request.method;
    }

     _checkResponse(res){
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Erro: ${res.status}`);
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`,
            {headers: this._headers})
            .then(this._checkResponse);
    }

    getInitialCards(){
        return fetch(`${this._baseUrl}/cards/`,
            {headers: this._headers})
            .then(this._checkResponse);
    }

    editProfile(data){
        return fetch(`${this._baseUrl}/users/me`,{
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
             name: data.name,
             about: data.about
            })
        }).then(this._checkResponse);
    }


    addCard(data){
        return fetch(`${this._baseUrl}/cards/`,{
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
             name: data.name,
             link: data.link,
             like: data.like
            })
        })
        .then(this._checkResponse);
    }


    deleteCard(id){
        return fetch(`${this._baseUrl}/cards/${id}`,{
            method: "DELETE",
            headers: this._headers
        })
        .then(this._checkResponse);

    }

    likedCard(id){
       return fetch(`${this._baseUrl}/cards/${id}/likes`,{
            method: "PUT",
            headers: this._headers,
        })
        .then(this._checkResponse);
    }

    disLikedCard(id){
       return fetch(`${this._baseUrl}/cards/${id}/likes`,{
            method: "DELETE",
            headers: this._headers,
        })
        .then(this._checkResponse);
    }

    editImageProfile(data){
       return fetch(`${this._baseUrl}/users/me/avatar`,{
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
             avatar: data.link
            })
        })
        .then(this._checkResponse);
    }

 }
 
 const API = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "4d6c5a35-bd42-4b4d-bec8-cf5b5ab26f12",
    "Content-Type": "application/json"
  },
});

export default API;

//   {
//   "user": {
//     "name": "Jacques Cousteau",
//     "about": "Explorador",
//     "avatar": "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/common/avatar.jpg",
//     "_id": "27d7be6e23d74fe4e8f923c7"
//   },
//   "token": "4d6c5a35-bd42-4b4d-bec8-cf5b5ab26f12"
// }