import profilesData from './../../data/berlin.json'
import Profile from './Profile'
import './FaceBookSimple.css'
import { useState } from 'react';
function FaceBookSimple () {
    const [profiles, setProfiles] = useState(profilesData)
    const countries = [...new Set(profilesData.map(person => person.country))];
 
    return (
        <div className='container' >
            <div className='buttons'>
                <button>All</button>
            {countries.map((country)=><button key={country}>{country}</button>)}
            </div>
            <div className="facebook-simple">
            {profiles.map((profile)=> <Profile key={Math.random().toString(36).substr(2, 9)} profile={profile}/>)}

            </div>
        </div>
    )
}

export default FaceBookSimple;