import localforage from 'localforage';
import { Auth } from 'aws-amplify';

export const fetchUser = (username) => localforage.getItem(username);

export const updateUser = (username, values) => localforage.setItem(username, values);

export const signOut = () => Auth.signOut()
