import { collection, getDocs } from "firebase/firestore";
import { db } from "src/firebase";
import { MyMovies } from "src/interface/app.interface";

export const getMyMovies = async (userId?: string ) => {
    const myMovies: MyMovies[] = []
    const querySnapshot = await getDocs(collection(db, "myMovies"));
    querySnapshot.forEach((doc) => {
        if(doc.data().userId == userId){
            myMovies.push(doc.data() as MyMovies)
        }
    });

    return myMovies; 
}