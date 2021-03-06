let _singleton = Symbol();

const PROFILE_API_URL ='http:localhost:4000/';

const PROFILE_API_URL_2 ='https://search-family-connect-yxkcvbyyu23nvxep2x42ntvjtm.us-east-2.es.amazonaws.com/parent/profile';


class ProfileService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    createProfile(profile) {
        return fetch(PROFILE_API_URL, {
            body: JSON.stringify(profile),
            credentials : 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    findAllProfiles() {
        return fetch(PROFILE_API_URL+'/_search')
            .then(function(response){
                return response.json();
            });
    }

    updateChild(userId,user) {
        return fetch('http://localhost:4000/child', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    updateParent(userId,user) {
        return fetch('http://localhost:4000/parent', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}


    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ProfileService(_singleton);
        return this[_singleton]
    }

}

export default ProfileService;