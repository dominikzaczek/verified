import generateListOfSportTypes from "@/app/functions/generateListOfSportTypes"

export default async function TypesBar(){
    const types = generateListOfSportTypes();

    if(!types.success){
        return "There was an error";
    }

    return null;
}