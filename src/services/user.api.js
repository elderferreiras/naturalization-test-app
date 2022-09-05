import localforage from 'localforage';

export const fetchUser = (username) => localforage.getItem(username);

export const updateUser = (username, values) => localforage.setItem(username, values);
