export default function validate(data){
  const errorMsg = {}
  const mailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!data.firstName){
    errorMsg.firstName = "First Name cannot be empty"
  }

  if(!data.lastName){
    errorMsg.lastName = "Last Name cannot be empty"
  }

  if(!data.password){
    errorMsg.password = "Password cannot be empty"
  }

  if(!data.mail){
    errorMsg.mail = "Email cannot be empty"
  }else if(!data.mail.match(mailValidator)) {
    errorMsg.mail = "Looks like this is not an email"
  }

  return errorMsg
}
