
const emptyRegex = /^\s*$/;

export const isEmpty = (value) => {
    return emptyRegex.test(value);
}

export const isFormValid = (details, isRegister = true) => {
    const message = []
    const hasOrg = details.hasOrganization;
    const exclude = ["organizationName", "organizationAddress"];

    for (const [id, value] of Object.entries(details)) {

        if(hasOrg && exclude.includes(id)){
            if(isEmpty(value)){
                message.push(`Empty Field on ${id}`);
            }
            continue;
        }

        if(isEmpty(value) && !exclude.includes(id)){
            message.push(`Empty Field on ${id}`);
            continue;
        }
    }

    if(details.password.length < 8){
        message.push("Password must be at least 8 characters")
    }

    if(details.password !== details.confirmPassword && isRegister){
        message.push("Password did not match");
    }

    return message;

}