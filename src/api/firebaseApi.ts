import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";
import { IUser } from "../models/IUser";

export default class UsersService {
  static async getAllUsers(): Promise<IUser[]> {
    try {
      const ref = query(
        collection(firebaseDB, "math-game"),
        orderBy("score", "desc")
      );
      const querySnapshot = await getDocs(ref);
      const users: IUser[] = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id } as IUser); // Include doc.id for reference
      });

      return users;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getUserById(targetUser: IUser): Promise<IUser> {
    try {
      console.log("seacrch by", targetUser.id);
      const q = query(
        collection(firebaseDB, "math-game"),
        where("id", "==", targetUser?.id)
      );
      const querySnapshot = await getDocs(q);
      let user: IUser | null = null;

      querySnapshot.forEach((doc) => {
        user = { ...doc.data(), id: doc.id } as IUser;
      });

      if (!user) {
        console.log("Non user!")
        const userRef = doc(firebaseDB, "math-game", String(targetUser.id));  
        user = { id: targetUser.id, score: 0, name: targetUser.name }; 
        await setDoc(userRef, user);
      }

      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async updateUserScore(user: IUser, newScore: number): Promise<void> {
    try {
      // @ts-ignore  
      const userRef = doc(firebaseDB, "math-game", user.id);
      await updateDoc(userRef, {
        score: newScore,
      });
      console.log("UPDATE!")
    } catch (error) {
      console.error("Error updating user score:", error);
      throw error;
    }
  }
}
