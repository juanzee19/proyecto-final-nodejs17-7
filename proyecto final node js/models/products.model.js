
import { doc, setDoc, collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import db from "../config/firebase.js"; 

const collectionName = "products";


export const getProducts = async () => {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProduct = async (id) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() };
};

export const createProduct = async (productData) => {
  const { id, ...data } = productData;
  if (!id) throw new Error("Falta el campo 'id'");

  const docRef = doc(db, collectionName, id); 
  await setDoc(docRef, data); 
  return { id, ...data };
};

export const deleteProduct = async (id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};
