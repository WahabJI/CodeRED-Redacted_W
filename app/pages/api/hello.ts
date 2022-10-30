// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//Learn about Next.js API endpoints: https://nextjs.org/learn/basics/api-routes/creating-api-routes#:~:text=Creating%20a%20simple%20API%20endpoint
import type { NextApiRequest, NextApiResponse } from 'next'
import { Duffel } from '@duffel/api'
type Data = {
  name: string
}

//Serverless Functions (also known as Lambdas).
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

//FIREBASE---------------------------------------
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc
}from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCj2X9Ged2WwScobUc1Jtl0VddzpMdmhV8",
  authDomain: "dunya-28c39.firebaseapp.com",
  projectId: "dunya-28c39",
  storageBucket: "dunya-28c39.appspot.com",
  messagingSenderId: "412269448632",
  appId: "1:412269448632:web:01084502273d3cc3e9534d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'TESTING')

//get collection data
getDocs(colRef)
  .then((snapshot) => {
      let tempArray: any = []
      snapshot.docs.forEach((doc) => {
        tempArray.push({ ...doc.data(), id: doc.id})
      })
      console.log(tempArray)
  })
  .catch(err => {
    console.log(err.message)
  })
  

//FIREBASE---------------------------------------
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   getDocs
// }from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyCj2X9Ged2WwScobUc1Jtl0VddzpMdmhV8",
//   authDomain: "dunya-28c39.firebaseapp.com",
//   projectId: "dunya-28c39",
//   storageBucket: "dunya-28c39.appspot.com",
//   messagingSenderId: "412269448632",
//   appId: "1:412269448632:web:01084502273d3cc3e9534d"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// //init services
// const db = getFirestore()

// //collection ref
// const colRef = collection(db, 'TESTING')

// //get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//       console.log(snapshot.docs)
//   })

  const addBookForm = document.querySelector('.add') as HTMLInputElement
  addBookForm?.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
      TEST: addBookForm.title.valueOf()
  })
})