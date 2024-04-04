import PropTypes from 'prop-types';
export const PersonalDetails = (props)=>{



    return (

        <div className="mt-4 flex place-content-center flex-col items-center">
            <h3>Name : {props.name}</h3>
            <h3>Age : {props.age}</h3>
            <h3>Married : {props.ismarried ? "single" : "Yes"}</h3>
            <h3>Gender : {props.gender}</h3>
        </div>

    )


}

PersonalDetails.propTypes = {

    name : PropTypes.string,
    age : PropTypes.number,
    married : PropTypes.bool,
    gender : PropTypes.string,              

}