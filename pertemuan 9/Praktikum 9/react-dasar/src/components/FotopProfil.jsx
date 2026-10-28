import fotogue from '../assets/FotoProfile.jpg'

function FotoProfile(){
    return (
        <>
        <img
        src={fotogue}
        alt="foto profil"
        className="foto-profil"
        />
        <figcaption>foto gw skrg dan selamanya🤙😎</figcaption>
        </>
    );
}
export default FotoProfile;