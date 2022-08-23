import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth'
  import auth from '../firebase.config'
  
  const useAuth = () => {
    const registerWithEmailAndPassword = async (email, password) => {
      await createUserWithEmailAndPassword(auth, email, password)
    }
  
    const registerOrLoginWithGoogle = async () => {
      await signInWithPopup(auth, new GoogleAuthProvider())
    }
  
    const loginWithEmailAndPassword = async (email, password) => {
      await signInWithEmailAndPassword(auth, email, password)
    }
  
    const logout = async () => {
      await signOut(auth)
    }
  
    const getUserData = () => {
      return auth.currentUser
    }
  
    return {
      registerWithEmailAndPassword,
      registerOrLoginWithGoogle,
      loginWithEmailAndPassword,
      logout,
      getUserData,
    }
  }
  
  export default useAuth