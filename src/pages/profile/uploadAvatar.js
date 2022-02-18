import { useState, useEffect } from "react";

function Avatar(prop) {
    
    const [avatar, setAvatar] = useState();
    var avt = avatar?false:true;

    useEffect(() => {
        return () => {
        avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handleChange = (e) => {
        if(e.target.files[0]){
            const files = e.target.files[0];
            console.log(1212);
            files.preview = URL.createObjectURL(files);
            setAvatar(files);
        }  
    };
    const changephotonow = ()=>{
        prop.state(false);
    }
    return (
        <div id="setAvatar-now" className="upload-avt container">
            <div className="row">
                <div className="col-lg-2 col-1"></div>
                <div className="col-lg-8 col-10 upload-avt-body">
                    <button className="btnexit" onClick={changephotonow}>
                        <img src={require('../../asset/icon/x-lg.svg').default} 
                        alt='mySvgImage'/>
                    </button>
                    <input id="uploadfile-input" type="file" onChange={handleChange} title="Upload file"/>
                    <img src={avt?require('../../asset/icon/image-default.svg').default:avatar.preview} 
                    alt='myImage' />
                    <button className='btn-normal' 
                        onClick={changephotonow}
                    >Save</button>
                </div>
            </div>
        </div>
    );
}

export default Avatar;
